import React from 'react';
import styled from 'styled-components';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

const ConsoleWrapper = styled.div`
   {
    width: 95%;
    height: 200px;
    background: #171e1d;
    overflow: scroll;
    color: #9d9d9d;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 1.3em;
    padding: 0.4em;
    margin: auto;
    cursor: text;
  }
`;

const ConsoleContainer = ({ terminal, runCommand, disableInput }) => {
  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    !disableInput && consoleInput.focus();
  };

  return (
    <ConsoleWrapper onClick={handleFocus}>
      <ConsoleOutput terminal={terminal} />
      {!disableInput && <ConsoleInput runCommand={runCommand} />}
    </ConsoleWrapper>
  );
};

export default ConsoleContainer;
