import nanoid from 'nanoid';

import {
  ADD_TO_TERMINAL_DISPLAY,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
} from '../../actions';

const initialState = [
  {
    output: 'Running...',
    id: nanoid,
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_DISPLAY:
      return [...state, payload];
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return initialState;
    default:
      return state;
  }
};
