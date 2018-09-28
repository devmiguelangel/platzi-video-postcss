import React from 'react';
import PropTypes from 'prop-types';
import PlaylistComponent from '../playlist/PlaylistComponent';

import './category.styl';


const CategoryComponent = (props) => {
  const {
    title, description, playlist, handleVisibleModal,
  } = props;

  return (
    <div>
      <p className="Category-title">{title}</p>
      <p className="Category-description">{description}</p>
      <PlaylistComponent
        playlist={playlist}
        handleVisibleModal={handleVisibleModal}
      />
    </div>
  );
};

CategoryComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
  handleVisibleModal: PropTypes.func.isRequired,
};

export default CategoryComponent;
