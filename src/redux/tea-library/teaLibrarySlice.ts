import { createSlice, createSelector } from "@reduxjs/toolkit";

import {
  ITeaDataForInterfaces,
  ITeaPadDataForInterfaces,
  ITeaData,
} from "./../../ts/types";

interface TeaLibraryState {
  loading: boolean;
  error: any;
  teaGrades: ITeaData<ITeaDataForInterfaces>;
  teaPadUiData: ITeaPadDataForInterfaces[];
}

const initialState: TeaLibraryState = {
  loading: false,
  error: null,
  teaGrades: {
    shengPuerh: {
      name: "shengPuerh",
      id: "0",
      grade: "Шен пуэр",
      routeName: "sheng-puerh",
      description:
        "Шен пуэр – классический китайский чай, созданный путем постферментации.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fshen-puerh.webp?alt=media&token=e94e910c-1014-47c1-9a1d-40b5b98006a2",
    },
    shuPuerh: {
      name: "shuPuerh",
      id: "1",
      grade: "Шу пуэр",
      routeName: "shu-puerh",
      description:
        "Шу пуэр — искусственно состаренный пуэр, имитирующий выдержанный Шен.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fshu-puerh.jpg?alt=media&token=4eae0fd1-5303-4261-bf09-ea367532af66",
    },
    whiteTea: {
      name: "whiteTea",
      id: "2",
      grade: "Белый чай",
      routeName: "white-tea",
      description:
        "Бе́лый чай — вид чая, подвергающийся слабой ферментации. Белый чай меньше всего подвергается ферментации, примерно 5-7 %. Название «белый» получил по виду чайной почки, которая густо покрыта белым ворсом.",
      imageUrl:
        "http://cdn.shopify.com/s/files/1/0494/5177/products/SilverNeedle_1200x1200.jpg?v=1595080480",
    },
    redTea: {
      name: "redTea",
      id: "3",
      grade: "Красный чай",
      routeName: "red-tea",
      description:
        "Красный чай (Хун Ча) – это чай, полученный из листьев куста Caméllia sinénsis путем сильной ферментации. Такой чай дает насыщенный красновато-коричневый отвар.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fred-tea.webp?alt=media&token=62d71eee-2d5a-4975-8341-b711ff001029",
    },
    lightOolong: {
      name: "lightOolong",

      id: "4",
      grade: "Светлый улун",
      routeName: "light-oolong",
      description:
        "Светлый улун — это полуферментированный чай, который занимает промежуточное положение между красным и зелёным чаем. Это место он получил благодаря технологии производства, при которой обработке подвергаются не весь лист, а только его края и часть поверхности.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Flight-oolong.webp?alt=media&token=1b457302-9503-460d-bc6d-b2cb0ab5df64",
    },
    darkOolong: {
      name: "darkOolong",
      id: "5",
      grade: "Темный улун",
      routeName: "dark-oolong",
      description:
        "Темные улуны - сильноферментированная разновидность улунов, их еще называют красными. На финальном этапе темные улуны проходят процедуру медленного томления на древесном угле.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fdark-oolong-min.jpg?alt=media&token=f84f0e0f-d21e-42e8-85fd-bbcc3360211c",
    },
    greenTea: {
      name: "greenTea",

      id: "6",
      grade: "Зеленый чай",
      routeName: "green-tea",
      description:
        "Зелёный чай — чай, подвергнутый минимальной ферментации.Зелёный чай предварительно часто фиксируется паром температуры 170—180 °C; окисление продолжается не более двух дней, после чего обычно прекращается нагревом.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fgreen-tea-min.jpg?alt=media&token=6a44bfe6-c73c-4f40-ad6e-06b6bb813516",
    },
    gabaTea: {
      name: "gabaTea",
      id: "7",
      grade: "ГАБА чай",
      routeName: "gaba-tea",
      description:
        "Габа чай — чай, прошедший ферментацию в анаэробных условиях (без доступа кислорода), вследствие чего в нём образовалось повышенное содержание гамма-аминомасляной кислоты.",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fgaba-tea-min.jpg?alt=media&token=75749e2b-d0e7-466f-8de1-d61c261afca8",
    },
    withoutGrade: {
      name: "withoutGrade",
      id: "8",
      grade: "Без сорта",
      routeName: "without-grade",
      description: "Чай без указания сорта",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fwithout-grade-min.jpg?alt=media&token=f70f4bb1-515c-4f19-85b0-0b7c3114cd57",
    },
  },
  teaPadUiData: [
    {
      action: "addTea",
      id: "0",
      description: "Добавить чай",
      routeName: "add-tea",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fgaba-tea-min.jpg?alt=media&token=75749e2b-d0e7-466f-8de1-d61c261afca8",
    },
    {
      action: "tastedTea",
      id: "1",
      routeName: "tasted-tea",
      description: "Попробовал чай",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fshen-puerh.webp?alt=media&token=e94e910c-1014-47c1-9a1d-40b5b98006a2",
    },
    {
      action: "wouldTaste",
      id: "2",
      routeName: "would-taste-tea",
      description: "Хочу попробовать",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/tea-pad.appspot.com/o/assets%2Fred-tea.webp?alt=media&token=62d71eee-2d5a-4975-8341-b711ff001029",
    },
  ],
};

export const teaLibrarySlice = createSlice({
  name: "teaLibrary",
  initialState,
  reducers: {},
});

const selectTeaLibrary = (state: {
  teaLibrary: TeaLibraryState;
}): TeaLibraryState => state.teaLibrary;

export const selectTeaUiData = (state: TeaLibraryState) => state.teaPadUiData;

export const selectTeaGrades = createSelector(
  [selectTeaLibrary],
  (grades): ITeaData<ITeaDataForInterfaces> => grades.teaGrades
);

export const selectTeaCollection = createSelector(
  [selectTeaGrades],
  (teaGrades): any => {
    if (!teaGrades) return [];
    return Object.keys(teaGrades).map(
      (collection: string) =>
        teaGrades[collection as keyof ITeaData<ITeaDataForInterfaces>]
    );
  }
);

export const selectUiData = createSelector(
  [selectTeaLibrary],
  (uiData): ITeaPadDataForInterfaces[] => uiData.teaPadUiData
);

export const selectTeaGradesName = createSelector([selectTeaGrades], (grades) =>
  Object.keys(grades).map((gradeItem) => {
    return {
      gradeValue: gradeItem,
      gradeName:
        grades[gradeItem as keyof ITeaData<ITeaDataForInterfaces>]!.grade,
    };
  })
);

export const selectDefaultImage = createSelector(
  selectTeaGrades,
  (_: any, teaGrade: string) => teaGrade,
  (teaCollection, teaGrade) =>
    teaCollection[teaGrade as keyof ITeaData<ITeaDataForInterfaces>]?.imageUrl
);

export default teaLibrarySlice.reducer;
