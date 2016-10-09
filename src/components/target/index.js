import React, { Component } from 'react';
import './styles.css';

class Target extends Component {
  render() {
    return (
      <div>
        Looking for a:
        <select>
          <option value="band">Band</option>
          <option value="venue">Venue</option>
        </select>
      </div>
    );
  }
}

export default Target;
