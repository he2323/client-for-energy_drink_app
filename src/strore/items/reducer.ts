import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  ItemsState,
  ItemActionTypes,
  Item,
} from "./types";
const INITIAL_STATE: ItemsState = { items: [] };

const itemsReducer = (
  state = INITIAL_STATE,
  action: ItemActionTypes
): ItemsState => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        items: [...action.payload],
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
