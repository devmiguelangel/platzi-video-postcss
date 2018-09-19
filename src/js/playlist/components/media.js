import React, { Component } from 'react';


class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div className="Media-cover">
          <img src="/src/images/bitcoin.jpg" alt="" width={260} height={160} className="Media-image" />
          <h3 className="Media-title">¿Por que aprender ReactJS?</h3>
          <p className="Media-author">Miguel Angel</p>
        </div>
      </div>
    )
  }
}

export default Media;