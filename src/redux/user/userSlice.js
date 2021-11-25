import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
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

export const selectCurrentUser = (state) => state.currentUser;
export const selectUserData = (state) => state.addedTea;

export const { setCurrentUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
