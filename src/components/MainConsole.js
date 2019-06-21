import React from 'react';
import { connect } from 'react-redux';

import Console from './Console/';
import * as actions from '../store/actions';

import * as commands from '../utils/commands';

const MainConsole = ({
  terminalOutput,
  addToTerminalDisplay,
  addToTerminalHistory,
  isTerminalActive,
  setTerminalActive,
}) => {
  const handleRunCommand = input => {
    addToTerminalDisplay({ output: `> ${input}` });
    input.trim() && addToTerminalHistory(input);

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'echo':
        commands.echo(args);
        break;
      case 'timer':
        commands.timer(args, { setTerminalActive });
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

const mapStateToProps = ({ terminal, player }) => {
  return {
    terminalOutput: terminal.terminalOutput,
    isTerminalActive: terminal.isTerminalActive,
    playerName: player.name,
  };
};

export default connect(
  mapStateToProps,
  actions
)(MainConsole);
