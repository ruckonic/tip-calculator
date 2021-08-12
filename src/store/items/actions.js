export const ADD_ITEM = 'ITEMS/ADD';
export const REMOVE_ITEM = 'ITEMS/REMOVE';
export const UPDATE_ITEM_PRICE = 'ITEMS/UPDATE_PRICE';
export const UPDATE_ITEM_QUANTITY = 'ITEMS/UPDATE_QUANTITY';

export const addItem = (name, price) => ({
  type: ADD_ITEM,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: REMOVE_ITEM,
  payload: { uuid }
});

export const updatePrice = (uuid, price) => ({
  type: UPDATE_ITEM_PRICE,
  payload: { uuid, price }
});

export const updateQuantity = (uuid, quantity) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: { uuid, quantity }
});
