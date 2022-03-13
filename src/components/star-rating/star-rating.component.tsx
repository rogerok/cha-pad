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

const StarRating = ({
  onChange,
  value,
}: {
  onChange: ReactEventHandler;
  value: number;
}): JSX.Element => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [ratingDuplicate, setRatingDuplicate] = useState<number | null>(null);

  const handleClick = (e: React.ChangeEvent, ratingValue: number) => {
    onChange(e);
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
          (rating || hover) === null || (rating! || hover!) < ratingValue;

        return (
          <label key={ratingValue}>
            <StarRatingInput
              name="rating"
              type="radio"
              id={`${id}`}
              value={value}
              onChange={(e: React.ChangeEvent) => handleClick(e, ratingValue)}
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
