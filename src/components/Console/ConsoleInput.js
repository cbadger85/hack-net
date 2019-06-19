import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.form`
  display: flex;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  background-color: inherit;
  color: #9d9d9d;
  margin-left: 0.5em;
  font-family: inherit;
  font-size: inherit;

  &:focus {
    outline: none;
  }
`;

const ConsoleInput = ({ addToTerminalHistory }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addToTerminalHistory({ input });

    // console command logic goes here
    addToTerminalHistory({ input: 'invalid command', color: '#ff5151' });

    setInput('');
  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <label>> </label>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        id="console-input"
        autoFocus
        autoComplete="off"
      />
    </InputContainer>
  );
};

export default ConsoleInput;
