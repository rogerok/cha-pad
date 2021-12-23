import React, { FC } from "react";

import CardItem from "../card-item/card-item.component";
import { ITeaDataForInterfaces } from "../../ts/types";

import { CollectionOverviewList } from "./collection-overview.styles";

interface CollectionOverviewProps {
  teaCollection: ITeaDataForInterfaces[];
}

const CollectionOverview: FC<CollectionOverviewProps> = ({ teaCollection }) => {
  return (
    <CollectionOverviewList>
      {teaCollection.map(({ id, ...otherProps }) => (
        <CardItem key={id} {...otherProps} />
      ))}
    </CollectionOverviewList>
  );
};

export default CollectionOverview;
