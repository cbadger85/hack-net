import { CREATE_ENEMY, RESET } from '../../actions';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return payload.name;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
