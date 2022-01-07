import React, { FC } from "react";
import { ITeaDataForInterfaces } from "../../ts/types";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import { useAppSelector } from "../../hooks/redux.hooks";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

interface TeaLibraryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaLibrary: FC<TeaLibraryData> = () => {
  const teaCollection = useAppSelector(selectTeaCollection);

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={teaCollection} />
    </WrapperComponent>
  );
};

export default TeaLibrary;
