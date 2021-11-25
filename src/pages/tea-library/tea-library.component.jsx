import React from "react";

import { Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

const TeaLibrary = ({ match }) => {
  const teaCollection = useSelector(selectTeaCollection());
  console.log(teaCollection);
  return (
    <WrapperComponent>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverview teaCollection={teaCollection} />}
      />
      {/*       <CollectionOverview teaCollection={teaCollection} /> */}
    </WrapperComponent>
  );
};

export default TeaLibrary;
