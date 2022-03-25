import React, { FC } from "react";

import { ITea } from "../../ts/types";

import Rating from "../star-rating/rating.component";

//styles
import {
  PostArticle,
  PostHeader,
  TeaReview,
  ImageWrapper,
  ReviewWrapper,
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
  //const postedDate = new Date(+date!).toISOString().slice(0, 10);
  const photoUrl = teaPhotoUrl ? teaPhotoUrl : defaultImage;

  return (
    <PostArticle style={{ border: "1px solid white" }}>
      <PostHeader>{teaName}</PostHeader>
      <ReviewWrapper>
        <ImageWrapper onClick={() => setSelectedImage(photoUrl)}>
          <img src={photoUrl} alt="tea posted by user" />
        </ImageWrapper>
        <TeaReview>
          <p>{teaReview}</p>
          <Rating ratingValue={rating!} />
          <footer>
            <p style={{ marginBottom: "2rem" }}>Добавил: {addedBy}</p>
            <p>{/* <time>{postedDate}</time> */}</p>
          </footer>
        </TeaReview>
      </ReviewWrapper>
    </PostArticle>
  );
};

export default Post;
