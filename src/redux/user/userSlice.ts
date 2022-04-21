import { setError, setFullfiled, setLoading } from "./../../utils/utils";
import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { IUser, IValidateUserData } from "./../../ts/types";

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

export const signUpWithEmailAndPassword = createAsyncThunk(
  "user/signUpWithEmailAndPassword",
  async (userData: IValidateUserData, { rejectWithValue }) => {
    const { displayName, email, password } = userData;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //@ts-ignore
      await createUserProfileDocument({
        ...user,
        displayName,
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInWithEmailAndPassword = createAsyncThunk(
  "user/signInWithEmailAndPassword",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [signUpWithEmailAndPassword.pending.type]: setLoading,
    [signUpWithEmailAndPassword.rejected.type]: setError,
    [signUpWithEmailAndPassword.fulfilled.type]: setFullfiled,

    [signInWithEmailAndPassword.pending.type]: setLoading,
    [signInWithEmailAndPassword.rejected.type]: setError,
    [signInWithEmailAndPassword.fulfilled.type]: setFullfiled,
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserLoading = createSelector(
  [selectUser],
  (user) => user.loading
);
export const selectUserError = createSelector(
  [selectUser],
  (user) => user.error
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
