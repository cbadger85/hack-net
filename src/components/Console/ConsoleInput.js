import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

const InputContainer = styled.div`
  display: flex;
  padding-left: 0.4em;
  ${props =>
    props.runMode &&
    css`
      border-top: 2px solid ${colors.blue};
      padding-top: 0.5em;
      padding-bottom: 0em;
    `}
`;

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  background-color: inherit;
  color: inherit;
  margin: 0em 0.5em 0 0.5em;
  font-family: inherit;
  font-size: inherit;
  height: ${props => props.height};
  resize: none;
  padding-bottom: 0.5em;

  &:focus {
    outline: none;
  }
`;

const ConsoleInput = ({ runCommand, runMode, terminalHistory }) => {
  const [input, setInput] = useState('');
  const [inputHeight, setInputHeight] = useState('auto');
  const [historyIndex, setHistoryIndex] = useState(0);
  const consoleInput = useRef();
  let timeout;

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleKeyDown = e => {
    if (e.which === 13) {
      e.preventDefault();
      runCommand(input.trim());
      setInput('');
      setHistoryIndex(0);
    }

    const reversedTerminalHistory = terminalHistory.reduce(
      (acc, command) => [command, ...acc],
      []
    );

    if (e.keyCode === 38) {
      e.preventDefault();
      if (terminalHistory.length > 0 && reversedTerminalHistory[historyIndex]) {
        setInput(reversedTerminalHistory[historyIndex]);
        historyIndex >= 0 && setHistoryIndex(historyIndex + 1);
      }
    }

    if (e.keyCode === 40) {
      setHistoryIndex(historyIndex - 1 >= 0 ? historyIndex - 1 : historyIndex);
      setInput(
        reversedTerminalHistory[historyIndex - 2]
          ? reversedTerminalHistory[historyIndex - 2]
          : ''
      );
    }

    timeout = setTimeout(() => {
      setInputHeight('auto');

      const scrollHeight = consoleInput.current
        ? consoleInput.current.scrollHeight
        : 0;
      setInputHeight(`${scrollHeight}px`);
    }, 0);
  };

  const handleOnChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <InputContainer runMode={runMode}>
        <label>> </label>
        <Textarea
          value={input}
          onChange={handleOnChange}
          id="console-input"
          autoFocus
          autoComplete="off"
          rows="1"
          ref={consoleInput}
          onKeyDown={handleKeyDown}
          height={inputHeight}
        />
      </InputContainer>
    </>
  );
};

export default ConsoleInput;
