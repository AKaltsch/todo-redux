import todos from "../apis/todos";
import history from "../history";

import { SIGN_IN, SIGN_OUT, FETCH_TODOS } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: response.data });
};
