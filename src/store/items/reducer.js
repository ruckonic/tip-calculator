import { produce } from 'immer';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_PRICE,
  UPDATE_ITEM_QUANTITY
} from './actions';
let id = 1;

export const initialItems = [];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ADD_ITEM) {
    state.push({ uuid: id++, quantity: 1, ...action.payload });
  }

  if (action.type === REMOVE_ITEM) {
    const idx = state.findIndex((item) => item.uuid === action.payload.uuid);
    if (idx !== -1) state.splice(idx, 1);
  }

  if (action.type === UPDATE_ITEM_PRICE) {
    const idx = state.findIndex((item) => item.uuid === action.payload.uuid);
    if (idx !== -1) state[idx].price = action.payload.price;
  }

  if (action.type === UPDATE_ITEM_QUANTITY) {
    const idx = state.findIndex((item) => item.uuid === action.payload.uuid);
    if (idx !== -1) state[idx].quantity = action.payload.quantity;
  }
}, initialItems);

export default reducer;
