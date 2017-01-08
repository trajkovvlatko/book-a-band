import React, { Component } from 'react';

class VenueInfo extends Component {
  render() {
    const venue = this.props.venue;
    return (
      <div>
        <div>
          {venue.name}
        </div>
        <div>
          {venue.email}
        </div>
      </div>
    );
  }
}

export default VenueInfo;
