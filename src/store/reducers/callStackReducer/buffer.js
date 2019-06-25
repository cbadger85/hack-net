import {
  ADD_TO_CALL_STACK,
  REMOVE_PROGRAM_FROM_CALL_STACK,
} from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case ADD_TO_CALL_STACK:
      return state + payload.memRequired;
    case REMOVE_PROGRAM_FROM_CALL_STACK:
      return state - payload.memRequired;
    default:
      return state;
  }
};
