import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/main';

// layouts
import SearchPage from './layouts/search_page/index';
import BandsPage from './layouts/bands_page/index';
import VenuesPage from './layouts/venues_page/index';

let store = createStore(
  reducer,
  applyMiddleware(thunk, promise(), createLogger())
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

store.dispatch({ type: "SET_LOCATION", payload: "Stockholm" })
store.dispatch({ type: "SET_TARGET", payload: "band" })
store.dispatch({ type: "SET_SORTING", payload: "rating" })
