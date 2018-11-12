import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(time) {
  const minutes = parseInt(time / 60, 10);
  const seconds = parseInt(time % 60, 10);
  return `${minutes}:${leftPad(seconds.toString())}`;
}
class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: '0:00',
  }

  togglePlay = () => {
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
      duration: formattedTime(this.video.duration)
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
    });
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
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
        </Controls>
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="./videos/googlehome.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;