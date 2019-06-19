import React, { useEffect, useState } from 'react';

export const Timer = ({ initialTime, setTerminalActive }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time => time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  if (time <= 0) {
    setTerminalActive();
  }

  return <div>{time}</div>;
};

export default Timer;
