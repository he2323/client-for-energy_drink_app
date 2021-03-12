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
      return {
        cart: [
          ...state.cart.filter((item: CartItem) => item.id !== action.itemId),
          {
            id: action.itemId,
            amount: action.newAmount,
            item: state.cart[action.itemId].item,
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
      return { cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
