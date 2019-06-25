import React from 'react';

import colors from '../utils/colors';

const OutOfTime = () => {
  return (
    <div style={{ color: colors.red }}>
      <div style={{ color: colors.yellow }}>trace complete</div>
      <div>+++ TERMINAL LOCKED +++</div>
      <p style={{ marginTop: '2em' }}>+++ GAME OVER +++</p>
    </div>
  );
};

const Win = ({ loot }) => {
  return (
    <div style={{ color: colors.blue }}>
      <div style={{ color: colors.yellow }}>Firewall Breached</div>
      <p style={{ marginTop: '2em', color: colors.green }}>
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
    default:
      return <div style={{ color: colors.red }}>+++ GAME OVER +++</div>;
  }
};

export default EndGame;
