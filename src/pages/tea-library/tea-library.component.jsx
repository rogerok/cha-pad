import React from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTeaCollection } from "../../redux/tea-library/tea-library.selectors";

const TeaLibrary = ({ teaCollection }) => {
  return (
    <WrapperComponent>
      <CollectionOverview teaCollection={teaCollection} />
    </WrapperComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  teaCollection: selectTeaCollection,
});

export default connect(mapStateToProps)(TeaLibrary);
