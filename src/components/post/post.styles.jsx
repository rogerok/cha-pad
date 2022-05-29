import styled from "styled-components";

export const PostArticle = styled.article`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px grey;
`;

export const PostHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: flex-start;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
export const ImageWrapper = styled.div`
  width: 30%;
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: brightness(0.7);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const TeaReview = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  border: 1px solid lightgrey;
  font-size: 1.5rem;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ReviewFooter = styled.footer`
  align-self: flex-end;
`;

export const AddedBy = styled.p`
  margin-bottom: 2rem;
`;
