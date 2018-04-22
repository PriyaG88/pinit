import React, { Component } from 'react';
import OAuth from './oAuth';
import Logo from '../../icons/logo';

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      age: ''
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  render() {
    return (
      <div className='session-container'>
        <div className='session-form-container'>
          <div className='logo-container'>
            <Logo />
          </div>
          <h2 className='heading'>Welcome to Pinterest</h2>
          <h4 className='heading-slogan'>Find new ideas to try</h4>
          <form onSubmit={this.handleSubmit} className="session-form">
            <input
              onChange={this.update('email')}
              type='email'
              placeholder='Email'
              required
              className='session-input'></input>
            <input
              onChange={this.update('password')}
              type='password'
              required
              placeholder='Create a password'
              className='session-input'></input>
            <input
              onChange={this.update('age')}
              type='number'
              required
              placeholder='Age'
              className='session-input'></input>
            <input
              type='submit'
              value='Continue'
              className='session-continue-btn'></input>
          </form>
          <OAuth />
          <div className='terms'>
            <p>By continuing, you agree to Pinterest's Terms of Service, Privacy
            Policy
            </p>
          </div>
          <div className='session-info-container'>
            <div className='session-info-content'>
              <p>Pinterest helps you find ideas to try.</p>
              <button type='button' className='info-btn'>How it works</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
