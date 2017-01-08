import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';

class Location extends Component {

  handleOnChange(e) {
    this.props.dispatch({
      type: "SET_LOCATION",
      payload: e.target.value.trim()
    })
  }

  render() {
    const location = this.props.location;
    return (
      <div>
        Location:
        <input type="text" value={location} onChange={this.handleOnChange.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.search.location }
}

export default connect(mapStateToProps)(Location)
