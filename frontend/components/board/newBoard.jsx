import React, { Component, Fragment } from 'react';
import Add from '../../icons/add';
import BoardModal from './boardModal';

class NewBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <Fragment>
        <div className='create-board-container' onClick={this.toggleModal}>
          <div className='create-board-btn'>
            <Add />
          </div>
          <div className='create-board-footer'>Create board</div>
        </div>
        { this.state.isOpen && <BoardModal toggleModal={this.toggleModal} /> }
      </Fragment>
    );
  }
}

export default NewBoard;
