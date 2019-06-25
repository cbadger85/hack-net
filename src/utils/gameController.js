import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import Figlet from '../components/Figlet';
import EndGame from '../components/EndGame';

const Corp = ({ name }) => {
  return (
    <div>
      <div>connecting...</div>
      <div>connected successful</div>
      <Figlet font="doom" color={colors.yellow}>
        {name}
      </Figlet>
      <span style={{ color: colors.red }}>+++ INTRUSION DETECTED +++</span>
    </div>
  );
};

export default (time, initialTime) => {
  const { enemy } = store.getState();

  if (time === initialTime) {
    store.dispatch(
      actions.addToRunTerminalDisplay({ output: <Corp name={enemy.name} /> })
    );
  }

  if (time % 5 === 0) {
    store.dispatch(
      actions.addToRunTerminalDisplay({
        output: '+++ INTRUSION DETECTED +++',
        color: colors.red,
      })
    );
  }

  if (time === 0) {
    store.dispatch(actions.switchScreenToMainConsole());

    store.dispatch(
      actions.addToTerminalDisplay({
        output: <EndGame condition={'OUT_OF_TIME'} />,
        color: colors.red,
      })
    );

    store.dispatch(actions.setTerminalInactive());
  }

  if (enemy.firewallStrength <= 0) {
    const credits = 200;

    store.dispatch(actions.switchScreenToMainConsole());
    store.dispatch(actions.addToPlayerCredits(credits));

    store.dispatch(
      actions.addToTerminalDisplay({
        output: <EndGame condition={'WIN'} loot={credits} />,
        color: colors.red,
      })
    );
  }
};
