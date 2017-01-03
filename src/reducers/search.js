export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    case 'SET_TARGET':
      return { ...state, target: action.payload }
    case 'FETCH_RESULTS_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_RESULTS_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_RESULTS_FULFILLED':
      console.log(action.payload)
      return {
        ...state,
        fetching: false,
        results: action.payload
      }
    default:
      return state
  }
}
