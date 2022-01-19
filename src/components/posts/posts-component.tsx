import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { convertPathnameToCamelCase } from "../../utils/utils";

import { ITea, ITeaData } from "../../ts/types";

import WrapperComponent from "../wrapper/wrapper.component";
import { fetchAddedTeaByUsers } from "../../redux/tea-library/teaLibrarySlice";

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();

  const teaGrade = convertPathnameToCamelCase(category as string);
  const addedTea = useAppSelector(
    (state) =>
      state.teaLibrary.addedTeaByUsers[teaGrade as keyof ITeaData<ITea[]>]
  );
  useEffect(() => {
    dispatch(fetchAddedTeaByUsers(teaGrade));
  }, []);

  console.log(addedTea);

  return (
    <WrapperComponent>
      <article>
        <h2>Header</h2>
        <section style={{ border: "1px solid white" }}>
          <p>review</p>
          <footer>
            <p>
              <time>time</time>
              posted by
            </p>
          </footer>
        </section>
      </article>
    </WrapperComponent>
  );
};

export default Posts;
