import { ADD_TO_TERMINAL_HISTORY } from '../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_HISTORY:
      return [...state, payload];
    default:
      return state;
  }
};
