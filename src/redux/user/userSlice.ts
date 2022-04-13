import { createSlice, createSelector } from "@reduxjs/toolkit";

import { IUser } from "./../../ts/types";

interface User {
  currentUser: IUser | null;
  loading: boolean;
  error: any;
}
const initialState: User = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
