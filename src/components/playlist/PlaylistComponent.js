import React from 'react';
import MediaComponent from './MediaComponent';

import './playlist.styl';


const PlaylistComponent = (props) => {
  const { playlist } = props;

  return (
    <div className="Playlist">
      {
        playlist.map(media => {
          return (
            <MediaComponent
              key={media.id}
              title={media.title}
              author={media.author}
              cover={media.cover}
            />
          )
        })
      }
    </div>
  )
}

export default PlaylistComponent;