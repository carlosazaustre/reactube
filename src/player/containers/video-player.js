import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    });
  }

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay,
    });
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Video Name"
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={this.state.duration}
          />
        </Controls>
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src="./videos/googlehome.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;