export default function band(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BAND_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_BAND_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_BAND_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
