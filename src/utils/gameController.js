import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import Figlet from '../components/Figlet';
import EndGame from '../components/EndGame';
import enemyPrograms from './programs/enemyPrograms';

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
  const { enemy, player } = store.getState();

  if (time === initialTime) {
    store.dispatch(
      actions.addToRunTerminalDisplay({ output: <Corp name={enemy.name} /> })
    );
  }

  if (time === 1) {
    store.dispatch(actions.switchScreenToMainConsole());

    store.dispatch(
      actions.addToTerminalDisplay({
        output: <EndGame condition={'OUT_OF_TIME'} />,
        color: colors.red,
      })
    );

    store.dispatch(actions.setTerminalInactive());
  }

  if ((time - 1) % 5 === 0) {
    const length = enemyPrograms.length;
    const enemyProgramIndex = Math.floor(Math.random() * length);
    enemyPrograms[enemyProgramIndex].program();
    console.log(`program: ${enemyPrograms[enemyProgramIndex].name}`);
  }

  if (player.firewallStrength <= 0) {
    store.dispatch(actions.switchScreenToMainConsole());

    store.dispatch(
      actions.addToTerminalDisplay({
        output: <EndGame condition={'OUT_OF_HEALTH'} />,
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
        color: colors.blue,
      })
    );
  }
};
