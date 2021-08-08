import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state, ownProps) => {
  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tipAmount = subtotal * (state.tipPercentage / 100);
  return {
    total: subtotal + tipAmount,
    tipAmount,
    subtotal
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
