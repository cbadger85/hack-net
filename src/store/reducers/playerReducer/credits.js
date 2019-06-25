import { CREATE_PLAYER } from '../../actions';
import { ADD_TO_PLAYER_CREDITS } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return 5000;
    case ADD_TO_PLAYER_CREDITS:
      return state + payload;
    default:
      return state;
  }
};
