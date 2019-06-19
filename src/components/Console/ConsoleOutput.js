import React from 'react';

const ConsoleOutput = ({ terminal }) => {
  const showTerminalOutput = terminal.map(terminalLine => (
    <div key={terminalLine.id} style={{ color: terminalLine.color }}>
      {terminalLine.output}
    </div>
  ));

  return <div>{showTerminalOutput}</div>;
};

export default ConsoleOutput;
