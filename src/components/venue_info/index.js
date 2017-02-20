import React, { Component } from 'react';
import { Link } from 'react-router'

import Photo from "../photo/index";
import Video from "../video/index";

class VenueInfo extends Component {
  render() {
    const venue = this.props.venue;
    const photos = venue.photos.map( (src, i) =>
      <Photo src={src} key={i} />
    );
    const videos = venue.videos.map( (src, i) =>
      <Video src={src} key={i} />
    );
    const properties = venue.properties.map( (property, i) =>
      <Link to={"/properties/" + property.id} key={i}>{property.name}</Link>
    ).reduce((prev, curr) => [prev, ', ', curr])

    return (
      <div>
        <div>
          {venue.name}
        </div>
        <div>
          {venue.email}
        </div>
        <div>
          Photos:
          <div className="photos">
            {photos}
          </div>
        </div>
        <div>
          Videos:
          <div className="videos">
            {videos}
          </div>
        </div>
        <div>
          Likes: {venue.likes}
        </div>
        <div>
          Page views: {venue.page_views}
        </div>
        <div>
          Bookings: {venue.bookings}
        </div>
        <div>
          Properties:
          <div className="properties">
            {properties}
          </div>
        </div>
      </div>
    );
  }
}

export default VenueInfo;
