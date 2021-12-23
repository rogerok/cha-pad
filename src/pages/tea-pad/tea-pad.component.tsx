import React, { FC } from "react";

import { Outlet } from "react-router";

import { useSelector } from "react-redux";

import { selectUiData } from "../../redux/tea-library/teaLibrarySlice";

import { ITeaDataForInterfaces } from "../../ts/types";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

interface TeaPadData {
  uiData: ITeaDataForInterfaces[];
}

const TeaPad: FC<TeaPadData> = () => {
  const uiData = useSelector(selectUiData);

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={uiData} />
      <Outlet />
    </WrapperComponent>
  );
};

export default TeaPad;
