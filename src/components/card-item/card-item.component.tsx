import React, { FC } from "react";

import { ITeaDataForInterfaces } from "../../ts/types";

import CustomLink from "../custom-link/custom-link.component";

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

interface CardItemProps extends ITeaDataForInterfaces {}

const CardItem: FC<CardItemProps> = ({
  name,
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
      <CustomLink to={routeName} state={name || null}>
        перейти
      </CustomLink>
    </CardListItem>
  );
};

export default CardItem;
