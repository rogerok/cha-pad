import React, { FC } from "react";

import { selectUiData } from "../../redux/tea-library/teaLibrarySlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import { ITeaDataForInterfaces } from "../../ts/types";

import CardCollection from "../../components/card-collection/card-collection.component";
import Title from "../../components/title/title.component";

interface TeaPadData {
  uiData: ITeaDataForInterfaces[];
}

const TeaPad: FC<TeaPadData> = () => {
  const uiData = useAppSelector(selectUiData);

  return (
    <>
      <Title>Мой чайный дневник</Title>
      <CardCollection teaCollection={uiData} />
    </>
  );
};

export default TeaPad;
