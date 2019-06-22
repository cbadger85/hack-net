import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Console from './Console/';
import {
  addToTerminalHistory,
  addToTerminalDisplay,
  setTerminalActive,
} from '../store/actions';

import * as commands from '../utils/commands';

const MainConsole = () => {
  const terminalOutput = useSelector(state => state.terminal.terminalOutput);
  const isTerminalActive = useSelector(
    state => state.terminal.isTerminalActive
  );

  const dispatch = useDispatch();

  const handleRunCommand = input => {
    dispatch(addToTerminalDisplay({ output: `> ${input}` }));
    input.trim() && dispatch(addToTerminalHistory(input));

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'echo':
        commands.echo(args);
        break;
      case 'timer':
        commands.timer(args, {
          setTerminalActive: () => dispatch(setTerminalActive()),
        });
        break;
      case 'create-runner':
        commands.createRunner(args);
        break;
      case 'display-runner':
        commands.displayRunner(args);
        break;
      case 'clear':
        commands.clearTerminal();
        break;
      case 'connect':
        commands.executeRun(args);
        break;
      default:
        commands.error();
        break;
    }
  };

  return (
    <Console
      terminalOutput={terminalOutput}
      runCommand={handleRunCommand}
      disableInput={!isTerminalActive}
    />
  );
};

export default MainConsole;
