export default function bands(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BANDS_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_BANDS_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_BANDS_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
