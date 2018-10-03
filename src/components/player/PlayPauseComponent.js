import React from 'react';
import PropTypes from 'prop-types';
import PlayComponent from '../icon/play';
import PauseComponent from '../icon/pause';

import './play-pause.styl';


const PlayPauseComponent = (props) => {
  const { pause, handlePause } = props;

  return (
    <div className="PlayPause">
      {
        pause ? (
          <button onClick={handlePause}>
            <PauseComponent color="grey" size={35} />
          </button>
        ) : (
          <button onClick={handlePause}>
            <PlayComponent color="grey" size={35} />
          </button>
        )
      }
    </div>
  );
};

PlayPauseComponent.propTypes = {
  pause: PropTypes.bool.isRequired,
  handlePause: PropTypes.func.isRequired,
};

export default PlayPauseComponent;
