import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer);

export default store;
