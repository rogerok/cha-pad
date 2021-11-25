import React from "react";

import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import { useSelector } from "react-redux";

import { selectTeaUiData } from "../../redux/tea-library/teaLibrarySlice";

import AddTea from "../../components/add-tea/add-tea.component";
import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import WrapperComponent from "./../../components/wrapper/wrapper.component";

const TeaPad = ({ match }) => {
  const uiData = useSelector((state) => state.teaLibrary.teaPadUiData);
  console.log(uiData);
  return (
    <WrapperComponent>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverview teaCollection={uiData} />}
      />
      <Route exact path={`${match.path}/add-tea`} component={AddTea} />
    </WrapperComponent>
  );
};

export default withRouter(TeaPad);
