import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

const mapStateToProps = (_, ownProps) => {
  return {
    total: ownProps.price * ownProps.quantity
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updatePrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity)
    },
    dispatch
  );

  return actions;
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
