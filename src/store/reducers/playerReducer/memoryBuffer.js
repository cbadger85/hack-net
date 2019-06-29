import { CREATE_PLAYER, PURCHASE_ITEMS } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 64;
    case PURCHASE_ITEMS:
      return state + payload.memoryBuff;
    default:
      return state;
  }
};
