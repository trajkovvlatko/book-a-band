import React, { Component } from 'react';
import axios from "axios";
import './styles.css';
import { connect } from 'react-redux';

class Location extends Component {

  handleOnChange(e) {
    this.props.dispatch({
      type: "SET_LOCATION",
      payload: e.target.value.trim()
    });
    this.props.dispatch({
      type: "FETCH_LOCATIONS",
      payload: axios.get(`/stubs/locations.json?location=${e.target.value.trim()}`)
    })
  }

  render() {
    const location = this.props.location;
    const locationItems = this.props.locations.results.map( (item) =>
      <li key={item.id}>{item.location}</li>
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
