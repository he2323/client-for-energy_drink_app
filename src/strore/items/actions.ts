import {
  Item,
  ADD_ITEM,
  DELETE_ITEM,
  SET_ITEMS,
  ADD_RATING,
  ItemActionTypes,
} from "./types";

export const setItems = (newItems: Item[]): ItemActionTypes => {
  return { type: SET_ITEMS, payload: newItems };
};
export const addItem = (newItem: Item, timestamp?: number): ItemActionTypes => {
  return { type: ADD_ITEM, payload: newItem, timestamp: timestamp };
};
export const deleteItem = (
  timestamp: number,
  idToRemove: number
): ItemActionTypes => {
  return { type: DELETE_ITEM, timestamp: timestamp, idToRemove: idToRemove };
};
export const addRating = (
  rating: number,
  idOfItemToAddRating: number
): ItemActionTypes => {
  console.log(`rating : ${rating}, id: ${idOfItemToAddRating}`);
  return {
    type: ADD_RATING,
    rating: rating,
    idOfItemToAddRating: idOfItemToAddRating,
  };
};
