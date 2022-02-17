import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { firestore } from "../../firebase/firebase.utils";
import firebase from "firebase/app";
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

const setError = (state: User, action: any) => {
  state.loading = false;
  state.error = action.payload;
};
const setLoading = (state: User, action: any) => {
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

      const isDocExist = (await userAddedTeaRef.get()).exists;
      if (!isDocExist) {
        await userAddedTeaRef.set({
          wouldTaste: [],
          tasted: [],
        });
      }

      if (data.wouldTaste === true) {
        userAddedTeaRef.update({
          wouldTaste: firebase.firestore.FieldValue.arrayUnion(data.id),
        });
      }

      if (data.wouldTaste === false) {
        userAddedTeaRef.update({
          tasted: firebase.firestore.FieldValue.arrayUnion(data.id),
        });
      }
    } catch (error: any) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchUserPostsId = createAsyncThunk(
  "user/fetchUserPostsId",
  async (
    {
      userId,
      teaGrade,
      wouldTaste,
    }: { userId: string; teaGrade: string; wouldTaste: boolean },
    { rejectWithValue }
  ) => {
    try {
      const docRef = firestore
        .collection("users")
        .doc(userId)
        .collection("addedTea")
        .doc(teaGrade);
      const isDocExist = (await docRef.get()).exists;

      const data = (await docRef.get()).data();

      return {
        grade: teaGrade,
        idList: wouldTaste ? data!.wouldTaste : data!.tasted,
      };
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
  },
  extraReducers: {
    [addTeaDataToUserProfile.pending.type]: setLoading,
    [addTeaDataToUserProfile.rejected.type]: setError,

    [fetchUserPostsId.pending.type]: setLoading,
    [fetchUserPostsId.rejected.type]: setError,
    [fetchUserPostsId.fulfilled.type]: (
      state: User,
      action: PayloadAction<{ grade: string; idList: string[] }>
    ) => {
      /*       state.addedTea[action.payload.grade as keyof User["addedTea"]].push(
        ...action.payload.idList
      ); */
    },
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser /* setUserData */ } = userSlice.actions;
export default userSlice.reducer;
