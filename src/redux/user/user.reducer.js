import { userActionsTypes } from "./user.types";

const INITIAL_STATE = {
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
};

export default userReducer;
