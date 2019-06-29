import React from 'react';
import nanoid from 'nanoid';

import Intro from '../../../components/MainScreen/Intro';

import {
  ADD_TO_TERMINAL_DISPLAY,
  CLEAR_TERMINAL_DISPLAY,
  SWITCH_SCREEN_TO_MAIN_CONSOLE,
} from '../../actions';

const initialState = [
  {
    output: <Intro />,
    id: nanoid,
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_TERMINAL_DISPLAY:
      return [...state, payload];
    case CLEAR_TERMINAL_DISPLAY:
      return [];
    case SWITCH_SCREEN_TO_MAIN_CONSOLE:
      return [];
    default:
      return state;
  }
};
