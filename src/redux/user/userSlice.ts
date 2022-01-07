import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { IUser, ICurrentUserAddedTea, ITea } from "./../../ts/types";

interface User {
  currentUser: null | IUser;
  isFetching: Boolean;
  addedTea: ICurrentUserAddedTea;
}

interface UserAction {
  type: string;
  payload?: any;
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
    setUserData: (state, action: PayloadAction<ITea>) => {
      state.addedTea[
        action.payload.teaGrade as keyof ICurrentUserAddedTea
      ].push(action.payload.teaName);
    },
  },
});

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
