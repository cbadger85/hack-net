import { CREATE_PLAYER } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 5000;
    default:
      return state;
  }
};
