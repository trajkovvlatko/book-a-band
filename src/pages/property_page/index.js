import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from 'react-router'

import './styles.css';

import VenuesList from '../../components/venues_list';

class PropertyPage extends Component {

  componentDidMount() {
    this.fetchProperty();
    this.fetchPropertyVenues();
  }

  fetchProperty() {
    const url = `/stubs/property.json?id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_PROPERTY",
      payload: axios.get(url)
    })
  }

  fetchPropertyVenues() {
    const url = `/stubs/venues.json?property_id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_VENUES",
      payload: axios.get(url)
    })
  }

  handleOnClick() {
    history.back();
  }

  render() {
    const property = this.props.property;
    const venues = this.props.venues;

    return (
      <div>

        {property.fetching ?
          <div>Fetching property...</div>
        : ""}

        {property.results ?
          <h1>Property: {property.results.name}</h1>
        : ""}


        {venues.fetching ?
          <div>Fetching venues...</div>
        : ""}

        {venues.results && venues.results.length > 0 ?
          <VenuesList venues={venues.results} />
        : ""}

        <Link onClick={this.handleOnClick}>Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    property: state.property,
    venues: state.venues
  }
}

export default connect(mapStateToProps)(PropertyPage)
