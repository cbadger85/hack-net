import { CREATE_ENEMY } from '../../actions';

export default (state = '', { type, payload }) => {
  switch (type) {
    case CREATE_ENEMY: {
      return payload.name;
    }
    default:
      return state;
  }
};
