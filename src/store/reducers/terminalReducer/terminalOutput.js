import React from 'react';
import nanoid from 'nanoid';

import Intro from '../../../components/Intro';

import { ADD_TO_TERMINAL_DISPLAY, CLEAR_TERMINAL_DISPLAY } from '../../actions';

const initialState = [
  {
    output: <Intro />,
    color: '#9d9d9d',
    id: nanoid,
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_DISPLAY:
      return [...state, payload];
    case CLEAR_TERMINAL_DISPLAY:
      return [];
    default:
      return state;
  }
};
