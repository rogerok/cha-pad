import React, { FC } from "react";

import { Outlet } from "react-router";

import { selectUiData } from "../../redux/tea-library/teaLibrarySlice";
import { useAppSelector } from "../../hooks/redux.hooks";

import { ITeaDataForInterfaces } from "../../ts/types";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

interface TeaPadData {
  uiData: ITeaDataForInterfaces[];
}

const TeaPad: FC<TeaPadData> = () => {
  const uiData = useAppSelector(selectUiData);

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={uiData} />
    </WrapperComponent>
  );
};

export default TeaPad;
