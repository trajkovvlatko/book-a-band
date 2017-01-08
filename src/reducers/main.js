import { combineReducers } from 'redux'
import search from './search'
import sorting from './sorting'
import locations from './locations'

export default combineReducers({
  search,
  sorting,
  locations
})
