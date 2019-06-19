import React from 'react';
import { connect } from 'react-redux';

import Console from './Console/';
import * as actions from '../store/actions';
import Timer from './Timer';

const MainConsole = ({
  terminalOutput,
  addToTerminalDisplay,
  clearTerminalDisplay,
  addToTerminalHistory,
  isTerminalActive,
  setTerminalInactive,
  setTerminalActive,
}) => {
  const handleRunCommand = input => {
    addToTerminalDisplay({ output: `> ${input}` });
    input.trim() && addToTerminalHistory(input);

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'echo':
        addToTerminalDisplay({
          output: args.join(' '),
          color: '#4286f4',
        });
        break;
      case 'timer':
        setTerminalInactive();
        addToTerminalDisplay({
          output: (
            <Timer
              initialTime={args[0]}
              setTerminalActive={setTerminalActive}
            />
          ),
        });
        break;
      case 'clear':
        clearTerminalDisplay();
        break;
      default:
        addToTerminalDisplay({
          output: 'invalid command',
          color: '#ff5151',
        });
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

const mapStateToProps = ({
  terminal: { terminalOutput, isTerminalActive },
}) => {
  return {
    terminalOutput,
    isTerminalActive,
  };
};

export default connect(
  mapStateToProps,
  actions
)(MainConsole);
