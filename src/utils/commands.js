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

export const help = args => {
  store.dispatch(actions.switchToHelpScreen());
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

  if (args.length === 0 || !listOfEnemyCorps.includes(enemyCorp)) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: (
          <>
            <div style={{ color: colors.yellow }}>connections:</div>
            {listOfEnemyCorps.map(corp => (
              <div>{corp}</div>
            ))}
          </>
        ),
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
  const { player } = store.getState();
  console.log(args);
  switch (args[0]) {
    case 'runner':
      store.dispatch(
        actions.addToTerminalDisplay({
          output: player.name ? (
            <>
              runner: <span style={{ color: colors.green }}>{player.name}</span>
            </>
          ) : (
            <span style={{ color: colors.red }}>
              you need to create a runner and give it a name
            </span>
          ),
          color: colors.yellow,
        })
      );
      break;

    case 'credits':
      store.dispatch(
        actions.addToTerminalDisplay({
          output:
            !player.credits && !player.name ? (
              <span style={{ color: colors.red }}>
                create a runner to gain credits
              </span>
            ) : (
              `${player.credits} credits`
            ),
          color: colors.yellow,
        })
      );
      break;
    case 'memory':
      store.dispatch(
        actions.addToTerminalDisplay({
          output: `you have ${player.memoryBuffer}kb of memory`,
          color: colors.yellow,
        })
      );
      break;
    case 'programs':
      store.dispatch(
        actions.addToTerminalDisplay({
          output: player.programs.length ? (
            <div>
              <div>programs:</div>
              {player.programs.map(program => (
                <div key={`${Date.now()}-${program}`}>{program}</div>
              ))}
            </div>
          ) : (
            <span style={{ color: colors.red }}>you need to buy programs</span>
          ),
          color: colors.yellow,
        })
      );
      break;
    case 'firewall':
      store.dispatch(
        actions.addToTerminalDisplay({
          output: player.maxPlayerHealth ? (
            <>firewall strength: {player.maxPlayerHealth}</>
          ) : (
            <span style={{ color: colors.red }}>
              you need create a runner to gain a firewall
            </span>
          ),
          color: colors.yellow,
        })
      );
      break;
    case 'all':
      [['runner'], ['credits'], ['memory'], ['programs'], ['firewall']].forEach(
        command => show(command)
      );
      break;
    default:
      store.dispatch(
        actions.addToTerminalDisplay({
          output: (
            <>
              <div>show [command]</div>
              <div style={{ marginLeft: '1em' }}>
                <div>commands:</div>
                <div>
                  runner:{' '}
                  <span style={{ color: colors.green }}>
                    displays the runner's name
                  </span>
                </div>
                <div>
                  credits:{' '}
                  <span style={{ color: colors.green }}>
                    displays the number of credit the runner has
                  </span>
                </div>
                <div>
                  memory:{' '}
                  <span style={{ color: colors.green }}>
                    displays the amount of memory the runner's rig has
                  </span>
                </div>
                <div>
                  programs:{' '}
                  <span style={{ color: colors.green }}>
                    displays the programs the runner has available in a run
                  </span>
                </div>
                <div>
                  firewall:{' '}
                  <span style={{ color: colors.green }}>
                    displays the strength of the runner's firewall
                  </span>
                </div>
                <div>
                  all:{' '}
                  <span style={{ color: colors.green }}>
                    shows all runner's stats
                  </span>
                </div>
              </div>
            </>
          ),
          color: colors.yellow,
        })
      );
      return;
  }
};

export const reset = args => {
  const playerName = store.getState().player.name;

  if (args[0] === playerName || !playerName) {
    store.dispatch(actions.reset());
    return;
  }

  store.dispatch(
    actions.addToTerminalDisplay({
      output: (
        <>
          invalid argument for reset. command is{' '}
          <span style={{ color: colors.yellow }}>reset [runner]</span>
        </>
      ),
      color: colors.red,
    })
  );
};
