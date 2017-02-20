import React, { Component } from 'react';
import { Link } from 'react-router'

import Photo from "../photo/index";

class VenueResultItem extends Component {
  render() {
    const venue = this.props.item;
    const link = `venues/${venue.id}`;
    const photos = venue.photos.slice(0, 3).map( (src, i) =>
      <Photo src={src} key={i} />
    );
    const properties = venue.properties.slice(0, 3).join(", ");

    return (
      <div>
        <div>
          Photos:
          <div className="photos">
            {photos}
          </div>
        </div>
        <Link to={link}>
          {venue.name}
        </Link>
        <div className="properties">
          {properties}
        </div>
      </div>
    );
  }
}

export default VenueResultItem;
