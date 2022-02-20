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
      /*       if (!data.length)
        return new Error("Вы еще не добавляли чай этого cорта МАССИВ ПУСТОЙ"); */

      return {
        grade: teaGrade,
        posts: data,
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
      state.addedTea[action.payload.grade as keyof User["addedTea"]].push(
        ...action.payload.posts
      );
    },
  },
});

const selectUser = (state: { user: User }) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
function state(state: any, action: any) {
  throw new Error("Function not implemented.");
}

function action(state: (state: any, action: any) => void, action: any) {
  throw new Error("Function not implemented.");
}
