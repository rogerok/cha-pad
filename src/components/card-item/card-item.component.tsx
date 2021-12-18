import React, {FC} from "react";

import CustomLink from "../custom-link/custom-link.component";

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

interface CardItemProps {
  imageUrl: string;
  grade: string;
  description: string;
  routeName: string;
}

const CardItem: FC<CardItemProps> = ({ imageUrl, grade, description, routeName }) => {

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
