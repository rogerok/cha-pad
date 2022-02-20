import React, { FC, useState } from "react";
import { v4 as uuidGenerator } from "uuid";

import { useAppSelector, useAppDispatch } from "../../hooks/redux.hooks";
import {
  selectTeaGradesName,
  addNewPost,
} from "../../redux/tea-library/teaLibrarySlice";
import {
  addTeaDataToUserProfile,
  selectCurrentUser,
} from "../../redux/user/userSlice";

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
  const userName = useAppSelector(selectCurrentUser)?.displayName ?? "";

  const userId: string | undefined =
    useAppSelector(selectCurrentUser)?.id ?? "";
  //@ts-ignore
  const teaGradesName = useAppSelector(selectTeaGradesName);

  const [teaData, setTeaData] = useState<ITea>({
    addedBy: userName,
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
    wouldTaste: false,
    id: "",
    userId,
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const goBack = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigate(-1);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uuid: string = uuidGenerator();
    const data = {
      ...teaData,
      id: uuid,
      userId,
    };

    dispatch(addNewPost(data));
    dispatch(addTeaDataToUserProfile({ data, userId }));
    setTeaData({
      addedBy: userName,
      teaName: "",
      teaAge: "",
      teaGrade: "",
      teaReview: "",
      wouldTaste: false,
      id: "",
      userId,
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
            required
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
            //@ts-ignore
            options={teaGradesName}
            onChange={handleChange}
            id={"tea-grade"}
            value={teaData.teaGrade}
            required
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
