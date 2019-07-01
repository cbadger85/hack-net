import { DAMAGE_ENEMY_FIREWALL, CREATE_ENEMY, RESET } from '../../actions';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY: {
      return payload.firewallStrength;
    }
    case DAMAGE_ENEMY_FIREWALL:
      return state - payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
