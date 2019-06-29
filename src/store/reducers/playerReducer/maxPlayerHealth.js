import { CREATE_PLAYER, PURCHASE_ITEMS } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 100;
    case PURCHASE_ITEMS:
      return payload.firewallBuff + state;
    default:
      return state;
  }
};
