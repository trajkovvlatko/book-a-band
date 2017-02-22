import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from 'react-router'

import './styles.css';

import BandInfo from '../../components/band_info';

class BandPage extends Component {

  componentDidMount() {
    const url = `/stubs/band.json?id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_BAND",
      payload: axios.get(url)
    })
  }

  render() {
    const band = this.props.band;

    return (
      <div>
        <h1>Band Page</h1>

        {band.fetching ?
          <div>Fetching...</div>
        : ""}

        {band.results ?
          <BandInfo band={band.results} />
        : ""}

        <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    band: state.band
  }
}

export default connect(mapStateToProps)(BandPage)
