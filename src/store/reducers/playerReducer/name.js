import {CREATE_PLAYER} from '../../actions';

export default (state = '', { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      return payload.name;
    default:
      return state;
  }
};
