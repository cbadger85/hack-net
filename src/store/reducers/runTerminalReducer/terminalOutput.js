import {
  ADD_TO_RUN_TERMINAL_DISPLAY,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
  RESET,
} from '../../actions';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_RUN_TERMINAL_DISPLAY:
      return [...state, payload];
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return [];
    case RESET:
      return initialState;
    default:
      return state;
  }
};
