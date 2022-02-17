import React, { FC } from "react";

import {
  ITeaDataForInterfaces,
  ITeaPadDataForInterfaces,
} from "../../ts/types";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import CardCollection from "../card-collection/card-collection.component";

interface TeaCategoryData {
  teaCollection: ITeaDataForInterfaces[] /* | ITeaPadDataForInterfaces[] */;
}

const TeaCategory: FC<TeaCategoryData> = () => {
  const teaCollection = useAppSelector(selectTeaCollection);

  return <CardCollection teaCollection={teaCollection} />;
};

export default TeaCategory;
