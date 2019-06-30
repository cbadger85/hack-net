import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ScreenLayout from '../ScreenLayout';
import {
  switchScreenToMainConsole,
  addToTerminalDisplay,
} from '../../store/actions';
import colors from '../../utils/colors';

const HelpLayout = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  overflow-y: scroll;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  font: inherit;
  outline: inherit;
  border: 1px solid ${colors.blue};
  padding: 1rem 2rem;

  &:hover {
    box-shadow: 0.5rem 0.5rem ${colors.yellow};
  }

  &:focus {
    border-color: ${colors.yellow};
  }
`;

const HelpScreen = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(switchScreenToMainConsole());
    dispatch(
      addToTerminalDisplay({
        output: 'Enjoy the game!',
      })
    );
  };

  return (
    <ScreenLayout>
      <HelpLayout>
        <div style={{ textAlign: 'center' }}>
          <Button type="button" onClick={handleOnClick}>
            Ok
          </Button>
        </div>
      </HelpLayout>
    </ScreenLayout>
  );
};

export default HelpScreen;
