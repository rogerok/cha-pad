import React, { FC } from "react";
import { ITea } from "../../ts/types";

import {
  PostArticle,
  PostHeader,
  TeaReview,
  ImageWrapper,
  ReviewWrapper,
} from "./post.styles";

const Post: FC<ITea> = ({ teaName, teaReview, addedBy, date }) => {
  const postedDate = new Date(+date!).toISOString().slice(0, 10);
  return (
    <PostArticle style={{ border: "1px solid white" }}>
      <PostHeader>{teaName}</PostHeader>
      <ReviewWrapper>
        <ImageWrapper>
          <img
            src="https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/2048x2048/products/1155/1274/LightOolong__33181.1590092556.jpg?c=1"
            alt="tea posted by user"
          />
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
