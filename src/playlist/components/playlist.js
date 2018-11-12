import React from 'react';

import Media from './media';
import './playlist.css';

function PlayList(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return (
            <Media 
              openModal={props.handleOpenModal}
              key={item.id} 
              {...item} 
            />
          );
        })
      }
    </div>
  );
}

export default PlayList;