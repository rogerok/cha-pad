import React, { FC } from "react";

import CustomButton from "../custom-button/custom-button.component";

import { PaginationWrapper, PaginationInner } from "./pagination.styles";

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
            <li key={number}>
              <CustomButton
                isPaginationButton
                onClick={() => handleClick(number)}
              >
                {number}
              </CustomButton>
            </li>
          );
        })}
      </PaginationInner>
    </PaginationWrapper>
  ) : null;
};

export default Pagination;
