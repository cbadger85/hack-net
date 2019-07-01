import { CREATE_PLAYER, RESET } from '../../actions';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return payload.name;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
