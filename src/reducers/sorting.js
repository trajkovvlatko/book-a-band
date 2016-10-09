export default function sorting(state = {}, action) {
  switch (action.type) {
    case "SET_SORTING":
      return { ...state, sorting: action.payload }
    default:
      return state
  }
}
