import { CREATE_ENEMY } from '../../actions';

export default (state = 'easy', { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return payload.difficulty;
    default:
      return state;
  }
};
