import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Figlet from '../../components/Figlet';
import { reset } from '../../store/actions';
import colors from '../../utils/colors';

const Button = styled.button`
  background: none;
  color: ${colors.blue};
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

const OutOfTime = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(reset());
  };

  return (
    <div style={{ color: colors.red, height: '100%' }}>
      <Figlet font="poison" color={colors.pink}>
        GAME OVER
      </Figlet>
      <div style={{ color: colors.yellow, paddingTop: '2em' }}>
        trace complete
      </div>
      <div>+++ TERMINAL LOCKED +++</div>
      <p style={{ paddingTop: '2em' }}>+++ GAME OVER +++</p>
      <div style={{ textAlign: 'center', padding: '1em' }}>
        <Button type="button" onClick={handleOnClick}>
          Start Over
        </Button>
      </div>
    </div>
  );
};

const OutOfHealth = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(reset());
  };

  return (
    <div style={{ color: colors.red, height: '100%' }}>
      <Figlet font="poison" color={colors.pink}>
        GAME OVER
      </Figlet>
      <div style={{ color: colors.yellow, paddingTop: '2em' }}>
        firewall destroyed
      </div>
      <div>+++ TERMINAL LOCKED +++</div>
      <p style={{ paddingTop: '2em' }}>+++ GAME OVER +++</p>
      <div style={{ textAlign: 'center', padding: '1em' }}>
        <Button type="button" onClick={handleOnClick}>
          Start Over
        </Button>
      </div>
    </div>
  );
};

const Win = ({ loot }) => {
  return (
    <div style={{ color: colors.blue }}>
      <Figlet font="rounded" isConsole color={colors.green}>
        GOOD JOB!
      </Figlet>
      <div style={{ color: colors.yellow }}>Firewall Breached</div>
      <p style={{ marginTop: '2em', color: colors.blue }}>
        you gained {loot} credits
      </p>
    </div>
  );
};

const EndGame = ({ condition, loot }) => {
  switch (condition) {
    case 'OUT_OF_TIME':
      return <OutOfTime />;
    case 'WIN':
      return <Win loot={loot} />;
    case 'OUT_OF_HEALTH':
      return <OutOfHealth />;
    default:
      return <div style={{ color: colors.red }}>+++ GAME OVER +++</div>;
  }
};

export default EndGame;
