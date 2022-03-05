import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";

import useFetchPosts from "../../hooks/useFetchPosts.hook";
import { ITea } from "../../ts/types";

import WrapperComponent from "../wrapper/wrapper.component";
import SpinnerComponent from "../spinner/spinner.component";
import Post from "../post/post.component";

const Posts: FC = () => {
  const dispatch = useAppDispatch();

  const teaGrade: string = useLocation().state;

  const {
    dispatcher,
    selectPosts,
    selectError,
    selectLoading,
    fetchData,
    defaultImage,
  } = useFetchPosts();

  const isLoading = useAppSelector(selectLoading as any);
  const isRejected = useAppSelector(selectError as any);
  const addedPosts: ITea[] = useAppSelector((state) =>
    selectPosts(state, teaGrade)
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(dispatcher(fetchData));
  }, []);

  if (isRejected) return <div> {isRejected} </div>;
  console.log(addedPosts);

  return (
    <WrapperComponent>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        addedPosts.map((item) => (
          <Post
            key={item.id}
            {...item}
            defaultImage={defaultImage}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ))
      )}
    </WrapperComponent>
  );
};

export default Posts;
