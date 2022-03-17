import _ from "lodash";
import { FETCH_TODOS } from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};

export default streamReducer;
