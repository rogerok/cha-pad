export interface ITeaDataForInterfaces {
  name?: string;
  id?: string | number;
  grade?: string;
  routeName: string;
  description: string;
  imageUrl: string;
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

export type TeaDataByUsers = ITeaData<ITea[]>;

export interface ITea {
  teaName: string;
  teaGrade: string;
  teaAge: string;
  teaReview: string;
  wouldTaste: boolean;
  date?: Date;
  addedBy?: string;
}

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

// refactroring interfaces
interface IUserData {
  displayName: string;
  email: string;
}

/* interface IAdded {
  tea: ITeaData<string[]>;
  t: ITeaData<Record<string, ITea[]>>;
  a: ITeaData<[ITea]>;
}
 */

/* export interface ITeaGrades {
  shengPuerh: {
    [key: string]: ITea;
  };
  shuPuerh: {
    [key: string]: ITea;
  };
  whiteTea: {
    [key: string]: ITea;
  };
  redTea: {
    [key: string]: ITea;
  };
  lightOolong: {
    [key: string]: ITea;
  };
  darkOolong: {
    [key: string]: ITea;
  };
  greenTea: {
    [key: string]: ITea;
  };
  gabaTea: {
    [key: string]: ITea;
  };
  withoutGrade: {
    [key: string]: ITea;
  };
} */

/* export interface ICurrentUserAddedTea {
  shengPuerh: string[];
  shuPuerh: string[];
  whiteTea: string[];
  redTea: string[];
  greenTea: string[];
  lightOolong: string[];
  darkOolong: string[];
  gabaTea: string[];
  withoutGrade: string[];
} */
