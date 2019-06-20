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
  createPlayer,
  playerName,
}) => {
  const handleRunCommand = input => {
    addToTerminalDisplay({ output: `> ${input}` });
    input.trim() && addToTerminalHistory(input);

    console.log(playerName, 'MainConsole component');

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
      case 'create-runner':
        // loook into thunks
        createPlayer(args[0]);
        addToTerminalDisplay({
          output: `Welcome ${args[0]}`,
          color: '#4286f4',
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
    <>
      <Console
        terminalOutput={terminalOutput}
        runCommand={handleRunCommand}
        disableInput={!isTerminalActive}
      />
      <button onClick={() => console.log(playerName)}>
        Click to show name
      </button>
    </>
  );
};

const mapStateToProps = ({ terminal, player }) => {
  console.log(player.name, 'mapStateToProps');
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

// terminal: { terminalOutput, isTerminalActive }
