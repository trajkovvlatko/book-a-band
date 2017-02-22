export default function genre(state = {}, action) {
  switch (action.type) {
    case 'FETCH_GENRE_PENDING':
      return { ...state, fetching: true }
    case 'FETCH_GENRE_REJECTED':
      return { ...state, fetching: false, error: action.payload }
    case 'FETCH_GENRE_FULFILLED':
      return {
        ...state,
        fetching: false,
        results: action.payload.data
      }
    default:
      return state
  }
}
