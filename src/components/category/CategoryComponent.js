import React from 'react';
import PlaylistComponent from './../playlist/PlaylistComponent';

import './category.styl';


const CategoryComponent = (props) => {
  const { title, description, playlist } = props;

  return (
    <div>
      <p className="Category-title">{title}</p>
      <p className="Category-description">{description}</p>
      <PlaylistComponent playlist={playlist} />
    </div>
  )
}

export default CategoryComponent;