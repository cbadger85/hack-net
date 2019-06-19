import nanoid from 'nanoid';

export const ADD_TO_TERMINAL_HISTORY = 'ADD_TO_TERMINAL_HISTORY';
export const addToTerminalHistory = ({ input, color = '#9d9d9d' }) => {
  return {
    type: ADD_TO_TERMINAL_HISTORY,
    payload: {
      id: nanoid(),
      color,
      output: `> ${input}`,
    },
  };
};
