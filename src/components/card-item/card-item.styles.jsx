import styled from "styled-components";

export const CardListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 30px;
  margin-right: 30px;
  max-width: 300px;
  border: 1px solid white;
  margin-bottom: 30px;

  /*   :last-child {
    margin-right: auto;
    margin-left: 30px;
  } */
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  border: 1px solid black;

  img {
    display: block;
    margin: 30px auto;
    max-width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
