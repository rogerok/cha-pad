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
  fetchData?: IFetchData | null;
  defaultImage: string;
  error: any;
  isLoading: boolean;
}

const useFetchPosts = (): IUseFetchPosts => {
  const path = useLocation().pathname;
  const teaGrade = useLocation().state;

  const defaultImage =
    useAppSelector((state) => selectDefaultImage(state, teaGrade)) ?? "";
  const userId = useAppSelector((state) => state.user.currentUser?.id) ?? "";
  const error = useAppSelector(selectPostsError);
  const isLoading = useAppSelector(selectPostsLoading);

  //if path doesn't include 'tea-library' then isUserPost'll come true
  const isUserPosts = !path.includes("tea-library");

  const dispatcher = isUserPosts ? fetchUserPosts : fetchAddedPostsByUsers;

  //if user came from tea-pad, then we'll select added posts by user, otherwise  - added posts by users
  const selectPosts = isUserPosts
    ? selectAddedPostsByUser
    : selectAddedPostsByUsers;

  //data for dispatcher in posts component
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
    error,
    isLoading,
    fetchData,
    defaultImage,
  };
};

export default useFetchPosts;
