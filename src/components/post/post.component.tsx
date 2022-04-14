import React, { FC } from "react";

import { ITea } from "../../ts/types";

import Rating from "../star-rating/rating.component";
import LazyImage from "../lazy-image/lazy-image.component";

//styles
import {
  PostArticle,
  PostHeader,
  TeaReview,
  ImageWrapper,
  ReviewWrapper,
  AddedBy,
} from "./post.styles";

export interface IPosts extends ITea {
  defaultImage: string;
  selectedImage: string | null;
  setSelectedImage: Function;
}

const Post: FC<IPosts> = ({
  teaName,
  teaReview,
  addedBy,
  date,
  teaPhotoUrl,
  defaultImage,
  setSelectedImage,
  rating,
}) => {
  const postedDate = new Date(+date!).toISOString().slice(0, 10);
  const photoUrl = teaPhotoUrl ? teaPhotoUrl : defaultImage;

  const handleSelectedImage = () => {
    if (teaPhotoUrl) setSelectedImage(photoUrl);
  };

  return (
    <PostArticle style={{ border: "1px solid white" }}>
      <PostHeader>{teaName}</PostHeader>
      <ReviewWrapper>
        <ImageWrapper onClick={() => handleSelectedImage()}>
          <LazyImage src={photoUrl!} placeholder={defaultImage} alt={teaName} />
        </ImageWrapper>
        <TeaReview>
          <p style={{ marginBottom: "auto" }}>{teaReview}</p>
          <p style={{ margin: "2rem 0" }}>
            {rating ? <Rating ratingValue={rating!} /> : "без оценки"}
          </p>
          <footer>
            <AddedBy>Добавил: {addedBy}</AddedBy>
            <p>
              <time>{postedDate}</time>
            </p>
          </footer>
        </TeaReview>
      </ReviewWrapper>
    </PostArticle>
  );
};

export default Post;
