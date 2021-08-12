import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewItemForm from '../components/NewItemForm';
import { addItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = bindActionCreators(
    {
      onSubmit: (name, price) => addItem(name, price)
    },
    dispatch
  );

  return actions;
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
