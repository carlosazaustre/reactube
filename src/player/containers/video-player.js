import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

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
    currentTime: 0,
    currentVolume: 0,
    lastVolume: 1,
    loading: false,
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
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime,
    });
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = event => {
    this.setState({
      loading: true,
    });
  }

  handleSeeked = event => {
    this.setState({
      loading: false,
    });
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }

  handleToggleVolume = event => {
    this.setState({
      lastVolume: this.state.currentVolume,
      currentVolume: this.state.currentVolume === 0 ? this.state.lastVolume : 0
    });
    this.video.volume = this.state.lastVolume;
  }

  HandleFullScreenClick = event =>{
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }

  setRef = element => {
    this.player = element;
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title 
          title={this.props.title}
        />
        <Controls>
          <PlayPause 
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            currentTime={formattedTime(this.state.currentTime)}
            duration={formattedTime(this.state.duration)}
          />
          <ProgressBar 
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange}
            handleToggleVolume={this.handleToggleVolume}
          />
          <FullScreen 
            HandleFullScreenClick={this.HandleFullScreenClick}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;