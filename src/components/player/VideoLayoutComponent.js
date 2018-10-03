import React from 'react';

import './video-layout.styl';

const VideoLayoutComponent = props => (
  <div className="Video-player" ref={props.setRefPlayer}>
    {props.children}
  </div>
);

export default VideoLayoutComponent;
