import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

function FullScreen(props) {
  return (
    <div 
      className="FullScreen"
      onClick={props.HandleFullScreenClick}
    >
      <FullScreenIcon
        color="white"
        size={25}
      />
    </div>
  );
}

export default FullScreen;