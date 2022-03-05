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
import { useAppSelector } from "./redux.hooks";

import { fetchAddedPostsByUsers } from "../redux/tea-library/teaLibrarySlice";
import { fetchUserPosts } from "../redux/user/userSlice";

interface IFetchData {
  wouldTaste?: Boolean;
  teaGrade?: string;
  userId?: string;
}

interface IUseFetchPosts {
  dispatcher: Function;
  selectPosts: Function;
  selectError: Function;
  selectLoading: Function;
  fetchData?: IFetchData | null;
  defaultImage: string;
}

const useFetchPosts = (): IUseFetchPosts => {
  const userId = useAppSelector(
    (state) => state.user.currentUser?.id
  ) as string;
  const path = useLocation().pathname;
  const teaGrade = useLocation().state;
  const defaultImage = useAppSelector((state) =>
    selectDefaultImage(state, teaGrade)
  );

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

  const fetchData = isUserPosts
    ? {
        teaGrade,
        wouldTaste: path.includes("would-taste-tea"),
        userId: isUserPosts ? (userId as string) : "",
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
