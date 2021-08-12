export const TIP_PERCENTAGE_UPDATED = 'TIP_PERCENTAGE/UPDATE';

export const updateTip = (tipPercentage) => ({
  type: TIP_PERCENTAGE_UPDATED,
  payload: parseInt(tipPercentage, 10)
});
