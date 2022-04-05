import React, { FC } from "react";

//hooks
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux.hooks";
import useAddTea from "../../hooks/useAddTea.hook";
import useStarRating from "../../hooks/useStarRating";

import { selectPostsLoading } from "../../redux/posts/postsSlice";

//components
import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Select from "../select/select.component";
import TextArea from "../text-area/text-area.component";
import WrapperComponent from "../wrapper/wrapper.component";
import CustomButton from "../custom-button/custom-button.component";
import StarRating from "../star-rating/star-rating.component";
import SpinnerComponent from "../spinner/spinner.component";

//styles
import { CheckboxContainer } from "./add-tea.styles";

const AddTea: FC = () => {
  const navigate = useNavigate();
  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const {
    handleChange,
    handleFileInputChange,
    handleSubmit,
    teaData,
    teaGradesName,
    handleStarRatingChange,
  } = useAddTea();

  const isLoading = useAppSelector(selectPostsLoading);

  return isLoading ? (
    <SpinnerComponent />
  ) : (
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
          <StarRating
            value={teaData.rating!}
            //onChange={handleChange}
            handleRatingChange={handleStarRatingChange}
          />

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
