
import {
  MODIFY_AMOUNT,
  DELETE_ITEM,
  ADD_ITEM,
  CartState,
  CartActionTypes,
  CartItem,
} from "./types";
const INITIAL_STATE: CartState = { cart: [] };

export default (state = INITIAL_STATE, action: CartActionTypes): CartState => {
  switch (action.type) {
    case MODIFY_AMOUNT:
      console.log(action.itemId);
      const itemToChange: CartItem = state.cart.filter(
        (item: CartItem) => item.id === action.itemId
      )[0]
      console.log(itemToChange);
      return {
        cart: [
          ...state.cart.filter((item: CartItem) => item.id !== action.itemId),
          {
            ...itemToChange,
            amount: action.newAmount,
          },
        ],
      };
    case DELETE_ITEM:
      return {
        cart: state.cart.filter(
          (item: CartItem) => item.id !== action.idToRemove
        ),
      };
    case ADD_ITEM:
      return { cart: [...state.cart, {...action.payload, id: state.cart.length}] };
    default:
      return state;
  }
};
