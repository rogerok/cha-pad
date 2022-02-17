export interface ITeaDataForInterfaces {
  name?: string;
  id?: string;
  grade?: string;
  routeName: string;
  description: string;
  imageUrl: string;
  action?: string;
}

export interface ITeaPadDataForInterfaces {
  routeName: string;
  description: string;
  imageUrl: string;
  action: string;
  id: string;
}

export interface ITea {
  teaName: string;
  teaGrade: string;
  teaAge: string;
  teaReview: string;
  wouldTaste: boolean;
  date?: Date;
  addedBy: string;
  id: string;
}

export interface IUser {
  createdAt: Date;
  displayName: string;
  email: string;
  id: string;
}

export interface ITeaData<T> {
  shengPuerh: T;
  shuPuerh: T;
  whiteTea: T;
  redTea: T;
  greenTea: T;
  lightOolong: T;
  darkOolong: T;
  gabaTea: T;
  withoutGrade?: T;
}

export type TAddedTea = ITeaData<addedTea>;

type addedTea = {
  [key: string]: ITea;
};

export type TeaDataByUsers = ITeaData<ITea[]>;

export interface IValidateUserData {
  displayName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IValidationErrors {
  displayNameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError?: string;
}
