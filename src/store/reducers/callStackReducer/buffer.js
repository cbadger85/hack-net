import {
  ADD_TO_CALL_STACK,
  REMOVE_PROGRAM_FROM_CALL_STACK,
  CLEAR_CALL_STACK,
  SET_BUFFER_AMOUNT,
} from '../../actions';

export default (state = 64, { type, payload }) => {
  switch (type) {
    case SET_BUFFER_AMOUNT:
      return payload;
    case ADD_TO_CALL_STACK:
      return state - payload.memRequired;
    case REMOVE_PROGRAM_FROM_CALL_STACK:
      return state + payload.memRequired;
    case CLEAR_CALL_STACK:
      return 64;
    default:
      return state;
  }
};
