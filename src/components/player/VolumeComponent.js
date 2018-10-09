import React from 'react';
import PropTypes from 'prop-types';
import VolumeIcon from '../icon/volume';

// import './volume.styl';

const VolumeComponent = (props) => {
  const { volume, handleVolume } = props;

  return (
    <button className="Volume">
      <VolumeIcon color="grey" size={35} />

      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={e => handleVolume(e)}
        />
      </div>
    </button>
  );
};

VolumeComponent.propTypes = {
  volume: PropTypes.number.isRequired,
  // handleMute: PropTypes.func.isRequired,
  handleVolume: PropTypes.func.isRequired,
};

export default VolumeComponent;
