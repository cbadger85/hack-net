import React from 'react';
import styled from 'styled-components';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';
import ConsoleBottom from './ConsoleBottom';

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
  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    !disableInput && consoleInput.focus();
  };

  return (
    <ConsoleWrapper runMode onClick={handleFocus}>
      <ConsoleOutput terminalOutput={terminalOutput} runMode={runMode} />
      {!disableInput && (
        <ConsoleInput runCommand={runCommand} runMode={runMode} />
      )}
      <ConsoleBottom />
    </ConsoleWrapper>
  );
};

export default ConsoleContainer;
