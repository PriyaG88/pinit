import React, { Component } from 'react';

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
            <svg height="50" viewBox="-3 -3 82 82" width="50" data-reactid="19">
              <circle cx="38" cy="38" fill="white" r="40" data-reactid="20"></circle>
              <path d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z" fill="#BD081C" fillRule="evenodd" data-reactid="21">
              </path>
            </svg>
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
          <p className='or'>Or</p>
          <button type='button' className='session-login-btn fb-btn'>
          Continue with Facebook</button>
          <button type='button' className='session-login-btn google-btn'>
          Continue with Google</button>
          <div className='terms'>
            <p>By continuing, you agree to Pinterest's Terms of Service, Privacy
            Policy
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
