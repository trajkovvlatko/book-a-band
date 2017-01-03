import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

// components
import Location from "../../components/location"
import Target from "../../components/target"

// actions
import { fetchResults } from "../../actions/resultsActions"

class SearchForm extends Component {

  handleOnClick() {
    this.props.dispatch(fetchResults())
  }

  render() {
    const search = this.props.search;
    return (
      <div>
        Search Form
        <Target />
        <Location location={search.location} />
        <button className="search" onClick={this.handleOnClick.bind(this)}>
          Search
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { search: state.search }
}

export default connect(mapStateToProps)(SearchForm)
