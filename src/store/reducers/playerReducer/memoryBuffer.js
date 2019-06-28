import { ADD_TO_MEMORY_BUFFER, CREATE_PLAYER } from '../../actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return payload.memory;
    case ADD_TO_MEMORY_BUFFER:
      return state + payload;
    default:
      return state;
  }
};
