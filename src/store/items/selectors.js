import { createSelector } from 'reselect';

export const getItems = (state) => state.items;
export const getTipPercentage = (state) => state.tipPercentage;

export const getSubtotal = createSelector([getItems], (items) =>
  items.reduce((acc, item) => item.price * item.quantity + acc, 0)
);

export const getTipAmount = createSelector(
  [getSubtotal, getTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const getTotal = createSelector(
  [getSubtotal, getTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
