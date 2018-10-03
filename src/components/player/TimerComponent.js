import React from 'react';
import PropTypes from 'prop-types';

import './timer.styl';


const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  minutes = (minutes >= 10) ? minutes : `0${minutes}`;

  let seconds = Math.floor(time % 60);
  seconds = (seconds >= 10) ? seconds : `0${seconds}`;

  return `${minutes}:${seconds}`;
};


const TimerComponent = (props) => {
  const { duration, currentTime } = props;

  return (
    <div className="Timer">
      <p>
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </p>
    </div>
  );
};

TimerComponent.propTypes = {
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default TimerComponent;
