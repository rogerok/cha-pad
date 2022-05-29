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
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    border: none;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
