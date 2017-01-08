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
import VenuesPage from './pages/venues_page/index';

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
      <Route path="/venues" component={VenuesPage}></Route>
    </Router>
  </Provider>
), document.getElementById('root'))

store.subscribe(() => {

})
