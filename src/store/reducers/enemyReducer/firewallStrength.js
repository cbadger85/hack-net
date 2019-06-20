import { DAMAGE_FIREWALL } from '../../actions';

export default (state = 100, { type, payload }) => {
  switch (type) {
    case DAMAGE_FIREWALL:
      return (state = payload.damage);
    default:
      return state;
  }
};
