import { useState } from "react";

const useStarRating = () => {
  const [starRating, setStarRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [ratingDuplicate, setRatingDuplicate] = useState<number | null>(null);

  return {
    starRating,
    setStarRating,
    hover,
    setHover,
    ratingDuplicate,
    setRatingDuplicate,
  };
};

export default useStarRating;
