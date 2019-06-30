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
  const terminalHistory = useSelector(state => state.runTerminal.history);

  const dispatch = useDispatch();

  const handleRunCommand = input => {
    input.trim() && dispatch(addToRunTerminalDisplay({ output: `> ${input}` }));
    input.trim() && dispatch(addToRunTerminalHistory(input));

    runCommands.execCounterIce(input);
  };

  return (
    <Console
      terminalOutput={terminalOutput}
      terminalHistory={terminalHistory}
      runCommand={handleRunCommand}
      runMode
    />
  );
};

export default RunConsole;
