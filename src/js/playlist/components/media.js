import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Media extends Component {
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
    const { title, image } = this.props;

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img src={image} alt="" width={260} height={160} className="Media-image" />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;