import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  ItemsState,
  ItemActionTypes,
  Item,
  ADD_RATING,
} from "./types";
const INITIAL_STATE: ItemsState = {
  items: [
    {
      id: 1,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZOfCsw4GiI4lxK-JEed-Nw7fPq2jRfbxss3mW2hlu-ZOnSROn_5JWWBH8_CPXyO4m7yheFA&usqp=CAc",
      name: "Yellow shit",
      prize: 699.99,
      rating: [1, 4, 2, 4, 1, 5, 2, 3, 2, 2, 2, 3],
      description:
        "Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ",
    },
    {
      id: 2,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50JKVLrxm6aWSV9fy-WCaU8CYVYWknEt8ypK4nFDaekfIUsHj8quGu18Gp-wJNAv7PX_ZLUbh&usqp=CAc",
      name: "White regal",
      prize: 3.99,
      rating: [5, 4, 2, 4, 5, 2, 3, 5, 5, 5, 3],
      description:
        "Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ",
    },
    {
      id: 3,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UbfK8792hTmQ_QKrRADpAjdr7YICfYyUYhfRfZfVKT4_s3pCY_BhdHuvDfOAfHO-fmSkYrU5&usqp=CAc",
      name: "white komoda",
      prize: 239.99,
      rating: [1, 4, 2, 4, 1, 5, 2, 3, 2, 2, 2, 3],
      description:
        "Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ",
    },
    {
      id: 4,
      img:
        "data:image/jpeg;base64,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",
      name: "black closet",
      prize: 6969.99,
      rating: [1, 4, 2, 4, 1, 5, 2, 3, 2, 2, 2, 3],
      description:
        "Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ",
    },
    {
      id: 5,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vQBhhkX1NHIezvDZCsmFeMF3YN7KLiO5alJLkGa_p4aficZ3a27nvcGgcxqMU8kzLC6x6R4&usqp=CAc",
      name: "grey Sofa",
      prize: 899.99,
      rating: [1, 4, 2, 4, 1, 5, 2, 3, 2, 2, 2, 3],
      description:
        "Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ",
    },
  ],
};

const itemsReducer = (
  state = INITIAL_STATE,
  action: ItemActionTypes
): ItemsState => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        items: [...action.payload],
      };
    case ADD_RATING:
      const itemToChange: Item = state.items.filter(
        (item: Item) => item.id === action.idOfItemToAddRating
      )[0];
      console.log(itemToChange);
      return {
        items: [
          ...state.items.filter(
            (item: Item) => item.id !== action.idOfItemToAddRating
          ),
          {
            ...itemToChange,
            rating: [...itemToChange.rating, action.rating],
          },
        ],
      };
    case ADD_ITEM:
      /* 
      obsługa dodania itemu do bazy danych, połączenie z back-endem
      */
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      /* 
      obsługa usunięcia itemu z bazy danych, połączenie z back-endem
      */
      return {
        items: state.items.filter(
          (item: Item) => item.id !== action.idToRemove
        ),
      };
    default:
      return state;
  }
};
export default itemsReducer;
