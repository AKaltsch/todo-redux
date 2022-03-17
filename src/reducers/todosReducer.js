import _ from "lodash";
import { FETCH_TODOS, CREATE_TODO } from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};

export default streamReducer;
