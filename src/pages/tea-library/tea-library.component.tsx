import React, { FC } from "react";
import { ITeaDataForInterfaces } from "../../ts/types";

import TeaCategory from "../../components/tea-category/tea-category.component";

interface TeaLibraryData {
  teaCollection: ITeaDataForInterfaces[];
}

const TeaLibrary: FC<TeaLibraryData> = () => {
  return <TeaCategory teaCollection={[]} />;
};

export default TeaLibrary;
