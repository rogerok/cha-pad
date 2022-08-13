import React from "react";

import { useAppSelector } from "../../hooks/redux.hooks";

import { selectTeaCollection } from "../../redux/tea-library/teaLibrarySlice";

import CardCollection from "../card-collection/card-collection.component";

const TeaCategory = () => {
  const teaCollection = useAppSelector(selectTeaCollection);

  return <CardCollection teaCollection={teaCollection} />;
};

export default TeaCategory;
