import React, { FC, ReactEventHandler, useState } from "react";
import {
  StarRatingInput,
  StarFilled,
  StarEmpty,
  Star,
} from "./star-rating.styles";

interface StarRatingProps {
  onChange: ReactEventHandler;
  value: number;
  utils: { [key: string]: any };
}

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

const StarRating: FC<StarRatingProps> = ({ utils }) => {
  const {
    starRating,
    setStarRating,
    hover,
    setHover,
    ratingDuplicate,
    setRatingDuplicate,
  } = utils;

  const handleClick = (e: React.ChangeEvent, ratingValue: number) => {
    setStarRating(ratingValue);
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
              value={starRating}
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

export default StarRating;

/*   const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [ratingDuplicate, setRatingDuplicate] = useState<number | null>(null); */
/*   const handleClick = (e: React.ChangeEvent, ratingValue: number) => {
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
  }; */
