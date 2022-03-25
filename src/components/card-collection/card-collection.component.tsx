import React, { FC } from "react";

//types
import {
  ITeaDataForInterfaces,
  ITeaPadDataForInterfaces,
} from "../../ts/types";

//components
import CardItem from "../card-item/card-item.component";
import WrapperComponent from "../wrapper/wrapper.component";

//styles
import { CollectionOverviewList } from "./card-collection.styles";

interface CardCollectionProps {
  teaCollection: ITeaDataForInterfaces[] | ITeaPadDataForInterfaces[];
}

const CardCollection: FC<CardCollectionProps> = ({ teaCollection }) => {
  return (
    <WrapperComponent>
      <CollectionOverviewList>
        {teaCollection.map(({ id, ...otherProps }) => (
          <CardItem key={id} {...otherProps} />
        ))}
      </CollectionOverviewList>
    </WrapperComponent>
  );
};

export default CardCollection;
