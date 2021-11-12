import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { selectTeaGradesName } from "../../redux/tea-library/tea-library.selectors";
import { createStructuredSelector } from "reselect";

import FormInput from "../form-input/form-input.component";
import FormWrapper from "../form-wrapper/form-wrapper.component";
import Select from "../select/select.component";
import TextArea from "../text-area/text-area.component";
import WrapperComponent from "../wrapper/wrapper.component";
import CustomButton from "../custom-button/custom-button.component";

import { CheckboxContainer } from "./add-tea.styles";

const AddTea = ({ teaGradesName }) => {
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
    console.log(e.target);
  };
  console.log(teaData);

  return (
    <WrapperComponent>
      <FormWrapper wide>
        <form
          id="add-tea-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(teaData);
          }}
        >
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

const mapStateToProps = createStructuredSelector({
  teaGradesName: selectTeaGradesName,
});

export default connect(mapStateToProps)(AddTea);
