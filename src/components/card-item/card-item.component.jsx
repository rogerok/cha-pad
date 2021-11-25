import React from "react";
import { Route } from "react-router";

import { withRouter } from "react-router";

import CustomLink from "./../custom-link/custom-link.component";
import TeaArticle from '../tea-article/tea-article.component';

import { CardListItem, ImageContainer, Description } from "./card-item.styles";

const CardItem = ({ imageUrl, grade, description, routeName, match }) => {
  return (
    <CardListItem>
      <ImageContainer>
        <img src={imageUrl} alt={grade} />
      </ImageContainer>

      <Description>{description}</Description>
      {/*       <Route
        exact
        path={`${match.url}/${routeName}`}
        render={() => <CustomLink>перейти</CustomLink>}
      /> */}
      <CustomLink to={`${match.url}/${routeName}`}>перейти</CustomLink>
      {/*       <Route path={`${match.url}/${routeName}` }>
        <TeaArticle />
      </Route> */}
    </CardListItem>
  );
};

export default withRouter(CardItem);
