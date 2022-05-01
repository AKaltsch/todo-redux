import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./todosReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  todos: streamReducer,
});
