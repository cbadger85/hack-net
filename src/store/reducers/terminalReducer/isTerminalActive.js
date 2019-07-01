import {
  SET_TERMINAL_ACTIVE,
  SET_TERMINAL_INACTIVE,
  RESET,
} from '../../actions';

const initialState = true;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TERMINAL_ACTIVE:
      return true;
    case SET_TERMINAL_INACTIVE:
      return false;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
