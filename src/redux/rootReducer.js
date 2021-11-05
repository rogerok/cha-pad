import { combineReducers } from "redux";
import teaLibraryReducer from "./tea-library/tea-library.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  teaLibrary: teaLibraryReducer,
});

export default rootReducer;
