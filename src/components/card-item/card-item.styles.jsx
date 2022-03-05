import styled from "styled-components";

export const CardListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 30px;
  margin-right: 30px;
  width: 30%;
  border: 1px solid white;
  margin-bottom: 30px;
  :nth-child(3n + 3) {
    margin-right: auto;
  }
  :last-child {
    margin-right: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;

  img {
    display: block;
    margin: 30px auto;
    max-width: 90%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
