import React from 'react';

const ConsoleOutput = ({ terminalOutput }) => {
  const showTerminalOutput = terminalOutput.map(terminalLine => (
    <div key={terminalLine.id} style={{ color: terminalLine.color }}>
      {terminalLine.output}
    </div>
  ));

  return (
    <div style={{ marginTop: '.5em', marginBottom: '.5em' }}>
      {showTerminalOutput}
    </div>
  );
};

export default ConsoleOutput;
