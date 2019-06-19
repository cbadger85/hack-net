import React from 'react';
import { connect } from 'react-redux';

import Console from './Console/';
import * as actions from '../store/actions';
import Timer from './Timer';

const MainConsole = ({
  terminalOutput,
  addToTerminalDisplay,
  addToTerminalHistory,
  isTerminalActive,
  setTerminalInactive,
  setTerminalActive,
}) => {
  const handleRunCommand = input => {
    addToTerminalDisplay({ output: `> ${input}` });
    addToTerminalHistory(input);

    const [command, ...args] = input.split(' ');

    switch (command.toLowerCase()) {
      case 'echo':
        addToTerminalDisplay({
          output: args.join(' '),
          color: '#4286f4',
        });
        break;
      default:
        addToTerminalDisplay({
          output: 'invalid command',
          color: '#ff5151',
        });
        break;
    }

    // console command logic goes here
    // addToTerminalHistory({
    //   output: <Timer initialTime={5} setTerminalActive={setTerminalActive} />,
    //   color: '#ff5151',
    // });

    // setTerminalInactive();
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
