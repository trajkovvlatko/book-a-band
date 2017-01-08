export default function band(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BAND_PENDING':
      return { ...state, fetching: true, results: [] }
    case 'FETCH_BAND_REJECTED':
      return { ...state, fetching: false, results: [], error: action.payload }
    case 'FETCH_BAND_FULFILLED':
      return {
        ...state,
        fetching: false,
        result: action.payload.data
      }
    default:
      return state
  }
}
