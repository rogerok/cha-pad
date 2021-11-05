import React from "react";

import CardItem from "../card-item/card-item.component";

import { CollectionOverviewList } from "./collection-overview.styles";

const CollectionOverview = ({ teaCollection }) => {
  return (
    <CollectionOverviewList>
      {teaCollection.map(({ id, ...otherProps }) => (
        <CardItem key={id} {...otherProps} />
      ))}
    </CollectionOverviewList>
  );
};

export default CollectionOverview;
