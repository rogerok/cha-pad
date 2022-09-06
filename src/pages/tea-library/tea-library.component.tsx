import React, { FC } from "react";
import { ITeaDataForInterfaces } from "../../ts/types";

import TeaCategory from "../../components/tea-category/tea-category.component";
import Title from "../../components/title/title.component";

interface TeaLibraryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaLibrary/* : FC<TeaLibraryData>  */= () => {
  return (
    <>
      <Title>Чай, добавленный пользователями</Title>
      <TeaCategory />
    </>
  );
};

export default TeaLibrary;
