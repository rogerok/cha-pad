import styled from "styled-components";

export const PostArticle = styled.article`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;

export const PostHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ImageWrapper = styled.div`
  width: 25%;
  height: 300px;
  align-self: flex-start;
  img {
    max-width: 100%;
    max-height: auto;
  }
`;

export const TeaReview = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReviewFooter = styled.footer`
  align-self: flex-end;
`;
