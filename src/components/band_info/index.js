import React, { Component } from 'react';
import { Link } from 'react-router'

import Photo from "../photo/index";
import Video from "../video/index";

class BandInfo extends Component {
  render() {
    const band = this.props.band;
    const photos = band.photos.map( (src, i) =>
      <Photo src={src} key={i} />
    );
    const videos = band.videos.map( (src, i) =>
      <Video src={src} key={i} />
    );
    const genres = band.genres.map( (genre, i) =>
      <Link to={"/genres/" + genre.id} key={i}>{genre.name}</Link>
    ).reduce((prev, curr) => [prev, ', ', curr])
    return (
      <div>
        <div>
          {band.name}
        </div>
        <div>
          {band.description}
        </div>
        <div>
          Contact
        </div>
        <div>
          <a href={"mailto:" + band.email}>Send email</a>
        </div>
        <div>
          Phone: {band.phone}
        </div>
        <div>
          Location: {band.location.location}
          <br />
          <Link to={"/locations/" + band.location.id + "/bands"}>More bands nearby</Link>
        </div>
        <div>
          Website: <a href={band.website} target="_blank">{band.website}</a>
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
          Likes: {band.likes}
        </div>
        <div>
          Page views: {band.page_views}
        </div>
        <div>
          Bookings: {band.bookings}
        </div>
        <div>
          Genres:
          <div className="genres">
            {genres}
          </div>
        </div>
      </div>
    );
  }
}

export default BandInfo;
