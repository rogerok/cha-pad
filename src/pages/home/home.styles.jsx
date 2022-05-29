import styled, { css, keyframes } from "styled-components";
import { BsFillCircleFill } from "react-icons/bs";

const GalleryItemStyles1 = css`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  @media screen and (max-width: 480px) {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 4;
  }
`;
const GalleryItemStyles2 = css`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
  @media screen and (max-width: 480px) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 9;
    grid-row-end: 5;
  }
`;
const GalleryItemStyles3 = css`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
`;
const GalleryItemStyles4 = css`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;

  @media screen and (max-width: 480px) {
    /*     grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 6; */
    display: none;
  }
`;
const GalleryItemStyles5 = css`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
`;

const getGalleryItemStyle = (props) => {
  switch (props.id) {
    case 1:
      return GalleryItemStyles1;
    case 2:
      return GalleryItemStyles2;
    case 3:
      return GalleryItemStyles3;
    case 4:
      return GalleryItemStyles4;
    case 5:
      return GalleryItemStyles5;
    default:
      return "";
  }
};

const loadingAnimation = keyframes`
0% {
   opacity: 0.1;
  }

  100% {
   opacity: 1;
  }
`;

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 5vw);
  grid-gap: 1rem;
  position: relative;
  transition: ${loadingAnimation} 1s ease-in-out;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Overlay = styled(BsFillCircleFill)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  font-size: 25vw;
  text-align: center;
  color: #b70909;
  transition: ${loadingAnimation} 1s ease-in-out;
`;

export const GalleryItem = styled.figure`
  ${getGalleryItemStyle}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
