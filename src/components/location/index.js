import React, { Component } from 'react';
import './styles.css';

class Location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  componentWillReceiveProps(nextProps) {
     this.setState({ location: nextProps.location })
  }

  handleOnChange(e) {
    this.setState({ location: e.target.value })
  }

  render() {
    return (
      <div>
        Location:
        <input
          type="text"
          value={this.state.location || ""}
          onChange={this.handleOnChange.bind(this)} />
      </div>
    );
  }
}

export default Location;
