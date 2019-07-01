import {
  SWITCH_SCREEN_TO_MAIN_CONSOLE,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
  SWITCH_TO_STORE_SCREEN,
  SWITCH_TO_HELP_SCREEN,
  RESET,
} from '../../actions';

const initialState = 'main';

export default (state = 'main', { type, payload }) => {
  switch (type) {
    case SWITCH_SCREEN_TO_MAIN_CONSOLE:
      return 'main';
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return 'run';
    case SWITCH_TO_STORE_SCREEN:
      return 'store';
    case SWITCH_TO_HELP_SCREEN:
      return 'help';
    case RESET:
      return initialState;
    default:
      return state;
  }
};
