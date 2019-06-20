import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import Timer from '../components/Timer';
import colors from './colors';

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

export const echo = (args, props) => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: args.join(' '),
      color: colors.yellow,
    })
  );
};

export const createRunner = (args, props) => {
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

  store.dispatch(actions.createPlayer(args[0]));
  const { player: newPlayer } = store.getState();
  store.dispatch(
    actions.addToTerminalDisplay({
      output: `Welcome ${newPlayer.name}`,
      color: colors.yellow,
    })
  );
};

export const displayRunner = (args, props) => {
  // add check if runner hasn't been created yet
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

export const clearTerminal = (args, props) => {
  store.dispatch(actions.clearTerminalDisplay());
};

export const error = (args, props) => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: 'invalid command',
      color: colors.red,
    })
  );
};
