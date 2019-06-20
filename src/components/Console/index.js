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
  padding: 0.4em;
  margin: auto;
  height: 100%;
  width: 100%;
  cursor: text;
`;

const ConsoleContainer = ({ terminalOutput, runCommand, disableInput }) => {
  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    !disableInput && consoleInput.focus();
  };

  return (
    <ConsoleWrapper onClick={handleFocus}>
      <ConsoleOutput terminalOutput={terminalOutput} />
      {!disableInput && <ConsoleInput runCommand={runCommand} />}
      <ConsoleBottom />
    </ConsoleWrapper>
  );
};

export default ConsoleContainer;
