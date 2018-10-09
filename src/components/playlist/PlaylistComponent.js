import React from 'react';
import MediaComponent from './MediaComponent';

// import './playlist.styl';


const PlaylistComponent = (props) => {
  const { playlist } = props;

  return (
    <div className="Playlist">
      {
        playlist.map(media => (
          <MediaComponent
            key={media.id}
            title={media.title}
            author={media.author}
            cover={media.cover}
            src={media.src}
            handleVisibleModal={props.handleVisibleModal}
          />
        ))
      }
    </div>
  )
}

export default PlaylistComponent;