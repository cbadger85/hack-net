import nanoid from 'nanoid';

export const ADD_TO_TERMINAL_DISPLAY = 'ADD_TO_TERMINAL_DISPLAY';
export const addToTerminalDisplay = ({ output, color = '#9d9d9d' }) => ({
  type: ADD_TO_TERMINAL_DISPLAY,
  payload: {
    id: nanoid(),
    color,
    output,
  },
});

export const CLEAR_TERMINAL_DISPLAY = 'CLEAR_TERMINAL_DISPLAY';
export const clearTerminalDisplay = () => ({ type: CLEAR_TERMINAL_DISPLAY });

export const ADD_TO_TERMINAL_HISTORY = 'ADD_TO_TERMINAL_HISTORY';
export const addToTerminalHistory = command => ({
  type: ADD_TO_TERMINAL_HISTORY,
  payload: command,
});

export const SET_TERMINAL_ACTIVE = 'SET_TERMINAL_ACTIVE';
export const setTerminalActive = () => ({ type: SET_TERMINAL_ACTIVE });

export const SET_TERMINAL_INACTIVE = 'SET_TERMINAL_INACTIVE';
export const setTerminalInactive = () => ({ type: SET_TERMINAL_INACTIVE });
