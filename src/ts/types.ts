export interface ITeaDataForInterfaces {
  id?: string | number;
  grade?: string;
  routeName: string;
  description: string;
  imageUrl: string;
}

export interface IUser {
  createdAt: {};
  displayName: string;
  email: string;
  id: string;
}

export interface ITea {
  teaName: string;
  teaGrade: string;
  teaAge: string;
  wouldTase: boolean;
}

export interface ICurrentUserAddedTea {
  shengPuerh: string[];
  shuPuerh: string[];
  whiteTea: string[];
  redTea: string[];
  greenTea: string[];
  lightOolong: string[];
  darkOolong: string[];
  gabaTea: string[];
  withoutGrade: string[];
}

export interface ITeaGrades {
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
}
