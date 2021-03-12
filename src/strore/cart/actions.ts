import {
  ADD_ITEM,
  DELETE_ITEM,
  MODIFY_AMOUNT,
  CartActionTypes,
  CartItem,
} from "./types";

export const addItem = (newItem: CartItem): CartActionTypes => {
  return { type: ADD_ITEM, payload: newItem };
};
export const deleteItem = (idToRemove: number): CartActionTypes => {
  return { type: DELETE_ITEM, idToRemove: idToRemove };
};
export const modifyAmount = (
  itemId: number,
  newAmount: number
): CartActionTypes => {
  return { type: MODIFY_AMOUNT, itemId: itemId, newAmount: newAmount };
};
