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

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='modal-overlay'>
        <div className='form-container'>
          <form className='board-form' onSubmit={this.handleSubmit}>
            <div className='board-form-header board-form-section'>
              <h4 className='board-form-title'>Create board</h4>
              <span className='board-cancel-container'
                onClick={this.props.toggleModal}>x</span>
            </div>
            <div className='board-name-container board-form-section'>
              <label>Name
                <input type='text'
                  onChange={this.handleChange}
                  value={this.state.name}
                  className='board-name-input'
                  placeholder='Like "Places to Go" or "Recipes to Make"'
                />
              </label>
            </div>
            <div className='board-form-secret board-form-section'>
              <label className='switch'>Secret
                <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </div>
            <div className='board-form-actions board-form-section'>
              <button type='button' onClick={this.props.toggleModal}>Cancel</button>
              <input type='submit' value='Create' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BoardModal;
