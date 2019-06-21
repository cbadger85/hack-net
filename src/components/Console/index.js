import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

const ConsoleWrapper = styled.div`
  overflow: scroll;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.3em;
  margin: auto;
  height: 100%;
  width: 100%;
  cursor: text;
`;

const ConsoleContainer = ({
  terminalOutput,
  runCommand,
  disableInput,
  runMode,
}) => {
  const consoleScroll = useRef();

  useEffect(() => {
    consoleScroll.current.scrollTop = consoleScroll.current.scrollHeight;
  });

  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    !disableInput && consoleInput.focus();
  };

  return (
    <ConsoleWrapper runMode onClick={handleFocus} ref={consoleScroll}>
      <ConsoleOutput terminalOutput={terminalOutput} runMode={runMode} />
      {!disableInput && (
        <ConsoleInput runCommand={runCommand} runMode={runMode} />
      )}
    </ConsoleWrapper>
  );
};

export default ConsoleContainer;
