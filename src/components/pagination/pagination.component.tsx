import React, { FC } from "react";

import CustomButton from "../custom-button/custom-button.component";
import CustomLink from "../custom-link/custom-link.component";

import {
  PaginationWrapper,
  PaginationInner,
  PaginationList,
} from "./pagination.styles";

interface PaginationProps {
  setCurrentPage: (number: number) => void;
  pageNumbers: number[];
  handleClick: (number: number) => void;
}

const Pagination: FC<PaginationProps> = ({ pageNumbers, handleClick }) => {
  return pageNumbers.length > 1 ? (
    <PaginationWrapper>
      <PaginationInner>
        {pageNumbers.map((number) => {
          return (
            <PaginationList key={number}>
              <CustomButton onClick={() => handleClick(number)}>
                {number}
              </CustomButton>
            </PaginationList>
          );
        })}
      </PaginationInner>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
