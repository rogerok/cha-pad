import { Selector } from "@reduxjs/toolkit";
import { RootState } from "./../redux/store";

import { useLocation } from "react-router-dom";

import { selectDefaultImage } from "./../redux/tea-library/teaLibrarySlice";
import {
  fetchAddedPostsByUsers,
  fetchUserPosts,
  selectAddedPostsByUsers,
  selectAddedPostsByUser,
  selectPostsError,
  selectPostsLoading,
} from "../redux/posts/postsSlice";

import { useAppSelector } from "./redux.hooks";

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

  const selectError = selectPostsError;

  const selectLoading = selectPostsLoading;

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
