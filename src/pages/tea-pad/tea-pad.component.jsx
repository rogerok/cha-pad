import React from "react";

import { Route } from "react-router-dom";
import { Outlet, Routes, useLocation } from "react-router";

import { useSelector } from "react-redux";

import { selectUiData } from "../../redux/tea-library/teaLibrarySlice";

import AddTea from "../../components/add-tea/add-tea.component";
import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import WrapperComponent from "./../../components/wrapper/wrapper.component";

const TeaPad = () => {
  const uiData = useSelector(selectUiData);
  const location = useLocation();

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={uiData} />
      <Outlet />
    </WrapperComponent>
  );
};

export default TeaPad;
