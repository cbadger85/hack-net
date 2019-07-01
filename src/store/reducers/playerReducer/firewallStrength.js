import {
  DAMAGE_PLAYER_FIREWALL,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
  RESET,
} from '../../actions';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return payload;
    case DAMAGE_PLAYER_FIREWALL:
      return state - payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
