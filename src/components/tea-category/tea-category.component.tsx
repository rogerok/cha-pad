import React, { FC } from "react";

import { useAppSelector } from "../../hooks/redux.hooks";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import { ITeaDataForInterfaces } from "../../ts/types";

import CardCollection from "../card-collection/card-collection.component";

interface TeaCategoryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaCategory: FC<TeaCategoryData> = () => {
  const teaCollection = useAppSelector(selectTeaCollection);

  return <CardCollection teaCollection={teaCollection} />;
};

export default TeaCategory;
