import React, { FC } from "react";

//types
import { ITeaDataForInterfaces } from "../../ts/types";
//components
import CustomLink from "../custom-link/custom-link.component";
import LazyImage from "../lazy-image/lazy-image.component";

//styles
import { CardListItem, ImageContainer, Description } from "./card-item.styles";

interface CardItemProps extends Omit<ITeaDataForInterfaces, "name" | "grade"> {
  name?: string;
  grade?: string;
}

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
        <LazyImage src={imageUrl} alt={grade} isCardImage />
      </ImageContainer>
      <Description>{description}</Description>
      <CustomLink to={routeName} state={name || null}>
        перейти
      </CustomLink>
    </CardListItem>
  );
};

export default CardItem;
