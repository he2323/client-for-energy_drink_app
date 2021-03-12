import {
  Item,
  ADD_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  ItemActionTypes,
} from "./types";

export const setItems = (newItems: Item[]): ItemActionTypes => {
  return { type: SET_ITEMS, payload: newItems };
};
export const addItem = (newItem: Item, timestamp?: number): ItemActionTypes => {
  return { type: ADD_ITEM, payload: newItem, timestamp: timestamp };
};
export const deleteItem = (timestamp: number, idToRemove: number): ItemActionTypes => {
  return { type: DELETE_ITEM, timestamp: timestamp, idToRemove: idToRemove };
};
