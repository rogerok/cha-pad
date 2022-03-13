import React from "react";
import { StarEmpty, StarFilled } from "./star-rating.styles";

const Rating = ({ ratingValue }: { ratingValue: number }) => {
  return !ratingValue ? (
    <p>без оценки</p>
  ) : (
    <div className="">
      {[...Array(5)].map((star, id) => {
        const showEmptyicon = ratingValue <= id;

        return showEmptyicon ? (
          <StarEmpty size={50} color={"white"} />
        ) : (
          <StarFilled size={50} color={"black"} />
        );
      })}
    </div>
  );
};

export default Rating;
