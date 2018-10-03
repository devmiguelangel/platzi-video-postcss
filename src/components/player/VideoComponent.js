import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './video.styl';


export default class VideoComponent extends PureComponent {
  componentDidUpdate = (prevProps, prevState) => {
    const { pause } = this.props;

    if (prevProps.pause !== pause) {
      if (pause) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }
  }

  render() {
    const {
      src,
      autoPlay,
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    } = this.props;

    return (
      <div className="Video">
        <video
          src={src}
          autoPlay={autoPlay}
          ref={(video) => { this.video = video; }}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    );
  }
}

VideoComponent.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  pause: PropTypes.bool.isRequired,
  handleLoadedMetadata: PropTypes.func.isRequired,
  handleTimeUpdate: PropTypes.func.isRequired,
  handleSeeking: PropTypes.func.isRequired,
  handleSeeked: PropTypes.func.isRequired,
};
