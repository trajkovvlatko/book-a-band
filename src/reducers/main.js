import { combineReducers } from 'redux'
import search from './search'
import sorting from './sorting'

export default combineReducers({
  search,
  sorting,
})
