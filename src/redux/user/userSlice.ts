import { createSlice, createSelector } from "@reduxjs/toolkit";

import { IUser, ICurrentUserAddedTea } from "./../../ts/types";

interface User {
  currentUser: null | IUser;
  isFetching: Boolean;
  addedTea: ICurrentUserAddedTea;
}

const initialState: User = {
  currentUser: null /* set to null, when development will end */,
  isFetching: false,
  addedTea: {
    darkOolong: [],
    greenTea: [],
    gabaTea: [],
    lightOolong: [],
    redTea: [],
    shengPuerh: [],
    shuPuerh: [],
    whiteTea: [],
    withoutGrade: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    /*     setUserData: (state: User, action: UserAction) =>
      state.addedTea[action.payload.teaGrade].push(action.payload.teaName), */
  },
});

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser /* setUserData */ } = userSlice.actions;
export default userSlice.reducer;
