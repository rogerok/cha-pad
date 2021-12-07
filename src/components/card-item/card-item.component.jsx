import React from "react";

import { Routes, useLocation } from "react-router";

import CustomLink from "./../custom-link/custom-link.component";
import TeaArticle from "../tea-article/tea-article.component";

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

const CardItem = ({ imageUrl, grade, description, routeName }) => {
  const location = useLocation();

  return (
    <CardListItem>
      <ImageContainer>
        <img src={imageUrl} alt={grade} />
      </ImageContainer>

      <Description>{description}</Description>

      <CustomLink to={`${routeName}`}>перейти</CustomLink>
    </CardListItem>
  );
};

export default CardItem;
