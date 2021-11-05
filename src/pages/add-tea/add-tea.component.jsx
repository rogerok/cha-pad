import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { selectTeaGradesName } from "./../../redux/tea-library/tea-library.selectors";
import { createStructuredSelector } from "reselect";

import FormInput from "../../components/form-input/form-input.component";
import FormWrapper from "../../components/form-wrapper/form-wrapper.component";
import Select from "../../components/select/select.component";
import TextArea from "../../components/text-area/text-area.component";
import WrapperComponent from "../../components/wrapper/wrapper.component";
import CustomButton from "./../../components/custom-button/custom-button.component";

const AddTea = ({ teaGradesName }) => {
  const history = useHistory();

  const [teaData, setTeaData] = useState({
    teaName: "",
    teaAge: "",
    teaGrade: "",
    teaReview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeaData({
      ...teaData,
      [name]: value,
    });
  };

  return (
    <WrapperComponent>
      <FormWrapper wide>
        <form id="add-tea-form">
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
          <TextArea
            name="teaReview"
            placeholder="Оставьте Ваш отзыв"
            form="add-tea-form"
            onChange={handleChange}
          ></TextArea>
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
