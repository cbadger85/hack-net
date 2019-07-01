import { CREATE_ENEMY, RESET } from '../../actions';

const initialState = [];

export default (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY:
      return [...payload.programs];
    case RESET:
      return initialState;
    default:
      return state;
  }
};
