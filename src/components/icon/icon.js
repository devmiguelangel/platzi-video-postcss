import React from 'react';
import PropTypes from 'prop-types';


const Icon = (props) => {
  const { color, size } = props;

  return (
    <svg
      fill={color}
      width={size}
      height={size}
    >
      {props.children}
    </svg>
  );
};

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
