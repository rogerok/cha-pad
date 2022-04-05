import React, { FC } from "react";
import { useLocation } from "react-router-dom";

//types
import {
  ITeaDataForInterfaces,
  ITeaPadDataForInterfaces,
} from "../../ts/types";

//components
import CardItem from "../card-item/card-item.component";
import Title from "../../components/title/title.component";
import WrapperComponent from "../wrapper/wrapper.component";

//styles
import { CollectionOverviewList } from "./card-collection.styles";

interface CardCollectionProps {
  teaCollection: ITeaDataForInterfaces[] | ITeaPadDataForInterfaces[];
}

const CardCollection: FC<CardCollectionProps> = ({ teaCollection }) => {
  const path = useLocation().pathname;

  return (
    <>
      {path.includes("would-taste-tea") && (
        <Title>Чай который хочу попробовать</Title>
      )}
      {path.includes("tasted-tea") && <Title>Чай который попробовал</Title>}
      <WrapperComponent>
        <CollectionOverviewList>
          {teaCollection.map(({ id, ...otherProps }) => (
            <CardItem key={id} {...otherProps} />
          ))}
        </CollectionOverviewList>
      </WrapperComponent>
    </>
  );
};

export default CardCollection;
