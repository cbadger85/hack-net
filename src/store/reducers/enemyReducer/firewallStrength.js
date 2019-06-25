import { DAMAGE_ENEMY_FIREWALL, CREATE_ENEMY } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY: {
      return payload.firewallStrength;
    }
    case DAMAGE_ENEMY_FIREWALL:
      return state - payload;
    default:
      return state;
  }
};
