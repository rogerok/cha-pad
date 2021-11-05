const INITIAL_STATE = {
  teaGrades: {
    shengPuerh: {
      id: "1",
      grade: "Шен пуэр",
      routeName: "sheng-puerh",
      description:
        "Шен пуэр – классический китайский чай, созданный путем постферментации.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/BaoTangRawPuer2_2000x.jpg?v=1598465826",
      items: {},
    },
    shuPuerh: {
      id: "2",
      grade: "Шу пуэр",
      routeName: "shu-puerh",
      description:
        "Шу пуэр — искусственно состаренный пуэр, имитирующий выдержанный Шен.",
      imageUrl:
        "https://rishi-tea.com/product/image/medium/oashuputc125-rp_puer-tea-cake-organic-loose-leaf-puer-tea.jpg",
      items: {},
    },
    whiteTea: {
      id: "3",
      grade: "Белый чай",
      routeName: "white-tea",
      description:
        "Бе́лый чай — вид чая, подвергающийся слабой ферментации. Белый чай меньше всего подвергается ферментации, примерно 5-7 %. Название «белый» получил по виду чайной почки, которая густо покрыта белым ворсом.",
      imageUrl:
        "http://cdn.shopify.com/s/files/1/0494/5177/products/SilverNeedle_1200x1200.jpg?v=1595080480",
      items: {},
    },
    redTea: {
      id: "4",
      grade: "Красный чай",
      routeName: "red-tea",
      description:
        "Красный чай (Хун Ча) – это чай, полученный из листьев куста Caméllia sinénsis путем сильной ферментации. Такой чай дает насыщенный красновато-коричневый отвар.",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/GushuHongCha2_600x.jpg?v=1598479909",
      items: {},
    },
    lightOolong: {
      id: "5",
      grade: "Светлый улун",
      routeName: "light-oolong",
      description:
        "Светлый улун — это полуферментированный чай, который занимает промежуточное положение между красным и зелёным чаем. Это место он получил благодаря технологии производства, при которой обработке подвергаются не весь лист, а только его края и часть поверхности.",
      imageUrl:
        "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/2048x2048/products/1155/1274/LightOolong__33181.1590092556.jpg?c=1",
      items: {},
    },
    darkOolong: {
      id: "6",
      grade: "Темный улун",
      routeName: "dark-oolong",
      description:
        "Темные улуны - сильноферментированная разновидность улунов, их еще называют красными. На финальном этапе темные улуны проходят процедуру медленного томления на древесном угле.",
      imageUrl:
        "https://cdn.webshopapp.com/shops/85422/files/333764223/image.jpg",
      items: {},
    },
    greenTea: {
      id: "7",
      grade: "Зеленый чай",
      routeName: "green-tea",
      description:
        "Зелёный чай — чай, подвергнутый минимальной ферментации.Зелёный чай предварительно часто фиксируется паром температуры 170—180 °C; окисление продолжается не более двух дней, после чего обычно прекращается нагревом.",
      imageUrl: "https://m.media-amazon.com/images/I/71iWjD-2BoL._SL1280_.jpg",
      items: {},
    },
    gabaTea: {
      id: "8",
      grade: "ГАБА чай",
      routeName: "gaba-tea",
      description:
        "Габа чай — чай, прошедший ферментацию в анаэробных условиях (без доступа кислорода), вследствие чего в нём образовалось повышенное содержание гамма-аминомасляной кислоты.",
      imageUrl: "https://sc04.alicdn.com/kf/HTB18xUiFhSYBuNjSsphq6zGvVXaa.jpg",
      items: {},
    },
  },
  teaPadUiData: [
    {
      id: 1,
      routeName: "add-tea",
      description: "Добавить чай",
      imageUrl:
        "https://cdn11.bigcommerce.com/s-8466dwhhql/images/stencil/2048x2048/products/1155/1274/LightOolong__33181.1590092556.jpg?c=1",
    },
    {
      id: 2,
      routeName: "tasted-tea",
      description: "Попробовал чай",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0046/1380/0029/products/BaoTangRawPuer2_2000x.jpg?v=1598465826",
    },
    {
      id: 3,
      routeName: "would-taste-tea",
      description: "Хочу попробовать",
      imageUrl: "https://m.media-amazon.com/images/I/71iWjD-2BoL._SL1280_.jpg",
    },
  ],

  addedTeaByUsers: {},
};

const teaLibraryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default teaLibraryReducer;