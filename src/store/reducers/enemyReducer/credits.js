import { CREATE_ENEMY } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return payload.credits;
    default:
      return state;
  }
};
