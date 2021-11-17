import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { createStructuredSelector } from "reselect";
import { selectUiData } from "../../redux/tea-library/tea-library.selectors";

import AddTea from "../../components/add-tea/add-tea.component";
import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import WrapperComponent from "./../../components/wrapper/wrapper.component";

const TeaPad = ({ match, uiData }) => {
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

const mapStateToProps = createStructuredSelector({
  uiData: selectUiData,
});

export default withRouter(connect(mapStateToProps)(TeaPad));
