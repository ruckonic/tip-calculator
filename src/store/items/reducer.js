import { produce } from 'immer';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM_PRICE,
  UPDATE_ITEM_QUANTITY
} from './actions';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ADD_ITEM) {
    return produce(state, (draft) => {
      draft.push({ uuid: id++, quantity: 1, ...action.payload });
    });
  }

  if (action.type === REMOVE_ITEM) {
    return produce(state, (draft) => {
      const idx = draft.findIndex((item) => item.uuid === action.payload.uuid);
      if (idx !== -1) draft.splice(idx, 1);
    });
  }

  if (action.type === UPDATE_ITEM_PRICE) {
    return produce(state, (draft) => {
      const idx = draft.findIndex((item) => item.uuid === action.payload.uuid);
      if (idx !== -1) draft[idx].price = action.payload.price;
    });
  }

  if (action.type === UPDATE_ITEM_QUANTITY) {
    return produce(state, (draft) => {
      const idx = draft.findIndex((item) => item.uuid === action.payload.uuid);
      if (idx !== -1) draft[idx].quantity = action.payload.quantity;
    });
  }

  return state;
};

export default reducer;
