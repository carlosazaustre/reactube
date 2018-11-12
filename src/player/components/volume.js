import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css'

function Volume(props) {
  return (
    <button
      className="Volume"
      onClick={props.handleToggleVolume}
    >
      <VolumeIcon 
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input 
          type="range" 
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
      
    </button>

  );
}

export default Volume;