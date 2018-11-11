import React, { Component } from 'react';
import './media.css';

class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div>
          <img 
            src=""
            alt=""
            width={260}
            height={160}
          />
          <h3>Video Title</h3>
          <p>Video Description</p>
        </div>
      </div>
    )
  }
}

export default Media;