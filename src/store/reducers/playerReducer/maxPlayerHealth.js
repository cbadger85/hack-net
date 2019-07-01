import { CREATE_PLAYER, PURCHASE_ITEMS, RESET } from '../../actions';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 100;
    case PURCHASE_ITEMS:
      return payload.firewallBuff + state;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
