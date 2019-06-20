import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
`;

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  background-color: inherit;
  color: #9d9d9d;
  margin: 0.5em;
  margin-top: 0;
  font-family: inherit;
  font-size: inherit;
  height: ${props => props.height}
  resize: none;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const ConsoleInput = ({ runCommand }) => {
  const [input, setInput] = useState('');
  const [inputHeight, setInputHeight] = useState('auto');
  const consoleInput = useRef();
  let timeout;

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleKeyDown = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      runCommand(input.trim());
      setInput('');
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
    <InputContainer>
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
  );
};

export default ConsoleInput;
