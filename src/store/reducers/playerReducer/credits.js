import {
  CREATE_PLAYER,
  PURCHASE_ITEMS,
  ADD_TO_PLAYER_CREDITS,
  RESET,
} from '../../actions';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 5000;
    case ADD_TO_PLAYER_CREDITS:
      return state + payload;
    case PURCHASE_ITEMS:
      return state - payload.cost;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
