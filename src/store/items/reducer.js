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
    return [
      ...state,
      {
        uuid: id++,
        quantity: 1,
        ...action.payload
      }
    ];
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === UPDATE_ITEM_PRICE) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          price: action.payload.price
        };
      }

      return item;
    });
  }

  if (action.type === UPDATE_ITEM_QUANTITY) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return {
          ...item,
          quantity: action.payload.quantity
        };
      }

      return item;
    });
  }

  return state;
};

export default reducer;
