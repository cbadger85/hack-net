import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ConsoleOutput from './ConsoleOutput';
import ConsoleInput from './ConsoleInput';

const ConsoleWrapper = styled.div`
   {
    width: 100%;
    height: 200px;
    background: #171e1d;
    overflow: scroll;
    color: #9d9d9d;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 1.3em;
    cursor: text;
  }
`;

const ConsoleContainer = ({ terminal, addToTerminalHistory }) => {
  const consoleComponent = useRef(null);

  useEffect(() => {
    const { scrollHeight } = consoleComponent.current;

    consoleComponent.current.scrollTo(0, scrollHeight);

    consoleComponent.current.scrollIntoView({
      block: 'end',
    });
  });

  const handleFocus = () => {
    const consoleInput = document.getElementById('console-input');
    consoleInput.focus();
  };

  return (
    <ConsoleWrapper ref={consoleComponent} onClick={handleFocus}>
      <ConsoleOutput terminal={terminal} />
      <ConsoleInput addToTerminalHistory={addToTerminalHistory} />
    </ConsoleWrapper>
  );
};

export default ConsoleContainer;
