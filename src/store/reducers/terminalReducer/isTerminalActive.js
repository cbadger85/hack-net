import { SET_TERMINAL_ACTIVE, SET_TERMINAL_INACTIVE } from '../../actions';

export default (state = true, { type, payload }) => {
  switch (type) {
    case SET_TERMINAL_ACTIVE:
      return true;
    case SET_TERMINAL_INACTIVE:
      return false;
    default:
      return state;
  }
};
