import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { firestore } from "../../firebase/firebase.utils";
import { ITeaPadDataForInterfaces } from "./../../ts/types";
import {
  ITeaDataForInterfaces,
  ITea,
  ITeaData,
  TAddedTea,
} from "./../../ts/types";

interface TeaLibraryState {
  loading: boolean;
  error: any;
  teaGrades: ITeaData<ITeaDataForInterfaces>;
  teaPadUiData: ITeaPadDataForInterfaces[];
  addedTeaByUsers: {
    [key: string]: {
      [key: string]: ITea;
    };
  };
  /*   addedTeaByUsers: TAddedTea; */
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
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/BaoTangRawPuer2_2000x.jpg?v=1598465826",
    },
    shuPuerh: {
      name: "shuPuerh",
      id: "1",
      grade: "Шу пуэр",
      routeName: "shu-puerh",
      description:
        "Шу пуэр — искусственно состаренный пуэр, имитирующий выдержанный Шен.",
      imageUrl:
        "https://rishi-tea.com/product/image/medium/oashuputc125-rp_puer-tea-cake-organic-loose-leaf-puer-tea.jpg",
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
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/GushuHongCha2_600x.jpg?v=1598479909",
    },
    lightOolong: {
      name: "lightOolong",

      id: "4",
      grade: "Светлый улун",
      routeName: "light-oolong",
      description:
        "Светлый улун — это полуферментированный чай, который занимает промежуточное положение между красным и зелёным чаем. Это место он получил благодаря технологии производства, при которой обработке подвергаются не весь лист, а только его края и часть поверхности.",
      imageUrl:
        "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/2048x2048/products/1155/1274/LightOolong__33181.1590092556.jpg?c=1",
    },
    darkOolong: {
      name: "darkOolong",
      id: "5",
      grade: "Темный улун",
      routeName: "dark-oolong",
      description:
        "Темные улуны - сильноферментированная разновидность улунов, их еще называют красными. На финальном этапе темные улуны проходят процедуру медленного томления на древесном угле.",
      imageUrl:
        "https://cdn.webshopapp.com/shops/85422/files/333764223/image.jpg",
    },
    greenTea: {
      name: "greenTea",

      id: "6",
      grade: "Зеленый чай",
      routeName: "green-tea",
      description:
        "Зелёный чай — чай, подвергнутый минимальной ферментации.Зелёный чай предварительно часто фиксируется паром температуры 170—180 °C; окисление продолжается не более двух дней, после чего обычно прекращается нагревом.",
      imageUrl: "https://m.media-amazon.com/images/I/71iWjD-2BoL._SL1280_.jpg",
    },
    gabaTea: {
      name: "gabaTea",
      id: "7",
      grade: "ГАБА чай",
      routeName: "gaba-tea",
      description:
        "Габа чай — чай, прошедший ферментацию в анаэробных условиях (без доступа кислорода), вследствие чего в нём образовалось повышенное содержание гамма-аминомасляной кислоты.",
      imageUrl: "https://sc04.alicdn.com/kf/HTB18xUiFhSYBuNjSsphq6zGvVXaa.jpg",
    },
  },
  teaPadUiData: [
    {
      action: "addTea",
      id: "0",
      description: "Добавить чай",
      routeName: "add-tea",
      imageUrl:
        "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/2048x2048/products/1155/1274/LightOolong__33181.1590092556.jpg?c=1",
    },
    {
      action: "tastedTea",
      id: "1",
      routeName: "tasted-tea",
      description: "Попробовал чай",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/BaoTangRawPuer2_2000x.jpg?v=1598465826",
    },
    {
      action: "wouldTaste",
      id: "2",
      routeName: "would-taste-tea",
      description: "Хочу попробовать",
      imageUrl: "https://m.media-amazon.com/images/I/71iWjD-2BoL._SL1280_.jpg",
    },
  ],

  addedTeaByUsers: {
    shengPuerh: {},
    shuPuerh: {},
    whiteTea: {},
    redTea: {},
    lightOolong: {},
    darkOolong: {},
    greenTea: {},
    gabaTea: {},
    withoutGrade: {},
  },
};

export const fetchAddedPostsByUsers = createAsyncThunk(
  "teaLibrary/fetchPostsData",
  async (teaGrade: string, { rejectWithValue }) => {
    try {
      const response = await firestore
        .collection("teaLibrary")
        .doc("addedTeaByUsers")
        .collection(teaGrade)
        .get();
      if (response.empty)
        throw new Error("Вы еще не добавляли чай этого сорта");
      return response.docs.map((doc) => doc.data());
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "teaLibrary/addNewPost",
  async (data: ITea, { rejectWithValue }) => {
    try {
      const response = await firestore
        .collection(`teaLibrary`)
        .doc(`addedTeaByUsers`)
        .collection(data.teaGrade)
        .doc(data.id)
        .set({
          ...data,
          date: new Date(),
        });
      console.log(response);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state: TeaLibraryState, action: PayloadAction<ITea>) => {
  state.loading = false;
  state.error = action.payload;
};
const setLoading = (state: TeaLibraryState, action: PayloadAction<ITea>) => {
  state.loading = true;
  state.error = null;
};

export const teaLibrarySlice = createSlice({
  name: "teaLibrary",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAddedPostsByUsers.pending.type]: setLoading,
    [fetchAddedPostsByUsers.rejected.type]: setError,

    [fetchAddedPostsByUsers.fulfilled.type]: (
      state: TeaLibraryState,
      action: PayloadAction<ITea[]>
    ) => {
      action.payload.forEach((item) => {
        state.addedTeaByUsers[item.teaGrade as keyof TAddedTea][
          item.id as string
        ] = item;
      });
      state.loading = false;
      state.error = null;
    },

    [addNewPost.pending.type]: setLoading,
    [addNewPost.rejected.type]: setError,
  },
});
const selectTeaLibrary = (state: { teaLibrary: TeaLibraryState }) =>
  state.teaLibrary;

export const selectTeaUiData = (state: TeaLibraryState) => state.teaPadUiData;

export const selectTeaGrades = createSelector(
  [selectTeaLibrary],
  (grades): ITeaData<ITeaDataForInterfaces> => grades.teaGrades
);

export const selectTeaCollection = createSelector(
  [selectTeaGrades],
  (teaGrades): any => {
    /*     teaGrades
      ? Object.keys(teaGrades).map(
          (collection: string) =>
            teaGrades[collection as keyof ITeaData<ITeaDataForInterfaces>]
        )
      : []; */
    if (!teaGrades) return [];
    return Object.keys(teaGrades).map(
      (collection: string) =>
        teaGrades[collection as keyof ITeaData<ITeaDataForInterfaces>]
    );
  }
);

export const selectUiData = createSelector(
  [selectTeaLibrary],
  (uiData) => uiData.teaPadUiData
);

export const selectTeaGradesName = createSelector([selectTeaGrades], (grades) =>
  Object.keys(grades).map((gradeItem) => {
    return {
      gradeValue: gradeItem,
      gradeName:
        grades[gradeItem as keyof ITeaData<ITeaDataForInterfaces>]?.grade,
    };
  })
);
export const selectAddedTea = createSelector(
  [selectTeaLibrary],
  (teaLibrary) => teaLibrary.addedTeaByUsers
);

export const selectAddedPostsByUsers = createSelector(
  selectAddedTea,
  (_: any, teaGrade: string) => teaGrade,
  (addedTea, teaGrade) =>
    Object.keys(addedTea[teaGrade] ?? {}).map(
      (item) => addedTea[teaGrade][item]
    )
);
export default teaLibrarySlice.reducer;
