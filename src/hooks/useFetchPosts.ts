import { useLocation } from "react-router-dom";
import {
  selectAddedPostsByUsers,
  selectTeatLibraryPostsError,
  selectTeatLibraryPostsLoading,
} from "./../redux/tea-library/teaLibrarySlice";
import {
  selectAddedPostsByUser,
  selectUserPostsError,
  selectUserPostsLoading,
} from "./../redux/user/userSlice";
import { useAppSelector } from "./redux.hooks";
import { useState, useEffect } from "react";
import { fetchAddedPostsByUsers } from "../redux/tea-library/teaLibrarySlice";
import { fetchUserPosts } from "./../redux/user/userSlice";

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
}

const useFetchPosts = (): IUseFetchPosts => {
  // const [fetchData, setFetchData] = useState<IFetchData | null>(null);

  const userId = useAppSelector(
    (state) => state.user.currentUser?.id
  ) as string;
  const path = useLocation().pathname;
  const teaGrade = useLocation().state;

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

  /*   useEffect(() => {
    const setData = () => {
      if (isUserPosts) {
        setFetchData({
          teaGrade,
          wouldTaste: path.includes("would-taste-tea"),
          userId: isUserPosts ? (userId as string) : "",
        });
      }
      if (!isUserPosts) {
        setFetchData({
          teaGrade,
        });
      }
    };
    setData();
  }, []); */

  const fetchData = isUserPosts
    ? {
        teaGrade,
        wouldTaste: path.includes("would-taste-tea"),
        userId: isUserPosts ? (userId as string) : "",
      }
    : { teaGrade };

  console.log(fetchData);
  return { dispatcher, selectPosts, selectError, selectLoading, fetchData };
};

export default useFetchPosts;
