import { selectTeaCollection } from "./../tea-library/teaLibrarySlice";
import { useAppDispatch } from "./../../hooks/redux.hooks";
import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { firestore } from "../../firebase/firebase.utils";

import { IUser, ITea, TeaDataByUsers } from "./../../ts/types";

interface User {
  currentUser: IUser | null;
  loading: Boolean;
  error: any;
  addedTea: Record<string, string[]>;
}
const initialState: User = {
  currentUser: null,
  loading: false,
  error: null,
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

const setError = (state: User, action: PayloadAction<ITea>) => {
  state.loading = false;
  state.error = action.payload;
};
const setLoading = (state: User, action: PayloadAction<ITea>) => {
  state.loading = true;
  state.error = null;
};

export const addTeaDataToUserProfile = createAsyncThunk(
  "user/addTeaDataToUserProfile",
  async (
    { data, userId }: { data: ITea; userId: string },
    { rejectWithValue }
  ) => {
    try {
      const userAddedTeaRef = firestore
        .collection("users")
        .doc(userId)
        .collection("addedTea")
        .doc(data.teaGrade);
      console.log(userId);
      const userResponse = await userAddedTeaRef.set(
        {
          [data.id as keyof ITea]: {
            wouldTaste: data.wouldTaste,
            id: data.id,
          },
        },
        { merge: true }
      );
      console.log(userResponse);
    } catch (error: any) {
      rejectWithValue(error.message);
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
    setUserData: (state, action: PayloadAction<ITea>) => {
      state.addedTea[action.payload.teaGrade as keyof TeaDataByUsers].push(
        action.payload.teaName
      );
    },
  },
  extraReducers: {
    [addTeaDataToUserProfile.pending.type]: setLoading,
    [addTeaDataToUserProfile.rejected.type]: setError,
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser, setUserData } = userSlice.actions;
export default userSlice.reducer;
