import { TICK, SWITCH_SCREEN_TO_RUN_CONSOLE } from '../../actions';

export default (state = 59, { type, payload }) => {
  switch (type) {
    case TICK:
      return state - 1;
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return 59;
    default:
      return state;
  }
};
