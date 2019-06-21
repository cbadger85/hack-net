import nanoid from 'nanoid';

import {
  ADD_TO_TERMINAL_DISPLAY,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
} from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_DISPLAY:
      return [...state, payload];
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return [];
    default:
      return state;
  }
};
