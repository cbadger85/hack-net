import {
  ADD_TO_CALL_STACK,
  REMOVE_PROGRAM_FROM_CALL_STACK,
  CLEAR_CALL_STACK,
  RESET,
} from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CALL_STACK:
      return [...state, payload];
    case REMOVE_PROGRAM_FROM_CALL_STACK:
      return state.filter(state => state.id !== payload.id);
    case CLEAR_CALL_STACK:
      return [];
    case RESET:
      return [];
    default:
      return state;
  }
};
