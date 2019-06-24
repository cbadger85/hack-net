import React from 'react';

const TimeToExecuteCountdown = ({ id, program, tte }) => {
  program.program();
  return <div>{program.name}</div>;
};

export default TimeToExecuteCountdown;
