import React, { FC, useRef, useState } from "react";
import { v4 as uuidGenerator } from "uuid";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../hooks/redux.hooks";
import useCompressPhoto from "../../hooks/useCompressPhoto.hook";

import {
  selectTeaGradesName,
  addNewPost,
} from "../../redux/tea-library/teaLibrarySlice";
import {
  addTeaDataToUserProfile,
  selectCurrentUser,
} from "../../redux/user/userSlice";

import { ITea } from "../../ts/types";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Select from "../select/select.component";
import TextArea from "../text-area/text-area.component";
import WrapperComponent from "../wrapper/wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { CheckboxContainer } from "./add-tea.styles";
import StarRating from "../star-rating/star-rating.component";

const AddTea: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userName = useAppSelector(selectCurrentUser)?.displayName ?? "";
  const userId = useAppSelector(selectCurrentUser)?.id ?? "";
  const teaGradesName = useAppSelector(selectTeaGradesName);

  const { teaPhoto, handleFileInputChange, handlePhotoSubmit } =
    useCompressPhoto();

  const photoRef = useRef<HTMLInputElement | null | string>(null);

  const [teaData, setTeaData] = useState<ITea>({
    addedBy: userName,
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
    wouldTaste: false,
    id: "",
    userId,
    rating: null,
  });

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    dispatch(addNewPost({ data, teaPhoto }));
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
      rating: null,
    });
    photoRef.current = "";
    handlePhotoSubmit();
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
          <FormInput
            name="teaPhoto"
            type="file"
            id="tea-photo"
            label="Добавьте фото чая"
            onChange={handleFileInputChange}
            accept={"image/*"}
          />
          <StarRating value={teaData.rating!} onChange={handleChange} />

          <TextArea
            name="teaReview"
            placeholder="Оставьте Ваш отзыв"
            form="add-tea-form"
            onChange={handleChange}
            value={teaData.teaReview}
          />
          <div
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
