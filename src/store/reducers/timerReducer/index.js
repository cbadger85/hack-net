import { TICK } from '../../actions';

export default (state = 59, { type, payload }) => {
  switch (type) {
    case TICK:
      return state - 1;
    default:
      return state;
  }
};
