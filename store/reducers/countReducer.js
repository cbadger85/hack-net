import { INCREMENT, DECREMENT } from '../actions';

const countReducer = (count = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return count + payload.value;
    case DECREMENT:
      return count - payload.value;
    default:
      return count;
  }
};

export default countReducer;
