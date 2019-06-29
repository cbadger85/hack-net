import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import enemyCorps from '../data/enemyCorps';

export const echo = args => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: args.join(' '),
      color: colors.yellow,
    })
  );
};

export const createRunner = args => {
  const { player } = store.getState();

  if (player.name) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you have already created a runner',
        color: colors.red,
      })
    );
    return;
  }

  if (args.length === 0 || !args[0].trim()) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you must provide a name',
        color: colors.red,
      })
    );
    return;
  }

  store.dispatch(actions.createPlayer(args[0]));
  const { player: newPlayer } = store.getState();
  store.dispatch(
    actions.addToTerminalDisplay({
      output: `Welcome ${newPlayer.name}`,
      color: colors.yellow,
    })
  );
  store.dispatch(
    actions.addToTerminalDisplay({
      output: (
        <div>
          run <span style={{ color: colors.pink }}>shop</span> to buy your gear
        </div>
      ),
    })
  );
};

export const displayRunner = args => {
  const { player } = store.getState();

  if (!player.name) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you need to create a runner first',
        color: colors.red,
      })
    );
    return;
  }

  store.dispatch(
    actions.addToTerminalDisplay({
      output: player.name,
      color: colors.yellow,
    })
  );
};

export const clearTerminal = args => {
  store.dispatch(actions.clearTerminalDisplay());
};

export const goShopping = args => {
  const { player } = store.getState();

  if (!player.name) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you need to create a runner first',
        color: colors.red,
      })
    );
    return;
  }

  store.dispatch(actions.switchScreenToStoreScreen());
};

export const error = input => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: `${input}: command not found`,
      color: colors.red,
    })
  );
};

export const executeRun = args => {
  const { player } = store.getState();
  const [enemyCorp] = args;

  if (!player.name) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you need to create a runner first',
        color: colors.red,
      })
    );
    return;
  }

  if (player.programs.length === 0) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: 'you should buy some programs first',
        color: colors.red,
      })
    );
    return;
  }

  const listOfEnemyCorps = Object.keys(enemyCorps);

  if (!listOfEnemyCorps.includes(enemyCorp)) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: "That connection doesn't exist",
        color: colors.red,
      })
    );
    return;
  }

  const firewallStrength = store.getState().player.maxPlayerHealth;
  const memoryBuffer = store.getState().player.memoryBuffer;
  store.dispatch(actions.setBufferAmount(memoryBuffer));
  store.dispatch(actions.createEnemy(enemyCorps[enemyCorp]));
  store.dispatch(actions.switchScreenToRunConsole(firewallStrength));
};

export const show = args => {
  switch (args) {
    default:
      // show list of all show sub commands
      return;
  }
};
