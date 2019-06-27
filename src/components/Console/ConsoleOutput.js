import React, { useEffect, useRef } from 'react';

import ConsoleBottom from './ConsoleBottom';

const ConsoleOutput = ({ terminalOutput, runMode }) => {
  const showTerminalOutput = terminalOutput.map(terminalLine => (
    <div key={terminalLine.id} style={{ color: terminalLine.color }}>
      {terminalLine.output}
    </div>
  ));

  const outputScroll = useRef();

  useEffect(() => {
    outputScroll.current.scrollTop = outputScroll.current.scrollHeight;
  });

  const runModeStyles = runMode
    ? {
        height: '598px',
      }
    : {};

  return (
    <div
      style={{
        marginTop: '.5em',
        marginBottom: '.5em',
        padding: '0.4em',
        paddingBottom: 0,
        overflowY: 'scroll',
        wordWrap: 'break-word',
        width: '100%',
        ...runModeStyles,
      }}
      ref={outputScroll}
    >
      {showTerminalOutput}
    </div>
  );
};

export default ConsoleOutput;
