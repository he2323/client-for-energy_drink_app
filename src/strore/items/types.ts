export interface Item {
  id: number;
  img: string;
  name: string;
  prize: number;
  description: string;
  rating: number[];
}
export interface ItemsState {
  items: Item[];
}
export const SET_ITEMS = "SET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";

interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: Item[];
}
interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  idToRemove: number;
  timestamp?: number;
}
interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
  timestamp?: number;
}
export type ItemActionTypes = SetItemsAction | DeleteItemAction | AddItemAction;
