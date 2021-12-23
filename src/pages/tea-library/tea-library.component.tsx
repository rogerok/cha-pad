import React, { FC } from "react";
import { ITeaDataForInterfaces } from "../../ts/types";

import { useSelector } from "react-redux";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

interface TeaLibraryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaLibrary: FC<TeaLibraryData> = () => {
  const teaCollection = useSelector(selectTeaCollection);

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={teaCollection} />
    </WrapperComponent>
  );
};

export default TeaLibrary;
