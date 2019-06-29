import React from 'react';
import styled from 'styled-components';

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

const ButtonContainer = ({ checkout, cancel }) => {
  return (
    <ButtonLayout>
      <Button type="button" onClick={checkout}>
        Checkout
      </Button>
      <Button type="button" cancel onClick={cancel}>
        Cancel
      </Button>
    </ButtonLayout>
  );
};

export default ButtonContainer;
