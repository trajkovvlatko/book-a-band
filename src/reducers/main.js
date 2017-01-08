import { combineReducers } from 'redux'
import search from './search'
import sorting from './sorting'
import locations from './locations'
import band from './band'
import venue from './venue'

export default combineReducers({
  search,
  sorting,
  locations,
  band,
  venue
})
