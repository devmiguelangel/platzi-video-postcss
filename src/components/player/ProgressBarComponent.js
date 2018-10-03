import React from 'react';
import PropTypes from "prop-types";

import './progress-bar.styl';


const ProgressBarComponent = (props) => {
  const { duration, currentTime, handleProgress } = props;

  return (
    <div className="ProgressBar">
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleProgress}
      />
    </div>
  );
};

ProgressBarComponent.propTypes = {
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  handleProgress: PropTypes.func.isRequired,
};

export default ProgressBarComponent;
