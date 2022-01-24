import React, { FC } from "react";

import { ITeaDataForInterfaces } from "../../ts/types";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import CardCollection from "../../components/card-collection/card-collection.component";

interface TeaLibraryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaLibrary: FC<TeaLibraryData> = () => {
  const teaCollection = useAppSelector(selectTeaCollection);

  return <CardCollection teaCollection={teaCollection} />;
};

export default TeaLibrary;
