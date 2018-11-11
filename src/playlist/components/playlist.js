import React from 'react';

import Media from './media';
import './playlist.css';

function PlayList(props) {
  const playlist = props.data.categories[0].playlist;
  console.log(props.data);

  return (
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media key={item.id} {...item} />
        })
      }
    </div>
  );
}

export default PlayList;