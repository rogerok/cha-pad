import styled from "styled-components";

import { IoMdStar, IoMdStarOutline } from "react-icons/io";

export const StarRatingWrapper = styled.div``;

export const StarRatingInput = styled.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StarFilled = styled(IoMdStar)`
  /*   cursor: pointer; */
  /*   transition: color cubic-bezier(0.075, 0.82, 0.165, 1); */
  color: black;
  transition: inherit;
`;
export const StarEmpty = styled(IoMdStarOutline)`
  /*   cursor: pointer;
  transition: color cubic-bezier(0.19, 1, 0.22, 1); */
  color: white;
  transition: inherit;
`;
export const Star = styled.div`
  display: inline-flex;
  cursor: pointer;
  transition: 0.3s;
`;