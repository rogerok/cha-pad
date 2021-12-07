import React from "react";

import { useSelector } from "react-redux";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

const TeaLibrary = () => {
  const teaCollection = useSelector(selectTeaCollection);

  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={teaCollection} />
    </WrapperComponent>
  );
};

export default TeaLibrary;
