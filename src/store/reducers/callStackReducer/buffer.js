import {
  ADD_TO_CALL_STACK,
  REMOVE_PROGRAM_FROM_CALL_STACK,
  SET_BUFFER_AMOUNT,
  RESET,
} from '../../actions';

const initialState = 64;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BUFFER_AMOUNT:
      return payload;
    case ADD_TO_CALL_STACK:
      return state - payload.memRequired;
    case REMOVE_PROGRAM_FROM_CALL_STACK:
      return state + payload.memRequired;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
