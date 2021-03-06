export default function venue(state = {}, action) {
  switch (action.type) {
    case 'FETCH_VENUE_PENDING':
      return { ...state, fetching: true  }
    case 'FETCH_VENUE_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_VENUE_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
