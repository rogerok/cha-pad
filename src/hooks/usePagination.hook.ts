import { useState } from "react";
import { ITea } from "../ts/types";

interface UsePaginationProps {
  addedPosts: ITea[];
  postsPerPage: number;
}

interface IUsePagination {
  setCurrentPage: (number: number) => void;
  currentPosts: ITea[];
  pageNumbers: number[];
  handleClick: (number: number) => void;
}

const usePagination = ({
  addedPosts,
  postsPerPage,
}: UsePaginationProps): IUsePagination => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = addedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleClick = (number: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(number);
  };

  const pageNumbers = Array.from(
    Array(Math.ceil(addedPosts.length / postsPerPage))
  ).map((_, i) => i + 1);

  return { setCurrentPage, currentPosts, handleClick, pageNumbers };
};

export default usePagination;
