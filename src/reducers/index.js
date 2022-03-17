import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./todosReducer";

export default combineReducers({
  auth: authReducer,
  todos: streamReducer,
});
