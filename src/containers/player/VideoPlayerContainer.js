import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VideoLayoutComponent from '../../components/player/VideoLayoutComponent';
import VideoComponent from '../../components/player/VideoComponent';
import VideoControlComponent from '../../components/player/VideoControlComponent';
import PlayPauseComponent from '../../components/player/PlayPauseComponent';
import TimerComponent from '../../components/player/TimerComponent';
import ProgressBarComponent from '../../components/player/ProgressBarComponent';
import SpinnerComponent from '../../components/player/SpinnerComponent';
import VolumeComponent from '../../components/player/VolumeComponent';
import FullScreenComponent from '../../components/player/FullScreenComponent';
import TitleComponent from '../../components/player/TitleComponent';

export default class VideoPlayerContainer extends Component {
  state = {
    pause: this.props.autoPlay,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
    previousVolume: 1,
  };

  video = null;

  player = null;

  handlePause = (event) => {
    const { pause } = this.state;

    this.setState({ pause: !pause });
  };

  handleLoadedMetadata = (event) => {
    this.video = event.target;

    this.setState({ duration: this.video.duration });
  };

  handleTimeUpdate = (event) => {
    this.setState({ currentTime: this.video.currentTime });
  };

  handleProgress = (event) => {
    this.video.currentTime = event.target.value;
  };

  handleSeeking = (event) => {
    this.setState({ loading: true });
  };

  handleSeeked = (event) => {
    this.setState({ loading: false });
  };

  handleMute = (event) => {
    event.preventDefault();

    const { volume, previousVolume } = this.state;

    const newVolume = volume > 0 ? 0 : previousVolume;

    this.video.volume = newVolume;

    this.setState({
      volume: newVolume,
      previousVolume: volume,
    });
  };

  handleVolume = (event) => {
    event.preventDefault();

    const volume = parseFloat(event.target.value);

    this.video.volume = volume;
    this.setState({ volume });
  };

  setRefPlayer = (element) => {
    this.player = element;
  };

  handleFullScreen = (event) => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  render() {
    const {
      volume, pause, duration, currentTime, loading,
    } = this.state;
    const { autoPlay, src, title } = this.props;

    return (
      <VideoLayoutComponent setRefPlayer={this.setRefPlayer}>
        <TitleComponent title={title} />
        <VideoControlComponent>
          <Fragment>
            <PlayPauseComponent pause={pause} handlePause={this.handlePause} />
            <ProgressBarComponent
              duration={duration}
              currentTime={currentTime}
              handleProgress={this.handleProgress}
            />
            <TimerComponent duration={duration} currentTime={currentTime} />
            <VolumeComponent
              volume={volume}
              handleVolume={this.handleVolume}
              // handleMute={this.handleMute}
            />
            <FullScreenComponent handleFullScreen={this.handleFullScreen} />
          </Fragment>
        </VideoControlComponent>
        {loading && <SpinnerComponent />}
        <VideoComponent
          src={src}
          autoPlay={autoPlay}
          pause={pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoLayoutComponent>
    );
  }
}

VideoPlayerContainer.propTypes = {
  autoPlay: PropTypes.bool.isRequired,
};
