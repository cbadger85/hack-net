import React from 'react';
import { connect } from 'react-redux';

import Console from './Console';
import * as actions from '../store/actions';

const RunConsole = ({
  terminalOutput,
  addToTerminalDisplay,
  addToRunTerminalHistory,
  switchScreenToMainConsole,
}) => {
  const handleRunCommand = input => {
    addToTerminalDisplay({ output: input });
    input.trim() && addToRunTerminalHistory(input);

    if (input === 'main') {
      switchScreenToMainConsole();
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

const mapStateToProps = ({ runTerminal }) => ({
  terminalOutput: runTerminal.terminalOutput,
});

export default connect(
  mapStateToProps,
  actions
)(RunConsole);
