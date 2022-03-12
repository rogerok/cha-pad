import React, { FC, ReactEventHandler, useState } from "react";
import {
  StarRatingInput,
  StarFilled,
  StarEmpty,
  Star,
} from "./star-rating.styles";

const StarIcon = ({
  showEmptyIcon,
  ...props
}: {
  showEmptyIcon: boolean;
  color: string;
  size: number;
  onMouseEnter: ReactEventHandler<MouseEvent>;
  onMouseLeave: ReactEventHandler<MouseEvent>;
}) => {
  return (
    <Star>
      {showEmptyIcon ? <StarEmpty {...props} /> : <StarFilled {...props} />}
    </Star>
  );
};

const StarRating: FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [ratingDuplicate, setRatingDuplicate] = useState<number | null>(null);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    setRatingDuplicate(ratingValue);
  };

  const handleMouseEnter = (ratingValue: number) => {
    setRating(null);
    setHover(ratingValue);
  };
  const handleMouseLeave = () => {
    setHover(null);
    setRating(ratingDuplicate);
  };

  return (
    <div>
      {[...Array(5)].map((_, id) => {
        const ratingValue = id + 1;
        const showEmptyIcon =
          (rating || hover) === null || (rating! || hover!) < ratingValue;

        return (
          <label key={ratingValue}>
            <StarRatingInput
              name="rating"
              type="radio"
              id={`${id}`}
              value={ratingValue}
              onClick={(e: React.ChangeEvent) => handleClick(ratingValue)}
            />
            <StarIcon
              showEmptyIcon={showEmptyIcon}
              size={50}
              color={ratingValue <= (rating! || hover!) ? "black" : "white"}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={() => handleMouseLeave()}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
