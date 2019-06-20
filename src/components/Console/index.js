import React from 'react';
import styled from 'styled-components';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';
import ConsoleBottom from './ConsoleBottom';
import colors from '../../utils/colors';

const ConsoleWrapper = styled.div`
  width: 95%;
  height: 30rem;
  background: ${colors.darkPurple};
  overflow: scroll;
  color: ${colors.blue};
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.3em;
  padding: 0.4em;
  margin: auto;
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
