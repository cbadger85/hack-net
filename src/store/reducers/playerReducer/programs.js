import { CREATE_PLAYER } from '../../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_PLAYER:
      // return state;
      return payload.programs;
    default:
      return state;
  }
};
