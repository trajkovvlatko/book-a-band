import React, { Component } from 'react';
import './styles.css';

class Location extends Component {
  render() {
    // const location = this.props.location || "";
    return (
      <div>
        Location: <input type="text" value={this.props.location} />
      </div>
    );
  }
}

export default Location;
