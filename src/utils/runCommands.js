import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';

const printScreen = (output, color = colors.blue) => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output,
      color,
    })
  );
};

const runProgram = (programName, component) => {
  printScreen(`executing ${programName}...`, colors.yellow);
  store.dispatch(actions.addToCallStack(component));
};

export const error = args => {
  printScreen('invalid command', colors.red);
};

export const main = args => {
  store.dispatch(actions.switchScreenToMainConsole());
  store.dispatch(
    actions.addToTerminalDisplay({
      output: 'connection lost...',
      color: colors.red,
    })
  );
};

export const execCounterIce = args => {
  if (args.length !== 1) {
    printScreen('invalid argument(s)', colors.red);
    return;
  }

  const [programName] = args;

  switch (programName) {
    case 'ice-ice-baby':
      runProgram(programName, <div />);
      break;
    default:
      printScreen(`${programName} program missing...`, colors.red);
      break;
  }
};
