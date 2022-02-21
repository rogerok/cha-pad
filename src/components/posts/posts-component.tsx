import React, { FC, ReactChild, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";

import useFetchPosts from "../../hooks/useFetchPosts";
import { ITea } from "../../ts/types";

import WrapperComponent from "../wrapper/wrapper.component";
import SpinnerComponent from "../spinner/spinner.component";

const Posts: FC = () => {
  const dispatch = useAppDispatch();

  const teaGrade: string = useLocation().state;

  const { dispatcher, selectPosts, selectError, selectLoading, fetchData } =
    useFetchPosts();

  const isLoading = useAppSelector(selectLoading as any);
  const isRejected = useAppSelector(selectError as any);
  const addedPosts = useAppSelector((state) => selectPosts(state, teaGrade));

  console.log(`${isLoading} loading`, isRejected, addedPosts);

  useEffect(() => {
    /*     const disp = async () => {
      await dispatch(dispatcher(fetchData));
    };
    disp(); */
    dispatch(dispatcher(fetchData));
  }, []);

  if (isRejected) return <div> {isRejected} </div>;

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
