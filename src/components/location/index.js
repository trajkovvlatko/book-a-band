import React, { Component } from 'react';
import './styles.css';

class Location extends Component {
  render() {
    return (
      <div>
        Location: <input type="text" defaultValue={this.props.location} />
      </div>
    );
  }
}

export default Location;
