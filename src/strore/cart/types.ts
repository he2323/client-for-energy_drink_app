import { Item } from "../items/types";
export interface CartItem {
  id: number;
  item: Item;
  amount: number;
}
export interface CartState {
  cart: CartItem[];
}
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const MODIFY_AMOUNT = "MODIFY_AMOUNT";
interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: CartItem;
}
interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  idToRemove: number;
}
interface ModifyAmountAction {
  type: typeof MODIFY_AMOUNT;
  newAmount: number;
  itemId: number;
}
export type CartActionTypes =
  | AddItemAction
  | DeleteItemAction
  | ModifyAmountAction;
