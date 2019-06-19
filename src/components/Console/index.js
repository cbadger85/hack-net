import React from 'react';
import { connect } from 'react-redux';

import ConsoleContainer from './ConsoleContainer';
import { addToTerminalHistory } from '../../store/actions';

const Console = ({ terminal, addToTerminalHistory }) => {
  return (
    <ConsoleContainer
      terminal={terminal}
      addToTerminalHistory={addToTerminalHistory}
    />
  );
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
)(Console);
