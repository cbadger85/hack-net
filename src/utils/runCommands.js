import React from 'react';
import nanoid from 'nanoid';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import TimeToExecuteCountdown from '../components/TimeToExecuteCountdown';
import * as iceIceBaby from '../programs/iceIceBaby';

const printScreen = (output, color = colors.blue) => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output,
      color,
    })
  );
};

const runProgram = program => {
  printScreen(`executing ${program.name}...`, colors.yellow);
  const id = nanoid();
  store.dispatch(
    actions.addToCallStack(
      <TimeToExecuteCountdown program={program} tte={3} id={id} key={id} />
    )
  ); // <- should be TTECountdown component that takes a program, TTE, and a key as props
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
      runProgram(iceIceBaby);
      break;
    default:
      printScreen(`${programName} program missing...`, colors.red);
      break;
  }
};
