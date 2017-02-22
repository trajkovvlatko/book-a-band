import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';

class Target extends Component {

  handleOnChange(e) {
    this.props.dispatch({
      type: "CLEAR_RESULTS"
    });
    this.props.dispatch({
      type: "SET_TARGET",
      payload: e.target.value
    });
  }

  render() {
    const target = this.props.target;
    return (
      <div>
        Looking for a:
        <select value={target} onChange={this.handleOnChange.bind(this)}>
          <option value="band">Band</option>
          <option value="venue">Venue</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { target: state.search.target }
}

export default connect(mapStateToProps)(Target)
