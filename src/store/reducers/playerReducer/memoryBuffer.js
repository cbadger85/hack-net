import { PURCHASE_ITEMS } from '../../actions';

export default (state = 64, { type, payload }) => {
  switch (type) {
    case PURCHASE_ITEMS:
      return state + payload.memoryBuff;
    default:
      return state;
  }
};
