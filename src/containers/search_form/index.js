import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

// components
import Location from "../../components/location"
import Target from "../../components/target"

class SearchForm extends Component {
  render() {
    const search = this.props.search;
    return (
      <div>
        Search Form
        <Target />
        <Location location={search.location} />
        <button className="search">Search</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { search: state.search }
}

export default connect(mapStateToProps)(SearchForm)
