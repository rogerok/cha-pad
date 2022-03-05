import React, { FC } from "react";
import { ITea } from "../../ts/types";

import {
  PostArticle,
  PostHeader,
  TeaReview,
  ImageWrapper,
  ReviewWrapper,
} from "./post.styles";
interface IPosts extends ITea {
  defaultImage: string;
  showModal: boolean;
  setShowModal: Function;
}

const Post: FC<IPosts> = ({
  teaName,
  teaReview,
  addedBy,
  date,
  teaPhotoUrl,
  defaultImage,
}) => {
  const postedDate = new Date(+date!).toISOString().slice(0, 10);
  return (
    <PostArticle style={{ border: "1px solid white" }}>
      <PostHeader>{teaName}</PostHeader>
      <ReviewWrapper>
        <ImageWrapper>
          <img src={teaPhotoUrl ?? defaultImage} alt="tea posted by user" />
        </ImageWrapper>
        <TeaReview>
          <p>{teaReview}</p>
          <footer>
            <p>Добавил: {addedBy}</p>
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
