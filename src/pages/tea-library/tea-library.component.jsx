import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTeaCollection } from "../../redux/tea-library/tea-library.selectors";

const TeaLibrary = ({ match, teaCollection }) => {
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

const mapStateToProps = createStructuredSelector({
  teaCollection: selectTeaCollection,
});

export default connect(mapStateToProps)(TeaLibrary);
