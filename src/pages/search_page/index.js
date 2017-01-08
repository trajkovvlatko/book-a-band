import React, { Component } from 'react';
import './styles.css';

import SearchForm from '../../components/search_form';
import Results from '../../components/results';

class SearchPage extends Component {

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <SearchForm />
        <Results />
      </div>
    );
  }
}

export default SearchPage;
