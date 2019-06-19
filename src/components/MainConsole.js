import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Console from './Console/';
import { addToTerminalHistory } from '../store/actions';

export const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) setTime(time => time - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return <div>{time}</div>;
};

const MainConsole = ({ terminal, addToTerminalHistory }) => {
  const handleRunCommand = command => {
    addToTerminalHistory({ output: `> ${command}` });

    // console command logic goes here
    addToTerminalHistory({
      output: <Timer initialTime={5} />,
      color: '#ff5151',
    });
  };

  return (
    <>
      <Console terminal={terminal} runCommand={handleRunCommand} />
    </>
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
)(MainConsole);
