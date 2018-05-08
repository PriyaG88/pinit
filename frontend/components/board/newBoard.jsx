import React, { Component, Fragment } from 'react';
import Add from '../../icons/add';

class NewBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Fragment>
        <div className='create-board-container'>
          <div className='create-board-btn'>
            <Add />
          </div>
          <div className='create-board-footer'>Create board</div>
        </div>
        { this.state.isOpen && <CreateBoardModal /> }
      </Fragment>
    );
  }
}

export default NewBoard;
