import React from 'react';
import PropTypes from 'prop-types';
import FullScreenIcon from '../icon/full-screen';

import './full-screen.styl';

const FullScreenComponent = (props) => {
  const { handleFullScreen } = props;

  return (
    <button onClick={handleFullScreen} className="FullScreen">
      <FullScreenIcon color="grey" size={35} />
    </button>
  );
};

FullScreenComponent.propTypes = {
  handleFullScreen: PropTypes.func.isRequired,
};

export default FullScreenComponent;
