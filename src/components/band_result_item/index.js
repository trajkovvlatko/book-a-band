import React, { Component } from 'react';
import { Link } from 'react-router'

import Photo from "../photo/index";

class BandResultItem extends Component {
  render() {
    const band = this.props.item;
    const link = `bands/${this.props.item.id}`;
    const photos = band.photos.slice(0, 3).map( (src, i) =>
      <Photo src={src} key={i} />
    );
    const genres = band.genres.slice(0, 3).join(", ");

    return (
      <div>
        <div>
          Photos:
          <div className="photos">
            {photos}
          </div>
        </div>
        <Link to={link}>
          {band.name}
        </Link>
        <div className="genres">
          {genres}
        </div>
      </div>
    );
  }
}

export default BandResultItem;
