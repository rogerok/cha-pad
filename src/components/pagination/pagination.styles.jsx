import styled from "styled-components";

export const PaginationWrapper = styled.nav`
  margin: 0 auto;
  max-width: 100%;
`;
export const PaginationInner = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PaginationList = styled.li`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;
