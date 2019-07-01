import { CREATE_ENEMY, RESET } from '../../actions';

const initialState = 'easy';

export default (state = 'easy', { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return payload.difficulty;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
