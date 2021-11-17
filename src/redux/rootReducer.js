import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import teaLibraryReducer from "./tea-library/tea-library.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  teaLibrary: teaLibraryReducer,
});

export default persistReducer(persistConfig, rootReducer);
