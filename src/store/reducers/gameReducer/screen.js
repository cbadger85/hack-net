import {
  SWITCH_SCREEN_TO_MAIN_CONSOLE,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
} from '../../actions';

export default (state = 'main', { type, payload }) => {
  switch (type) {
    case SWITCH_SCREEN_TO_MAIN_CONSOLE:
      return 'main';
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return 'run';
    default:
      return state;
  }
};
