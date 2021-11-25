import logger from "redux-logger";

import userReducer from "./user/userSlice";
import teaLibraryReducer from "./tea-library/teaLibrarySlice";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

/* const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
 */
const reducers = combineReducers({
  user: userReducer,
  teaLibrary: teaLibraryReducer,
});
/* const persistedReducers = persistReducer(persistConfig, reducers); */

export const store = configureStore({
  reducer: reducers,
  /*   middlleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger), */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
