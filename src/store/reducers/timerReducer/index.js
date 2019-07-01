import { TICK, SWITCH_SCREEN_TO_RUN_CONSOLE, RESET } from '../../actions';

const initialState = 59;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TICK:
      return state - 1;
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return initialState;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
