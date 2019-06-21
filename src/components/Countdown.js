import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Figlet from './Figlet';
import colors from '../utils/colors';

const CountdownWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 10em;
  /* padding: 2em; */
`;

// props: Time given for level, list of programs computer has.

const Countdown = () => {
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(countdownTimer);
  });

  return (
    <CountdownWrapper>
      <span style={{ fontSize: '1.1rem' }}>Time to trace:</span>
      <Figlet font="lcd" color={colors.yellow}>
        {timer}
      </Figlet>
    </CountdownWrapper>
  );
};

export default Countdown;
