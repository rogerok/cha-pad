import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const isLoading = useAppSelector((state) => state.teaLibrary.loading);
  const isRejected = useAppSelector((state) => state.teaLibrary.error);

  useEffect(() => {
    dispatch(fetchAddedTeaByUsers(teaGrade));
  }, []);

  console.log(addedTea);

  if (isLoading) return <div>loading...</div>;
  if (isRejected) return <div>{isRejected}</div>;

  return (
    <React.Fragment>
      {addedTea.map((item) => (
        <WrapperComponent>
          <article>
            <h2>Header</h2>
            <section style={{ border: "1px solid white" }}>
              <p>{item.teaReview}</p>
              <footer>
                <p>
                  <time>time</time>
                  posted by: {item.addedBy}
                </p>
              </footer>
            </section>
          </article>
        </WrapperComponent>
      ))}
    </React.Fragment>
  );
};

export default Posts;
