import { userActionsTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionsTypes.SET_CURRENT_USER,
  payload: user,
});

export const fetchUserData = (data) => ({
  type: userActionsTypes.FETCH_USER_DATA,
  payload: data,
});
