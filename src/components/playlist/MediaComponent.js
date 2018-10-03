import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './media.styl';

class MediaComponent extends PureComponent {
  state = {
    author: '',
  };

  render() {
    const { author } = this.state;
    const { title, cover } = this.props;

    return (
      <div
        className="Media"
        onClick={event => this.props.handleVisibleModal(event, true, this.props)}
      >
        <div className="Media-cover">
          <img src={cover} alt="" width={260} height={160} className="Media-image" />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

MediaComponent.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MediaComponent;
