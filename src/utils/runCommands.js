import React from 'react';
import nanoid from 'nanoid';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import TimeToExecuteCountdown from '../components/RunScreen/TimeToExecuteCountdown';
import programs from '../data/playerPrograms';

const printScreen = (output, color = colors.blue) => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output,
      color,
    })
  );
};

const runProgram = program => {
  const { buffer } = store.getState().callStack;

  if (buffer - program.memRequired < 0) {
    printScreen(`not enough memory for ${program.name}`, colors.red);
    return;
  }

  printScreen(`executing ${program.name}...`, colors.yellow);
  const id = nanoid();
  store.dispatch(
    actions.addToCallStack({
      id,
      component: <TimeToExecuteCountdown program={program} id={id} key={id} />,
      memRequired: program.memRequired,
    })
  );
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

export const execCounterIce = input => {
  if (!input) {
    return;
  }

  const program = programs.find(program => program.name === input);
  if (!program) {
    printScreen(`${input}: command not found`, colors.red);
    return;
  }

  const playerPrograms = store.getState().player.programs;
  console.log(playerPrograms);
  const playerHasProgram = playerPrograms.includes(program.name);
  if (!playerHasProgram) {
    printScreen(`${input}: command not found`, colors.red);
    return;
  }

  runProgram(program);
};
