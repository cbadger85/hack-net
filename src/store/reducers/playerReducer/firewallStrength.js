import {
  DAMAGE_PLAYER_FIREWALL,
  SWITCH_SCREEN_TO_RUN_CONSOLE,
} from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case SWITCH_SCREEN_TO_RUN_CONSOLE:
      return payload;
    case DAMAGE_PLAYER_FIREWALL:
      return state - payload;
    default:
      return state;
  }
};
