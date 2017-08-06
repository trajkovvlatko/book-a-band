export default function property(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PROPERTY_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_PROPERTY_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_PROPERTY_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
