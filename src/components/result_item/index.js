import React, { Component } from 'react';

class ResultItem extends Component {
  render() {
    const link = `${this.props.item.type}s/${this.props.item.id}`;
    return (
      <div>
        <a href={link}>{this.props.item.name}</a>
      </div>
    );
  }
}

export default ResultItem;
