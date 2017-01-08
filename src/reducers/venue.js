export default function venue(state = {}, action) {
  switch (action.type) {
    case 'FETCH_VENUE_PENDING':
      return { ...state, fetching: true, results: [] }
    case 'FETCH_VENUE_REJECTED':
      return { ...state, fetching: false, results: [], error: action.payload }
    case 'FETCH_VENUE_FULFILLED':
      return {
        ...state,
        fetching: false,
        result: action.payload.data
      }
    default:
      return state
  }
}
