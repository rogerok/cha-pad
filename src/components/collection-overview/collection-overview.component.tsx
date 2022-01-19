import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import CardItem from "../card-item/card-item.component";
import { ITeaDataForInterfaces } from "../../ts/types";

/* import { useAppSelector } from "../../hooks/redux.hooks";
import {
  selectTeaCollection,
  selectUiData,
} from "../../redux/tea-library/teaLibrarySlice";
 */
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
/*   const pathname = useLocation().pathname;
  const teaCollection = useAppSelector(
    pathname === "/tea-pad" ? selectUiData : selectTeaCollection
  );
 */
