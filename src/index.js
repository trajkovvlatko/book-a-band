import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducer from './reducers/main';
import initialState from './initial_state';

// pages
import SearchPage from './pages/search_page/index';
import BandsPage from './pages/bands_page/index';
import BandPage from './pages/band_page/index';
import VenuesPage from './pages/venues_page/index';
import VenuePage from './pages/venue_page/index';
import GenrePage from './pages/genre_page/index';

let store = createStore(
  reducer,
  initialState,
  applyMiddleware(promise(), createLogger())
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={SearchPage}></Route>
      <Route path="/bands" component={BandsPage}></Route>
      <Route path="/bands/:id" component={BandPage}></Route>
      <Route path="/venues" component={VenuesPage}></Route>
      <Route path="/venues/:id" component={VenuePage}></Route>
      <Route path="/genres/:id" component={GenrePage}></Route>
    </Router>
  </Provider>
), document.getElementById('root'))

store.subscribe(() => {

})
