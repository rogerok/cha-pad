import { userActionsTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isFetchingUserData: false,
  tastedTea: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
