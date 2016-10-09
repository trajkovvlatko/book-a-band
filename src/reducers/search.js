export default function search(state = {}, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    case 'SET_TARGET':
      return { ...state, target: action.payload }
    default:
      return state
  }
}
