import { PURCHASE_ITEMS } from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case PURCHASE_ITEMS:
      return [...state, ...payload.programs];
    default:
      return state;
  }
};
