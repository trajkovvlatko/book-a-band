import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';

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
    return (
      <div>
        <h1>Band Page</h1>

        {this.props.band.fetching ?
          <div>Fetching...</div>
        : ""}

        {this.props.band.result ?
          <BandInfo band={this.props.band.result} />
        : ""}

        <a href="/">Back</a>
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
