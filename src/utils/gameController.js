import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import Corp from '../components/RunScreen/Corp';
import EndGame from '../components/MainScreen/EndGame';
import enemyProgramsList from '../data/enemyPrograms';

const difficulty = {
  easy: 10,
  medium: 7,
  hard: 4,
};

export default (time, initialTime) => {
  const { enemy, player } = store.getState();
  const enemyPrograms = enemyProgramsList.filter(program =>
    enemy.programs.includes(program.name)
  );

  const difficultyLevel = difficulty[enemy.difficulty];

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

  if ((time - 1) % difficultyLevel === 0) {
    const length = enemyPrograms.length;
    const enemyProgramIndex = Math.floor(Math.random() * length);
    enemyPrograms[enemyProgramIndex].program(12);
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
    store.dispatch(actions.switchScreenToMainConsole());
    store.dispatch(actions.addToPlayerCredits(enemy.credits));

    store.dispatch(actions.clearCallStack());

    store.dispatch(
      actions.addToTerminalDisplay({
        output: <EndGame condition={'WIN'} loot={enemy.credits} />,
        color: colors.blue,
      })
    );
  }
};
