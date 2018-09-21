import React from 'react';
import Media from './media';
import Play from './../../icons/components/play';
import Pause from './../../icons/components/pause';
import Volume from './../../icons/components/volume';
import FullScreen from './../../icons/components/full-screen';


const Playlist = (props) => {
  const { api } = props;
  const playlist = api.categories[0].playlist;

  return (
    <div className="Playlist">
      <FullScreen size={32} color="green" />
      {
        playlist.map(media => {
          return (
            <Media
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

export default Playlist;