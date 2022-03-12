import {
  Action,
  AsyncThunkAction,
  OutputSelector,
  Selector,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./../redux/store";
import { selectDefaultImage } from "./../redux/tea-library/teaLibrarySlice";
import { useLocation } from "react-router-dom";
import {
  selectAddedPostsByUsers,
  selectTeatLibraryPostsError,
  selectTeatLibraryPostsLoading,
} from "../redux/tea-library/teaLibrarySlice";
import {
  selectAddedPostsByUser,
  selectUserPostsError,
  selectUserPostsLoading,
} from "../redux/user/userSlice";
import { AppThunk, useAppSelector } from "./redux.hooks";

import { fetchAddedPostsByUsers } from "../redux/tea-library/teaLibrarySlice";
import { fetchUserPosts } from "../redux/user/userSlice";
import { ITea } from "../ts/types";
import { Dispatch } from "react";

interface IFetchData {
  wouldTaste?: boolean;
  teaGrade?: string;
  userId?: string;
}

interface IUseFetchPosts {
  //have to fix any
  dispatcher: any;
  //have to fix any
  selectPosts: (state: RootState, teaGrade: string) => any;
  selectError: Selector<RootState, boolean>;
  selectLoading: Selector<RootState, boolean>;
  fetchData?: IFetchData | null;
  defaultImage: string;
}

const useFetchPosts = (): IUseFetchPosts => {
  const userId = useAppSelector((state) => state.user.currentUser?.id) ?? "";
  const path = useLocation().pathname;
  const teaGrade = useLocation().state;
  const defaultImage =
    useAppSelector((state) => selectDefaultImage(state, teaGrade)) ?? "";

  const isUserPosts = !path.includes("tea-library");

  const dispatcher = isUserPosts ? fetchUserPosts : fetchAddedPostsByUsers;

  const selectPosts = isUserPosts
    ? selectAddedPostsByUser
    : selectAddedPostsByUsers;

  const selectError = isUserPosts
    ? selectUserPostsError
    : selectTeatLibraryPostsError;
  const selectLoading = isUserPosts
    ? selectUserPostsLoading
    : selectTeatLibraryPostsLoading;

  const fetchData: IFetchData = isUserPosts
    ? {
        teaGrade,
        wouldTaste: path.includes("would-taste-tea"),
        userId: isUserPosts ? userId : "",
      }
    : { teaGrade };

  return {
    dispatcher,
    selectPosts,
    selectError,
    selectLoading,
    fetchData,
    defaultImage,
  };
};

export default useFetchPosts;
