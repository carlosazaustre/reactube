import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <video
          controls
          autoPlay
          src="./videos/googlehome.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;