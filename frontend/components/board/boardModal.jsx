import React, { Component } from 'react';

class BoardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      secret: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className='modal-overlay'>
        <div className='form-container'>
          <form className='board-form'>
            <h4>Create board</h4>
            <label>Name
              <input type='text'
                onChange={this.handleChange}
                value={this.state.name}
                className='board-name'
                placeholder='Like "Places to Go" or "Recipes to Make"'
              />
            </label>
            <label className='switch'>Secret
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
            <div className='board-form-actions'>
              <input type='button' value='Cancel' />
              <input type='submit' value='Create' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BoardModal;
