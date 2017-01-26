import React, { Component } from 'react';
import { Link } from 'react-router'

class ResultItem extends Component {
  render() {
    const link = `${this.props.item.type}s/${this.props.item.id}`;
    return (
      <div>
        <Link to={link}>{this.props.item.name}</Link>
      </div>
    );
  }
}

export default ResultItem;
