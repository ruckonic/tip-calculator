import { connect } from 'react-redux';
import { addItem } from '../store/items/actions';
import { MenuItems } from '../components/MenuItems';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({ addItem }, dispatch);

  return actions;
};

export const MenuItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItems);
