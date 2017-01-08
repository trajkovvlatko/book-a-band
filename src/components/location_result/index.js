import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class LocationResult extends Component {

  handleOnChange(e) {
    const id = parseInt(e.target.value, 10);
    let locationIds = this.props.location_ids;
    if (e.target.checked) {
      locationIds.push(id);
    } else {
      let index = locationIds.indexOf(id);
      locationIds.splice(index, 1);
    }
    this.props.dispatch({
      type: "SET_LOCATION_IDS",
      payload: locationIds
    })
  }

  render() {
    const item = this.props.item;
    return (
      <div>
        <input type="checkbox" value={item.id} onChange={this.handleOnChange.bind(this)} />
        {item.location}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location_ids: state.search.location_ids,
  }
}

export default connect(mapStateToProps)(LocationResult)
