import styled from "styled-components";

import { IoMdStarOutline } from "@react-icons/all-files/io/IoMdStarOutline";
import { IoMdStar } from "@react-icons/all-files/io/IoMdStar";

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
  color: black;
  transition: inherit;
`;
export const StarEmpty = styled(IoMdStarOutline)`
  color: white;
  transition: inherit;
`;
export const Star = styled.div`
  display: inline-flex;
  cursor: pointer;
  transition: 0.3s;
`;
