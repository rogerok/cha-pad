import React from "react";
import { StarEmpty, StarFilled } from "./star-rating.styles";

const Rating = ({ ratingValue }: { ratingValue: number }) => {
  return (
    <>
      {!ratingValue ? (
        <span>без оценки</span>
      ) : (
        <div className="">
          {[...Array(5)].map((_, id) => {
            const showEmptyicon = ratingValue <= id;

            return showEmptyicon ? (
              <StarEmpty key={id} size={50} color={"white"} />
            ) : (
              <StarFilled key={id} size={50} color={"grey"} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Rating;
