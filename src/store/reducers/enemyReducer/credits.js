import { CREATE_ENEMY, RESET } from '../../actions';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return payload.credits;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
