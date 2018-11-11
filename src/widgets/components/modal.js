import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button onClick={props.handleClick}>close</button>
    </div>
  )
}

export default Modal;