import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Figlet from './Figlet';
import colors from '../utils/colors';
import gameController from '../utils/gameController';

const CountdownWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 10em;
`;

const Countdown = ({ initialTime = 4 }) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    gameController(timer, initialTime);

    return () => {
      clearInterval(countdownTimer);
    };
  });

  return (
    <CountdownWrapper>
      <span style={{ fontSize: '1.1rem' }}>Time to trace:</span>
      {timer > 0 && (
        <Figlet font="lcd" color={colors.yellow}>
          {timer}
        </Figlet>
      )}
    </CountdownWrapper>
  );
};

export default Countdown;
