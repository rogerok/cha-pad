import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectTeaGradesName } from "../../redux/tea-library/teaLibrarySlice";

import { useHistory } from "react-router";

import { fetchUserData } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Select from "../select/select.component";
import TextArea from "../text-area/text-area.component";
import WrapperComponent from "../wrapper/wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { CheckboxContainer } from "./add-tea.styles";

const AddTea = () => {
  const teaGradesName = useSelector(selectTeaGradesName);
  const dispatch = useDispatch();

  const history = useHistory();

  const [teaData, setTeaData] = useState({
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
    wouldTaste: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeaData({
      ...teaData,
      [name]: name === "wouldTaste" ? !teaData.wouldTaste : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTeaData({
      ...teaData,
      date: new Date(),
    });

    /*     dispatch(teaData);
     */
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
            required
            onChange={handleChange}
          />

          <FormInput
            name="teaAge"
            type="text"
            id="age-tea"
            label="Введите год выпуска чая"
            onChange={handleChange}
          />

          <Select
            name="teaGrade"
            form="add-tea-form"
            label="Выберите сорт чая"
            options={teaGradesName}
            required
            onChange={handleChange}
          />
          <CheckboxContainer>
            <p>Xочу попробовать</p>
            <input
              name="wouldTaste"
              type="checkbox"
              id="would-taste"
              onChange={handleChange}
            />
            <label htmlFor="would-taste"></label>
          </CheckboxContainer>

          <TextArea
            name="teaReview"
            placeholder="Оставьте Ваш отзыв"
            form="add-tea-form"
            onChange={handleChange}
          />

          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomButton>Добавить</CustomButton>
            <CustomButton onClick={() => history.goBack()}>Назад</CustomButton>
          </div>
        </form>
      </FormWrapper>
    </WrapperComponent>
  );
};

/* const mapStateToProps = createStructuredSelector({
  teaGradesName: selectTeaGradesName,
});

const mapDispatchToProps = (dispatch) => ({
  addTeaData: (data) => dispatch(fetchUserData(data)),
});
 */
export default /* connect(mapStateToProps, mapDispatchToProps) */ AddTea;
