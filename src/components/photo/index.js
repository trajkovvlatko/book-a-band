import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.src} alt={this.props.src} />
      </div>
    );
  }
}

export default Photo;
