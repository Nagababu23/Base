import React, { Component } from 'react';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: '' // New state property for the role
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (this.state.email === '' || this.state.password === '' || this.state.role === '') {
      alert('Please fill out all fields');
      return;
    }

    // Handle login logic here
    console.log('Login Details:', this.state);

    // Redirect based on role
    const { role } = this.state;
    if (role === 'Student') {
      this.props.history.push('/student');
    } else if (role === 'Company') {
      this.props.history.push('/company');
    } else if (role === 'Freelancer') {
      this.props.history.push('/freelancer');
    }
  };

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          
          <select
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Company">Company</option>
            <option value="Freelancer">Freelancer</option>
          </select>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login; // Wrap component to use withRouter for navigation
