import { CREATE_PLAYER, DAMAGE_PLAYER_FIREWALL } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 100;
    case DAMAGE_PLAYER_FIREWALL:
      return state - payload;
    default:
      return state;
  }
};
