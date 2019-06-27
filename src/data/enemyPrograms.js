import store from '../store';
import * as actions from '../store/actions';
import colors from '../utils/colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} has been executed against you`,
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
    name: 'counter insertion agent',
    program: function() {
      isRunMode() && store.dispatch(actions.damagePlayerFirewall(5));
      printSuccess(this.name);
    },
  },
  {
    name: 'reverse denial of service',
    program: function() {
      isRunMode() && store.dispatch(actions.damagePlayerFirewall(20));
      printSuccess(this.name);
    },
  },
  {
    name: 'anti-viral doubler',
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
