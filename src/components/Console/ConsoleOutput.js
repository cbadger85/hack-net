import React, { useRef, useEffect } from 'react';

const ConsoleOutput = ({ terminalOutput, runMode }) => {
  const consoleOutput = useRef();

  const showTerminalOutput = terminalOutput.map(terminalLine => (
    <div key={terminalLine.id} style={{ color: terminalLine.color }}>
      {terminalLine.output}
    </div>
  ));

  const runModeStyles = runMode
    ? {
        height: '598px',
      }
    : {};

  useEffect(() => {
    consoleOutput.current.scrollTop = consoleOutput.current.scrollHeight;
  });

  return (
    <div
      style={{
        marginTop: '.5em',
        marginBottom: '.5em',
        padding: '0.4em',
        paddingBottom: 0,
        overflowY: 'scroll',
        width: '100%',
        ...runModeStyles,
      }}
      ref={consoleOutput}
    >
      {showTerminalOutput}
    </div>
  );
};

export default ConsoleOutput;
