import React, { FC, ReactEventHandler } from "react";

import useStarRating from "../../hooks/useStarRating";

import {
  StarRatingInput,
  StarFilled,
  StarEmpty,
  Star,
} from "./star-rating.styles";

interface StarRatingProps {
  value: number;
  handleRatingChange: (starRating: number | null) => void;
}

interface StarIconProps {
  showEmptyIcon: boolean;
  color: string;
  size: number;
  onMouseEnter: ReactEventHandler<MouseEvent>;
  onMouseLeave: ReactEventHandler<MouseEvent>;
}

const StarIcon: FC<StarIconProps> = ({ showEmptyIcon, ...props }) => {
  return (
    <Star>
      {showEmptyIcon ? <StarEmpty {...props} /> : <StarFilled {...props} />}
    </Star>
  );
};

const StarRating: FC<StarRatingProps> = ({ handleRatingChange }) => {
  const {
    starRating,
    setStarRating,
    hover,
    setHover,
    ratingDuplicate,
    setRatingDuplicate,
  } = useStarRating();

  const handleClick = (e: React.ChangeEvent, ratingValue: number) => {
    setStarRating(ratingValue);
    handleRatingChange(ratingValue);
    setRatingDuplicate(ratingValue);
  };

  const handleMouseEnter = (ratingValue: number) => {
    setStarRating(null);
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(null);
    setStarRating(ratingDuplicate);
  };

  return (
    <div>
      <p
        style={{
          marginBottom: "1rem",
        }}
      >
        Оцените чай
      </p>
      {[...Array(5)].map((_, id) => {
        const ratingValue = id + 1;
        const showEmptyIcon =
          (starRating || hover) === null ||
          (starRating! || hover!) < ratingValue;

        return (
          <label key={ratingValue}>
            <StarRatingInput
              name="rating"
              type="radio"
              id={`${id}`}
              value={ratingValue}
              onChange={(e: React.ChangeEvent) => handleClick(e, ratingValue)}
            />
            <StarIcon
              showEmptyIcon={showEmptyIcon}
              size={50}
              color={ratingValue <= (starRating! || hover!) ? "black" : "white"}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </label>
        );
      })}
    </div>
  );
};

export default React.memo(StarRating);
