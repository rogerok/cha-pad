export const validateData = (data) => {
  const { displayName, email, password, confirmPassword } = data;
  const errors = {};

  if (!displayName.trim()) {
    errors.displayName = "Необходимо ввести имя";
  }

  if (!email) {
    errors.email = "Необходимо ввести почту";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Введите корректный адрес почты";
  }

  if (!password) {
    errors.password = "Введите пароль";
  } else if (password.length < 6) {
    errors.password = "Пароль должен быть длиннее 5 символов";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Подтвердите пароль";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Пароли не совпадают";
  }

  return errors;
};
