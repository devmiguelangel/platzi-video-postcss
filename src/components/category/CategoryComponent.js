import React from 'react';
import PlaylistComponent from './../playlist/PlaylistComponent';


const CategoryComponent = (props) => {
  const { title, description, playlist } = props;

  return (
    <div>
      <h5>{title}</h5>
      <h6>{description}</h6>
      <PlaylistComponent playlist={playlist} />
    </div>
  )
}

export default CategoryComponent;