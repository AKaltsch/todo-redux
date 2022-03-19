import todos from "../apis/todos";
import history from "../history";

import { SIGN_IN, SIGN_OUT, FETCH_TODOS, CREATE_TODO } from "./types";

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

export const createTodo = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await todos.post("/todos", { ...formValues, userId }); // add userId here

  dispatch({ type: CREATE_TODO, payload: response.data });
  //programmatic navigation to take user back to the todoList from the custom history.js file
  history.push("/");
};
