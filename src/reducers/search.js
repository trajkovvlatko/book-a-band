export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    case 'SET_TARGET':
      return { ...state, target: action.payload }
    case 'CLEAR_RESULTS':
      return { ...state, results: [] }
    case 'SET_LOCATION_IDS':
      return { ...state, location_ids: action.payload }
    case 'FETCH_RESULTS_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_RESULTS_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_RESULTS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        results: action.payload.data
      }
    default:
      return state
  }
}
