export default function locations(state = {}, action) {
  switch (action.type) {
    case 'FETCH_LOCATIONS_PENDING':
      return { ...state, fetching: true, results: [] }
    case 'FETCH_LOCATIONS_REJECTED':
      return { ...state, fetching: false, results: [], error: action.payload }
    case 'FETCH_LOCATIONS_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
