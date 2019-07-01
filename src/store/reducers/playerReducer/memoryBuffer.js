import { PURCHASE_ITEMS, RESET } from '../../actions';

const initialState = 64;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PURCHASE_ITEMS:
      return state + payload.memoryBuff;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
