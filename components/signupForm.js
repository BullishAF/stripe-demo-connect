// www/pages/login.js

import {Component} from 'react';
import {handleLogin} from '../utils/auth';
import API from '../helpers/api';
import logger from '../helpers/logger';
import Link from 'next/link';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platformName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      let req = await API.makeRequest('post', `/api/signup/local`, this.state);
      handleLogin(req.token);
    } catch (err) {
      logger.log('Signup failed.', err);
    }
  }

  render() {
    return (
      <>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="new-section name"
              type="text"
              id="platformName"
              name="platformName"
              placeholder="Host location name"
              value={this.state.platformName}
              onChange={this.handleChange}
              required
            />
            <input
              className="new-section name"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />

            <input
              className="name"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />

            <input
              className="email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              className="password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <button type="submit" className="btn btn-primary btn-full">
              Create account
            </button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>
        </div>
        <style jsx>{`
          .new-section {
            margin-top: 16px;
          }

          .email {
            background: url(../email.svg) no-repeat scroll 7px 6px;
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .name {
            background: url(../person.svg) no-repeat scroll 7px 6px;
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .password {
            background: url(../lock.svg) no-repeat scroll 7px 6px;
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: red;
          }
          .error.show {
            display: block;
          }
        `}</style>
      </>
    );
  }
}

export default SignupForm;
