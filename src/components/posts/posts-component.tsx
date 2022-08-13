import React, { FC } from "react";

//hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import useFetchPosts from "../../hooks/useFetchPosts.hook";
import usePagination from "../../hooks/usePagination.hook";

//types
import { ITea } from "../../ts/types";

//components
import Post from "../post/post.component";
import SpinnerComponent from "../spinner/spinner.component";
import WrapperComponent from "../wrapper/wrapper.component";

const Pagination = React.lazy(
  () => import("../pagination/pagination.component")
);
const Modal = React.lazy(() => import("../modal/modal.component"));

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const teaGrade: string = useLocation().state;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { dispatcher, selectPosts, isLoading, error, fetchData, defaultImage } =
    useFetchPosts();

  const addedPosts = useAppSelector((state) => selectPosts(state, teaGrade));

  const { setCurrentPage, currentPosts, handleClick, pageNumbers } =
    usePagination({
      addedPosts,
      postsPerPage: 5,
    });

  useEffect(() => {
    dispatch(dispatcher(fetchData));
  }, [dispatcher, dispatch]);

  if (error) return <div> {error} </div>;

  return (
    <WrapperComponent>
      {selectedImage && (
        <Modal
          selectedImage={selectedImage!}
          setSelectedImage={setSelectedImage}
        />
      )}
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        currentPosts.map((item: ITea) => (
          <Post
            key={item.id}
            {...item}
            defaultImage={defaultImage}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        ))
      )}
      <Pagination
        pageNumbers={pageNumbers}
        setCurrentPage={setCurrentPage}
        handleClick={handleClick}
      />
    </WrapperComponent>
  );
};

export default Posts;
