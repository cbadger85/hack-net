import React from 'react';
import { connect } from 'react-redux';

import Console from './Console/';
import { addToTerminalHistory } from '../store/actions';

const MainConsole = ({ terminal, addToTerminalHistory }) => {
  const handleRunCommand = command => {
    addToTerminalHistory({ output: `> ${command}` });

    // console command logic goes here
    addToTerminalHistory({ output: 'invalid command', color: '#ff5151' });
  };

  return <Console terminal={terminal} runCommand={handleRunCommand} />;
};

const mapStateToProps = ({ terminal }) => {
  return {
    terminal,
  };
};

const mapDispatchToProps = dispatch => ({
  addToTerminalHistory: payload => dispatch(addToTerminalHistory(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainConsole);
