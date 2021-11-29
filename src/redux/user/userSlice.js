import { createSlice, createSelector } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: false,
    isFetchingUserData: false,
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
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserData: (state, action) =>
      (state.addedTea[action.payload.teaGrade] = action.payload.teaGrade),
  },
});

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
