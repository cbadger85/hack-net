import React from 'react';
import { connect } from 'react-redux';

import Console from './Console';
import * as actions from '../store/actions';
import colors from '../utils/colors';

const RunConsole = ({
  terminalOutput,
  addToRunTerminalDisplay,
  addToTerminalDisplay,
  addToRunTerminalHistory,
  switchScreenToMainConsole,
}) => {
  const handleRunCommand = input => {
    addToRunTerminalDisplay({ output: input });
    input.trim() && addToRunTerminalHistory(input);

    // switch to ctrl+c
    if (input === 'main') {
      switchScreenToMainConsole();
      addToTerminalDisplay({
        output: 'connection lost...',
        color: colors.red,
      });
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
