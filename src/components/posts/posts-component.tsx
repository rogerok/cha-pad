import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectAddedPostsByUsers } from "../../redux/tea-library/teaLibrarySlice";

import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { fetchAddedPostsByUsers } from "../../redux/tea-library/teaLibrarySlice";
import useGetReducerAndSelector from "../../hooks/useFetchPosts";
import { ITea } from "../../ts/types";

import WrapperComponent from "../wrapper/wrapper.component";
import SpinnerComponent from "../spinner/spinner.component";
import { fetchUserPosts } from "../../redux/user/userSlice";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const teaGrade: string = useLocation().state;
  const path = useLocation().pathname;
  console.log(teaGrade);
  const userId = useAppSelector((state) => state.user.currentUser?.id) ?? "";
  const addedPosts = useAppSelector((state) =>
    selectAddedPostsByUsers(state, teaGrade)
  );

  useGetReducerAndSelector(teaGrade, path);

  useEffect(() => {
    const disp = async () => {
      await dispatch(fetchAddedPostsByUsers(teaGrade));
      await dispatch(fetchUserPosts({ teaGrade, userId, wouldTaste: true }));
    };
    disp();
  }, []);

  const isLoading = useAppSelector((state) => state.teaLibrary.loading);
  const isRejected = useAppSelector((state) => state.teaLibrary.error);
  const userRejected = useAppSelector((state) => state.user.error);
  const userLoading = useAppSelector((state) => state.user.loading);

  if (isRejected || userRejected) return <div>{isRejected}</div>;
  if (userRejected) return <div>{userRejected}</div>;

  return (
    <React.Fragment>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        addedPosts.map((item: ITea) => (
          <WrapperComponent key={item.id}>
            <article>
              <h2>{item.teaName}</h2>
              <section style={{ border: "1px solid white" }}>
                <p>{item.teaReview}</p>
                <footer>
                  <p>
                    <time>time</time>
                    posted by: {item.addedBy}
                  </p>
                </footer>
              </section>
            </article>
          </WrapperComponent>
        ))
      )}
    </React.Fragment>
  );
};

export default Posts;
