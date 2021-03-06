import React, { Component } from 'react';
import axios from "axios";
import './styles.css';
import { connect } from 'react-redux';
import { debounce } from '../../helpers/main_helper';

import LocationResult from "../location_result/index";

class Location extends Component {
  constructor() {
    super();
    this.fetchLocations = debounce(this.fetchLocations, 500);
  }

  fetchLocations(value = "") {
    if (value.length < 3) {
      return false;
    }
    this.props.dispatch({
      type: "FETCH_LOCATIONS",
      payload: axios.get(`/stubs/locations.json?location=${value}`)
    })
  }

  handleOnChange(e) {
    let value = e.target.value.trim();
    this.props.dispatch({
      type: "SET_LOCATION",
      payload: value
    });
    this.fetchLocations(value);
  }

  render() {
    const location = this.props.location;
    const locationItems = this.props.locations.results.map( (item) =>
      <LocationResult key={item.id} item={item} />
    );
    return (
      <div>
        Location:
        <input type="text" value={location} onChange={this.handleOnChange.bind(this)} />
        <ul>
          {locationItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.search.location,
    locations: state.locations
  }
}

export default connect(mapStateToProps)(Location)
