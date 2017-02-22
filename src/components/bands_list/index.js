import React, { Component } from 'react';
import './styles.css';

import BandResultItem from '../band_result_item';

class BandsList extends Component {
  render() {
    console.log(this.props.bands);
    const bands = this.props.bands;

    return (
      <div className="bands">
        {bands.map( (band, i) =>
          <BandResultItem item={band} key={i} />
        )}
      </div>
    );
  }
}

export default BandsList;
