import {
  ADD_TO_RUN_TERMINAL_HISTORY,
  SWITCH_SCREEN_TO_MAIN_CONSOLE,
} from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_RUN_TERMINAL_HISTORY:
      return [...state, payload];
    case SWITCH_SCREEN_TO_MAIN_CONSOLE:
      return [];
    default:
      return state;
  }
};
