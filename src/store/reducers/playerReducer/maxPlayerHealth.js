import { CREATE_PLAYER, INCREASE_PLAYER_HEALTH } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 100;
    case INCREASE_PLAYER_HEALTH:
      return payload + state;
    default:
      return state;
  }
};
