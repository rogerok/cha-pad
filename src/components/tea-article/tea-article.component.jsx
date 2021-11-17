import React from "react";
import { connect } from "react-redux";

export const TeaArticle = (props) => {
  return <div>tea-article</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TeaArticle);
