import React from "react";

import { withRouter } from "react-router";

import CustomLink from "./../custom-link/custom-link.component";

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

const CardItem = ({ imageUrl, grade, description, routeName, match }) => {
  return (
    <CardListItem>
      <ImageContainer>
        <img src={imageUrl} alt={grade} />
      </ImageContainer>

      <Description>{description}</Description>
      <CustomLink to={`${match.url}/${routeName}`}>перейти</CustomLink>
    </CardListItem>
  );
};

export default withRouter(CardItem);
