import { IValidateUserData, IValidationErrors } from "./../ts/types";

export const validateData = (data: IValidateUserData) => {
  const { displayName, email, password, confirmPassword } = data;
  const errors: IValidationErrors = {
    displayNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  if (!displayName.trim()) {
    errors.displayNameError = "Необходимо ввести имя";
  }

  if (!email) {
    errors.emailError = "Необходимо ввести почту";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.emailError = "Введите корректный адрес почты";
  }

  if (!password) {
    errors.passwordError = "Введите пароль";
  } else if (password.length < 6) {
    errors.passwordError = "Пароль должен быть длиннее 5 символов";
  }

  if (!confirmPassword) {
    errors.confirmPasswordError = "Подтвердите пароль";
  } else if (password !== confirmPassword) {
    errors.confirmPasswordError = "Пароли не совпадают";
  }

  return errors;
};
