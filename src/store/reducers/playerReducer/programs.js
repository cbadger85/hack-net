import { PURCHASE_ITEMS, RESET } from '../../actions';

const initialState = [];

export default (state = [], { type, payload }) => {
  switch (type) {
    case PURCHASE_ITEMS:
      return [...state, ...payload.programs];
    case RESET:
      return initialState;
    default:
      return state;
  }
};
