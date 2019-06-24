import { ADD_TO_CALL_STACK } from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CALL_STACK:
      return [...state, payload];
    default:
      return state;
  }
};
