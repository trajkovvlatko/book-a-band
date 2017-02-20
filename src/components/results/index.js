import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import BandResultItem from "../band_result_item/index";
import VenueResultItem from "../venue_result_item/index";

class Results extends Component {
  render() {

    let resultItems;

    if (!this.props.search.fetched) {
      resultItems = "";
    } else {
      resultItems = this.props.search.results.map( (item) =>
        (this.props.search.target === "band") ?
          <BandResultItem item={item} key={item.id} /> :
          <VenueResultItem item={item} key={item.id} />
      );
    }

    return (
      <div>
        Results
        <ul>
          {resultItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(Results)
