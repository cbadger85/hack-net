import React from 'react';
import colors from '../utils/colors';

const EndGame = ({ condition }) => {
  switch (condition) {
    case 'OUT_OF_TIME':
      return (
        <div style={{ color: colors.red }}>
          <div style={{ color: colors.yellow }}>trace complete</div>
          <div>+++ TERMINAL LOCKED +++</div>
          <p style={{ marginTop: '2em' }}>+++ GAME OVER +++</p>
        </div>
      );
    default:
      return <div style={{ color: colors.red }}>+++ GAME OVER +++</div>;
  }
};

export default EndGame;
