import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import ResultItem from "../result_item/index";

class Results extends Component {
  render() {
    const resultItems = (this.props.search.fetched) ? this.props.search.results.map( (item) =>
      <ResultItem item={item} key={item.id} />
    ) : "";
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
