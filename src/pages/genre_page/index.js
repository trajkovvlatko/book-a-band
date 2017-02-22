import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from 'react-router'

import './styles.css';

import BandsList from '../../components/bands_list';

class GenrePage extends Component {

  componentDidMount() {
    this.fetchGenre();
    this.fetchGenreBands();
  }

  fetchGenre() {
    const url = `/stubs/genre.json?id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_GENRE",
      payload: axios.get(url)
    })
  }

  fetchGenreBands() {
    const url = `/stubs/bands.json?genre_id=${this.props.params.id}`;
    this.props.dispatch({
      type: "FETCH_BANDS",
      payload: axios.get(url)
    })
  }

  render() {
    const genre = this.props.genre;
    const bands = this.props.bands;

    return (
      <div>

        {genre.fetching ?
          <div>Fetching genre...</div>
        : ""}

        {genre.results ?
          <h1>Genre: {genre.results.name}</h1>
        : ""}


        {bands.fetching ?
          <div>Fetching bands...</div>
        : ""}

        {bands.results && bands.results.length > 0 ?
          <BandsList bands={bands.results} />
        : ""}

        <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genre: state.genre,
    bands: state.bands
  }
}

export default connect(mapStateToProps)(GenrePage)
