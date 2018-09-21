import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class MediaComponent extends PureComponent {
  state = {
    author: this.props.author,
  }

  handleClick = (event) => {
    // console.log(this.props.title);
    this.setState({
      author: 'Angel Miguel',
    });
  }

  render() {
    const { author } = this.state;
    const { title, cover } = this.props;

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img src={cover} alt="" width={260} height={160} className="Media-image" />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

MediaComponent.propTypes = {
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default MediaComponent;