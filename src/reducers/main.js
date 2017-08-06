import { combineReducers } from 'redux'
import search from './search'
import sorting from './sorting'
import locations from './locations'
import band from './band'
import venue from './venue'
import genre from './genre'
import bands from './bands'
import property from './property'
import venues from './venues'

export default combineReducers({
  search,
  sorting,
  locations,
  band,
  venue,
  genre,
  bands,
  property,
  venues,
})
