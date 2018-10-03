import React from 'react';
import PropTypes from 'prop-types';

import './video-control.styl';


const VideoControlComponent = (props) => {
  const { children } = props;

  return (
    <div className="Video-control">
      {children}
    </div>
  );
};

VideoControlComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

export default VideoControlComponent;
