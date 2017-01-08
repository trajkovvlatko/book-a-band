import React, { Component } from 'react';

class BandInfo extends Component {
  render() {
    const band = this.props.band;
    return (
      <div>
        <div>
          {band.name}
        </div>
        <div>
          {band.email}
        </div>
      </div>
    );
  }
}

export default BandInfo;
