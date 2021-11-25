/* /* import { userActionsTypes } from "./user.types";

import { createSlice } from "@reduxjs/toolkit";
/* import { setCurrentUser } from "./user.actions"; */

/* const userSlice = createSlice({
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
    setCurrentUser: (state, action) => (state.currentUser = action.payload),
    getUserData: (state, action) =>
      (state.addedTea[action.payload.teaGrade] = action.payload.teaGrade),
  },
}); */

/* const INITIAL_STATE = {
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
};


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionsTypes.FETCH_USER_DATA:
      console.log(state.addedTea[action.payload.teaGrade]);
      return {
        ...state,
        addedTea: {
          ...state.addedTea,
          [action.payload.teaGrade]: [
            ...state.addedTea[action.payload.teaGrade],
            action.payload,
          ],
        },
      };
    default:
      return state;
  }
}; */

/* export const { setCurrentUser, getUserData } = userSlice.actions;
export default userSlice.reducer;
 */
