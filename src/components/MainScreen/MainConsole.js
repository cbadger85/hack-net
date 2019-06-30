import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Console from '../Console';
import {
  addToTerminalHistory,
  addToTerminalDisplay,
} from '../../store/actions';

import * as commands from '../../utils/commands';

const MainConsole = () => {
  const terminalOutput = useSelector(state => state.terminal.terminalOutput);
  const terminalHistory = useSelector(state => state.terminal.history);
  const isTerminalActive = useSelector(
    state => state.terminal.isTerminalActive
  );

  const dispatch = useDispatch();

  const handleRunCommand = input => {
    dispatch(addToTerminalDisplay({ output: `> ${input}` }));

    if (!input.trim()) {
      return;
    }

    dispatch(addToTerminalHistory(input));

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'echo':
        commands.echo(args);
        break;
      case 'create-runner':
        commands.createRunner(args);
        break;
      case 'clear':
        commands.clearTerminal();
        break;
      case 'connect':
        commands.executeRun(args);
        break;
      case 'shop':
        commands.goShopping();
        break;
      case 'show':
        commands.show(args);
        break;
      default:
        commands.error(input);
        break;
    }
  };

  return (
    <Console
      terminalOutput={terminalOutput}
      runCommand={handleRunCommand}
      terminalHistory={terminalHistory}
      disableInput={!isTerminalActive}
    />
  );
};

export default MainConsole;
