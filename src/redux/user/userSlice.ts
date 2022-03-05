import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { firestore } from "../../firebase/firebase.utils";
import firebase from "firebase/app";
import { IUser, ITea } from "./../../ts/types";

interface User {
  currentUser: IUser | null;
  loading: Boolean;
  error: any;
  addedTea: Record<string, { [key: string]: ITea }[]>;
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

export const fetchUserPosts = createAsyncThunk(
  //if respons with data is empty, error won't be throwhen and error will crush
  "user/fetchUserPosts",
  async (
    {
      userId,
      teaGrade,
      wouldTaste,
    }: { userId: string; teaGrade: string; wouldTaste: boolean },
    { rejectWithValue }
  ) => {
    try {
      const gradeDocRef = firestore
        .collection("teaLibrary")
        .doc("addedTeaByUsers")
        .collection(teaGrade);

      const gradeData = await gradeDocRef.where("userId", "==", userId).get();
      /*       if (gradeData.empty)
        return new Error("Вы еще не добавляли чай этого cорта"); */
      const data = gradeData.docs.map((doc) => doc.data());
      return {
        grade: teaGrade,
        posts: wouldTaste
          ? data.filter((item) => item.wouldTaste === true)
          : data.filter((item) => !item.wouldTaste),
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

    [fetchUserPosts.pending.type]: setLoading,
    [fetchUserPosts.rejected.type]: setError,
    [fetchUserPosts.fulfilled.type]: (
      state: User,
      action: PayloadAction<{ grade: string; posts: [{ [key: string]: ITea }] }>
    ) => {
      state.addedTea[action.payload.grade as keyof User["addedTea"]] =
        action.payload.posts;
      state.loading = false;
      state.error = null;
    },
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
const selectAddedTea = createSelector([selectUser], (user) => user.addedTea);

export const selectUserPostsError = createSelector(
  [selectUser],
  (user) => user.error
);
export const selectUserPostsLoading = createSelector(
  [selectUser],
  (user) => user.loading
);

export const selectAddedPostsByUser = createSelector(
  selectAddedTea,
  (_: any, teaGrade: string) => teaGrade,
  (addedTea, teaGrade) => {
    if (!addedTea[teaGrade].length) return [];
    return addedTea[teaGrade];
  }
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
