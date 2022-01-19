import React, { FC } from "react";
import {
  useParams,
  useLocation,
  matchRoutes,
  useMatch,
} from "react-router-dom";
import { ITeaDataForInterfaces } from "../../ts/types";

import CustomLink from "../custom-link/custom-link.component";

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

type CardItemProps = ITeaDataForInterfaces;

const CardItem: FC<CardItemProps> = ({
  imageUrl,
  grade,
  description,
  routeName,
}) => {
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
