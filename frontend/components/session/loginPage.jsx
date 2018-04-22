import React, { Component } from 'react';
import OAuth from './oAuth';
import Logo from '../../icons/logo';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  render() {
    return (
      <div className='session-login-container'>
        <div className='login-form-container'>
          <div className='logo-container'>
            <Logo />
          </div>
          <div className='login-heading-container'>
            <h2 className='heading login-heading'>Log in to see more</h2>
          </div>
          <div className='slogan-content'>
            <h4 className='heading-slogan login-slogan'>Free, unlimited access to content</h4>
            <h4 className='heading-slogan login-slogan'>Discover new ideas to try</h4>
          </div>
          <form onSubmit={this.handleSubmit} className='session-form login-form'>
            <input
              onChange={this.update('email')}
              type='email'
              placeholder='Email'
              required
              className='session-input login-input'
              ></input>
            <input
              onChange={this.update('password')}
              type='password'
              placeholder='Password'
              required
              className='session-input login-input'
              ></input>
              <input
                type='submit'
                value='Log in'
                className='session-login-btn'></input>
          </form>
          <OAuth />
        </div>
      </div>
    );
  }
}

export default LoginPage;
