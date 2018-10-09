import React from 'react';

// import './modal.styl';

const ModalComponent = (props) => {
  return (
    <div className="Modal">
      {props.children}

      <button
        onClick={(event) => props.handleVisibleModal(event, false)}
        className="Modal-close">
      </button>
    </div>
  )
}

export default ModalComponent;