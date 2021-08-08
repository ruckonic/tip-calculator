import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { getSubtotal, getTipAmount, getTotal } from '../store/items/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log('SummaryContainer', ownProps);
  const subtotal = getSubtotal(state);
  const tipAmount = getTipAmount(state);
  const total = getTotal(state);
  return {
    total,
    tipAmount,
    subtotal
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
