import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeProgramFromCallstack } from '../store/actions';
import colors from '../utils/colors';

const TteCountdownWrapper = styled.div`
  text-align: center;
  margin: auto;
  padding: 0.25em;
  color: ${colors.yellow};
  border-bottom: 1px ${colors.blue} solid;
`;

const CountdownBar = styled.div`
  height: 0.5em;
  width: ${props => props.width}%;
  margin: 0.5em auto;
  background-color: ${colors.pink};
  transition: width 1s linear;
`;

const TimeToExecuteCountdown = ({ id, program }) => {
  const [tteTimer, setTteTimer] = useState(program.tte);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (tteTimer >= 0) {
        setTteTimer(tteTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  if (tteTimer < 0) {
    program.program();
    dispatch(removeProgramFromCallstack(id, program.memRequired));
  }
  return (
    <TteCountdownWrapper>
      <div>{program.name}</div>
      <CountdownBar width={parseInt((tteTimer / program.tte) * 100, 10)} />
    </TteCountdownWrapper>
  );
};

export default TimeToExecuteCountdown;
