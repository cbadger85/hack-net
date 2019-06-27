import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Console from '../Console';
import {
  addToRunTerminalDisplay,
  addToRunTerminalHistory,
} from '../../store/actions';
import * as runCommands from '../../utils/runCommands';

const RunConsole = () => {
  const terminalOutput = useSelector(state => state.runTerminal.terminalOutput);

  const dispatch = useDispatch();

  const handleRunCommand = input => {
    dispatch(addToRunTerminalDisplay({ output: `> ${input}` }));
    input.trim() && dispatch(addToRunTerminalHistory(input));

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'main':
        runCommands.main();
        break;
      case 'exec':
        runCommands.execCounterIce(args);
        break;
      default:
        runCommands.error();
        break;
    }
  };

  return (
    <Console
      terminalOutput={terminalOutput}
      runCommand={handleRunCommand}
      runMode
    />
  );
};

export default RunConsole;
