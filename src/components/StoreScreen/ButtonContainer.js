import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  switchScreenToMainConsole,
  clearTerminalDisplay,
  addToTerminalDisplay,
} from '../../store/actions';
import colors from '../../utils/colors';

const ButtonLayout = styled.div`
  padding: 2em;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  font: inherit;
  outline: inherit;
  border: 1px solid ${colors.blue};
  padding: 1rem 2rem;

  &:hover {
    box-shadow: 0.5rem 0.5rem
      ${props => (props.cancel ? colors.red : colors.green)};
  }

  &:focus {
    border-color: ${props => (props.cancel ? colors.red : colors.green)};
  }
`;

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const handleCancel = e => {
    dispatch(switchScreenToMainConsole());
    dispatch(clearTerminalDisplay());
    dispatch(
      addToTerminalDisplay({
        output: 'Thank you for visiting!',
        color: colors.yellow,
      })
    );
    dispatch(
      addToTerminalDisplay({
        output: (
          <div>
            run <span style={{ color: colors.pink }}>help</span> to learn how to
            play
          </div>
        ),
      })
    );
  };

  return (
    <ButtonLayout>
      <Button type="button">Checkout</Button>
      <Button type="button" cancel onClick={handleCancel}>
        Cancel
      </Button>
    </ButtonLayout>
  );
};

export default ButtonContainer;
