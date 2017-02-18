import React, { Component } from 'react';

class Video extends Component {
  render() {
    const src = this.props.src.replace("watch?v=", "embed/");
    return (
      <div className="video">
        <iframe width="560" height="315" src={src} frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}

export default Video;
