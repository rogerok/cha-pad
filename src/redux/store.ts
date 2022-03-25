import { logger } from "redux-logger";

import userReducer from "./user/userSlice";
import teaLibraryReducer from "./tea-library/teaLibrarySlice";
import postsReducer from "./posts/postsSlice";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user: userReducer,
  teaLibrary: teaLibraryReducer,
  posts: postsReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
