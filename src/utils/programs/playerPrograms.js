import store from '../../store';
import * as actions from '../../store/actions';
import colors from '../colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} executed successfully`,
      color: colors.yellow,
    })
  );
};

const isRunMode = () => {
  const screen = store.getState().game.screen;
  return screen === 'run' ? true : false;
};

export default [
  {
    name: 'ice-ice-breaker',
    tte: 3,
    cost: 1000,
    memRequired: 16,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(5));
      printSuccess(this.name);
    },
  },
  {
    name: 'set-them-up-the-bomb',
    tte: 15,
    cost: 2500,
    memRequired: 32,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(20));
      printSuccess(this.name);
    },
  },
  {
    name: 'nuke-em',
    tte: 0,
    cost: 0,
    memRequired: 0,
    program: function() {
      isRunMode() && store.dispatch(actions.damageEnemyFirewall(100));
      printSuccess(this.name);
    },
  },
  {
    name: 'death-by-a-dozen-cuts',
    tte: 10,
    memRequired: 16,
    program: function() {
      let timer = 12;
      const dotTimer = setInterval(() => {
        if (timer > 1) {
          isRunMode() && store.dispatch(actions.damagePlayerFirewall(3));
        }
        if (!isRunMode() || timer <= 1) {
          clearInterval(dotTimer);
        }
        timer -= 1;
      }, 2000);
      printSuccess(this.name);
    },
  },
];
