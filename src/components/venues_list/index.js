import React, { Component } from 'react';
import './styles.css';

import VenueResultItem from '../venue_result_item';

class VenuesList extends Component {
  render() {
    const venues = this.props.venues;

    return (
      <div className="venues">
        {venues.map( (venue, i) =>
          <VenueResultItem item={venue} key={i} />
        )}
      </div>
    );
  }
}

export default VenuesList;
