import logger from "redux-logger";

import userReducer from "./user/userSlice";
import teaLibraryReducer from "./tea-library/teaLibrarySlice";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: userReducer,
  teaLibrary: teaLibraryReducer,
});
/* 
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const perstistedReducer = persistReducer(persistConfig, reducers); */

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export const persistor = persistStore(store);
