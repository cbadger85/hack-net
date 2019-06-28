import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import Timer from '../components/Timer';
import colors from './colors';
import enemyCorps from '../data/enemyCorps';

export const timer = (args, props) => {
  store.dispatch(actions.setTerminalInactive());
  store.dispatch(
    actions.addToTerminalDisplay({
      output: (
        <Timer
          initialTime={args[0]}
          setTerminalActive={props.setTerminalActive}
        />
      ),
    })
  );
};

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
  // loook into thunks

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

  const programs = [
    'ice-ice-breaker',
    'set-them-up-the-bomb',
    'nuke-em',
    'death-by-a-dozen-cuts',
  ]; //! <- remove this after the store is up

  const startingMemory = 128; //! <- initial player stuff

  store.dispatch(actions.createPlayer(args[0], programs, startingMemory)); //! <= remove this and add it to the store;
  const { player: newPlayer } = store.getState();
  store.dispatch(
    actions.addToTerminalDisplay({
      output: `Welcome ${newPlayer.name}`,
      color: colors.yellow,
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
  store.dispatch(actions.switchScreenToStoreScreen());
};

export const error = (args, props) => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: 'invalid command',
      color: colors.red,
    })
  );
};

export const executeRun = args => {
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

  const listOfEnemyCorps = Object.keys(enemyCorps);

  if (!listOfEnemyCorps.includes(args[0])) {
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
  store.dispatch(actions.createEnemy(enemyCorps[args[0]]));
  store.dispatch(actions.switchScreenToRunConsole(firewallStrength));
  store.dispatch(actions.clearTerminalDisplay());
};
