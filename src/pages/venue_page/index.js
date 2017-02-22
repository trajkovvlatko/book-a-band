import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from 'react-router'

import './styles.css';

import VenueInfo from '../../components/venue_info';

class VenuePage extends Component {

  componentDidMount() {
    const url = `/stubs/venue.json?id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_VENUE",
      payload: axios.get(url)
    })
  }

  render() {
    return (
      <div>
        <h1>Venue Page</h1>

        {this.props.venue.fetching ?
          <div>Fetching...</div>
        : ""}

        {this.props.venue.results ?
          <VenueInfo venue={this.props.venue.results} />
        : ""}

        <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    venue: state.venue
  }
}

export default connect(mapStateToProps)(VenuePage)
