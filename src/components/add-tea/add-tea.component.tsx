import React, { FC, useState } from "react";
import { v4 as uuidGenerator } from "uuid";

import { useAppSelector, useAppDispatch } from "../../hooks/redux.hooks";
import {
  selectTeaGradesName,
  setTastedTea,
} from "../../redux/tea-library/teaLibrarySlice";
import { selectCurrentUser } from "../../redux/user/userSlice";

import { firestore } from "../../firebase/firebase.utils";

import { ITea } from "../../ts/types";

import { useNavigate } from "react-router";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Select from "../select/select.component";
import TextArea from "../text-area/text-area.component";
import WrapperComponent from "../wrapper/wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { CheckboxContainer } from "./add-tea.styles";

const AddTea: FC = () => {
  const userName = useAppSelector(selectCurrentUser)?.displayName;
  const userId = useAppSelector(selectCurrentUser)?.displayName;
  const teaGradesName = useAppSelector(selectTeaGradesName);

  const dispatch = useAppDispatch();

  const [teaData, setTeaData] = useState<ITea>({
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
    wouldTaste: false,
    addedBy: userName,
  });

  const navigate = useNavigate();

  const goBack = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigate(-1);
  };

  const addTeaToCollection = async (data: ITea, uuid: string) => {
    try {
      await firestore
        .collection(`teaLibrary`)
        .doc(`addedTeaByUsers`)
        .collection(data.teaGrade)
        .doc(uuid)
        .set({
          ...data,
          date: new Date(),
          id: uuid,
        });
    } catch (err) {
      console.log(err);
    }
  };

  const addTeaToUserData = async (data: ITea, uuid: string) => {
    try {
      const userAddedTeaRef = await firestore
        .collection("users")
        .doc(userId)
        .collection("addedTea")
        .doc(data.teaGrade);

      await userAddedTeaRef.set(
        {
          [uuid]: {
            wouldTaste: data.wouldTaste,
            id: uuid,
          },
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setTeaData({
      ...teaData,
      [name]: name === "wouldTaste" ? !teaData.wouldTaste : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const uuid: string = uuidGenerator();

    dispatch(setTastedTea(teaData));

    addTeaToCollection(teaData, uuid);
    addTeaToUserData(teaData, uuid);

    setTeaData({
      teaName: "",
      teaAge: "",
      teaGrade: "",
      teaReview: "",
      wouldTaste: false,
    });
  };

  return (
    <WrapperComponent>
      <FormWrapper wide>
        <form id="add-tea-form" onSubmit={handleSubmit}>
          <FormInput
            name="teaName"
            type="text"
            id="name-tea"
            label="Введите название чая"
            onChange={handleChange}
            value={teaData.teaName}
          />

          <FormInput
            name="teaAge"
            type="text"
            id="age-tea"
            label="Введите год выпуска чая"
            onChange={handleChange}
            value={teaData.teaAge}
          />

          <Select
            name="teaGrade"
            form="add-tea-form"
            label="Выберите сорт чая"
            options={teaGradesName}
            onChange={handleChange}
            id={"tea-grade"}
            value={teaData.teaGrade}
          />
          <CheckboxContainer>
            <p>Xочу попробовать</p>
            <input
              name="wouldTaste"
              type="checkbox"
              id="would-taste"
              onChange={handleChange}
              checked={teaData.wouldTaste}
            />
            <label htmlFor="would-taste"></label>
          </CheckboxContainer>

          <TextArea
            name="teaReview"
            placeholder="Оставьте Ваш отзыв"
            form="add-tea-form"
            onChange={handleChange}
            value={teaData.teaReview}
          />

          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomButton type="submit">Добавить</CustomButton>
            <CustomButton onClick={goBack}>Назад</CustomButton>
          </div>
        </form>
      </FormWrapper>
    </WrapperComponent>
  );
};

export default AddTea;
