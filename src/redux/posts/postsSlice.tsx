import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import firebase from "firebase";
import { firestore, uploadPhotoToStore } from "../../firebase/firebase.utils";

//types
import { IAddedTea, ITea, TAddedTea } from "../../ts/types";

//utils
import { setError, setLoading, setFullfiled } from "../../utils/utils";

interface IPostsState {
  error: any;
  loading: boolean;
  addedPostsByUsers: IAddedTea;
  addedPostsByUser: IAddedTea;
}

const initialState: IPostsState = {
  error: null,
  loading: false,
  addedPostsByUsers: {
    shengPuerh: {},
    shuPuerh: {},
    whiteTea: {},
    redTea: {},
    lightOolong: {},
    darkOolong: {},
    greenTea: {},
    gabaTea: {},
    withoutGrade: {},
  },

  addedPostsByUser: {
    shengPuerh: {},
    shuPuerh: {},
    whiteTea: {},
    redTea: {},
    lightOolong: {},
    darkOolong: {},
    greenTea: {},
    gabaTea: {},
    withoutGrade: {},
  },
};

export const fetchAddedPostsByUsers = createAsyncThunk(
  "posts/fetchAddedPostsByUsers",
  async ({ teaGrade }: { teaGrade: string }, { rejectWithValue }) => {
    try {
      const response = await firestore
        .collection("teaLibrary")
        .doc("addedTeaByUsers")
        .collection(teaGrade)
        .get();

      if (response.empty)
        throw new Error("Вы еще не добавляли чай этого сорта");

      return response.docs.map((doc) => doc.data());
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (
    { data, teaPhoto }: { data: ITea; teaPhoto: { image: File | null } },
    { rejectWithValue }
  ) => {
    try {
      const docRef = firestore
        .collection(`teaLibrary`)
        .doc(`addedTeaByUsers`)
        .collection(data.teaGrade)
        .doc(data.id);

      //if user uploaded photo then add it to database
      if (teaPhoto.image !== null) {
        await uploadPhotoToStore(teaPhoto, data.teaGrade).then((url) =>
          docRef.set({
            ...data,
            date: Date.now(),
            teaPhotoUrl: url,
          })
        );
      } else {
        // if user didn't add photo then set data without photo url
        docRef.set({
          ...data,
          date: Date.now(),
        });
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTeaDataToUserProfile = createAsyncThunk(
  "posts/addTeaDataToUserProfile",
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
      // if in document collection of tea grade doesn't exist then create it
      const isDocExist = (await userAddedTeaRef.get()).exists;
      if (!isDocExist) {
        await userAddedTeaRef.set({
          wouldTaste: [],
          tasted: [],
        });
      }
      //if user checked would taste option then update would taste field with post id
      if (data.wouldTaste === true) {
        userAddedTeaRef.update({
          wouldTaste: firebase.firestore.FieldValue.arrayUnion(data.id),
        });
      }
      //if user didn't check would taste option then update would taste field with post id

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
  "posts/fetchUserPosts",
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

      if (gradeData.empty)
        throw new Error("Вы еще не добавляли чай этого cорта");

      const data = gradeData.docs.map((doc) => doc.data());

      return wouldTaste
        ? data.filter((item) => item.wouldTaste === true)
        : data.filter((item) => !item.wouldTaste);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAddedPostsByUsers.pending.type]: setLoading,
    [fetchAddedPostsByUsers.rejected.type]: setError,

    [fetchAddedPostsByUsers.fulfilled.type]: (
      state: IPostsState,
      action: PayloadAction<ITea[]>
    ) => {
      action.payload.forEach((item) => {
        state.addedPostsByUsers[item.teaGrade as keyof TAddedTea][item.id] =
          item;
      });

      setFullfiled(state, action);
    },

    [addNewPost.pending.type]: setLoading,
    [addNewPost.rejected.type]: setError,
    [addNewPost.fulfilled.type]: setFullfiled,

    [addTeaDataToUserProfile.pending.type]: setLoading,
    [addTeaDataToUserProfile.rejected.type]: setError,
    [addTeaDataToUserProfile.fulfilled.type]: setFullfiled,

    [fetchUserPosts.pending.type]: setLoading,
    [fetchUserPosts.rejected.type]: setError,
    [fetchUserPosts.fulfilled.type]: (
      state: IPostsState,
      action: PayloadAction<ITea[]>
    ) => {
      action.payload.forEach((item) => {
        state.addedPostsByUser[item.teaGrade as keyof TAddedTea][item.id] =
          item;
      });
      setFullfiled(state, action);
    },
  },
});

const selectPosts = (state: { posts: IPostsState }) => state.posts;

//////////////// selectors of added posts by users
const selectUsersPosts = createSelector(
  [selectPosts],
  (posts) => posts.addedPostsByUsers
);
export const selectPostsError = createSelector(
  [selectPosts],
  (posts) => posts.error
);
export const selectPostsLoading = createSelector(
  [selectPosts],
  (posts) => posts.loading
);

export const selectAddedPostsByUsers = createSelector(
  selectUsersPosts,
  (_: any, teaGrade: string) => teaGrade,
  (addedTea, teaGrade: string) =>
    Object.keys(addedTea[teaGrade as keyof IAddedTea]).map(
      (item) => addedTea[teaGrade as keyof IAddedTea][item]
    )
);

//////////////// selectors of added posts by user

const selectUserPosts = createSelector(
  [selectPosts],
  (posts) => posts.addedPostsByUser
);

export const selectAddedPostsByUser = createSelector(
  selectUserPosts,
  (_: any, teaGrade: string) => teaGrade,
  (addedTea, teaGrade: string) =>
    Object.keys(addedTea[teaGrade as keyof IAddedTea]).map(
      (item) => addedTea[teaGrade as keyof IAddedTea][item]
    )
);

export default postsSlice.reducer;
