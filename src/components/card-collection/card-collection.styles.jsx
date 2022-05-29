import styled from "styled-components";

export const CollectionOverviewList = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-between;
  list-style-type: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;
