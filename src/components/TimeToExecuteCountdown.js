import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeProgramFromCallstack } from '../store/actions';

const TimeToExecuteCountdown = ({ id, program, tte = 3 }) => {
  const [tteTimer, setTteTimer] = useState(tte);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (tteTimer > 0) {
        setTteTimer(tteTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  if (tteTimer <= 0) {
    program.program();
    dispatch(removeProgramFromCallstack(id));
  }
  return (
    <div>
      <div>{tteTimer}</div>
      <div>{program.name}</div>
    </div>
  );
};

export default TimeToExecuteCountdown;
