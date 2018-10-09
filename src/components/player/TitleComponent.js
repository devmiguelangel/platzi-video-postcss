import React from 'react';
import PropTypes from 'prop-types';

// import './title.styl';


const TitleComponent = (props) => {
  const { title } = props;

  return (
    <div className="Title">
      <h2>{title}</h2>
    </div>
  );
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleComponent;
