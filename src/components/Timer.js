import React, { useEffect, useState } from 'react';

export const Timer = ({ initialTime, setTerminalActive }) => {
  const [time, setTime] = useState(parseInt(initialTime));

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

  if (isNaN(time)) {
    setTerminalActive();
    return (
      <span style={{ color: '#ff5151' }}>
        timer requires a number as its argument
      </span>
    );
  }

  return (
    <div>
      Time Remaining:<span style={{ color: 'green' }}> {time}</span>
    </div>
  );
};

export default Timer;
