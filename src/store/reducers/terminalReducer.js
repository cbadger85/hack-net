import nanoid from 'nanoid';

import { ADD_TO_TERMINAL_HISTORY } from '../actions';

const initialState = [
  {
    output: 'Welcome to the Terminal',
    color: '#9d9d9d',
    id: nanoid,
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_HISTORY:
      return [...state, payload];
    default:
      return state;
  }
};
