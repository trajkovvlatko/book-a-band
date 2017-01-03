import axios from "axios";

export function fetchResults() {
  return function(dispatch) {
    axios.get("/stubs/bands.json")
      .then((response) => {
        dispatch({type: "FETCH_RESULTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_RESULTS_REJECTED", payload: err})
      })
  }
}
