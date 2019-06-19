import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
`;

const Textarea = styled.textarea`
  border: none;
  width: 100%;
  background-color: inherit;
  color: #9d9d9d;
  margin-left: 0.5em;
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
  const consoleForm = useRef();

  const handleKeyDown = e => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      runCommand(input.trim());
      setInput('');
    }

    setTimeout(() => {
      setInputHeight('auto');

      const { scrollHeight } = consoleInput.current;
      setInputHeight(`${scrollHeight}px`);
    }, 0);
  };

  const handleOnChange = e => {
    setInput(e.target.value);
  };

  return (
    <InputContainer ref={consoleForm}>
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
