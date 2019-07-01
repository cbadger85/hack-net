import { ADD_TO_TERMINAL_HISTORY, RESET } from '../../actions';

const iniitialState = [];

export default (state = iniitialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_HISTORY:
      return [...state, payload];
    case RESET:
      return iniitialState;
    default:
      return state;
  }
};
