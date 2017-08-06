export default function venues(state = {}, action) {
  switch (action.type) {
    case 'FETCH_VENUES_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_VENUES_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_VENUES_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
