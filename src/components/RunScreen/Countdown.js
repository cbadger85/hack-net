import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Figlet from '../Figlet';
import { setTick } from '../../store/actions';
import colors from '../../utils/colors';
import gameController from '../../utils/gameController';

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

const CountdownTitle = styled.h2`
  font-size: 1.2rem;
`;

const Countdown = ({ initialTime = 59 }) => {
  const timer = useSelector(state => state.timer);
  const screen = useSelector(state => state.game);
  const dispatch = useDispatch();

  // const isRunMode = screen === 'run' ? true : false;

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (timer > 0) {
        gameController(timer, initialTime);
        dispatch(setTick(timer - 1));
      }

      // if (!isRunMode) {
      //   clearInterval(countdownTimer);
      // }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  });

  return (
    <CountdownWrapper>
      <CountdownTitle style={{ textTransform: 'uppercase' }}>
        Time to trace:
      </CountdownTitle>
      <Figlet font="lcd" color={colors.yellow}>
        {timer}
      </Figlet>
    </CountdownWrapper>
  );
};

export default Countdown;
