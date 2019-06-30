import store from '../store';
import * as actions from '../store/actions';
import colors from '../utils/colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} has been executed against you`,
      color: colors.pink,
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
    damage: 5,
    program: function() {
      store.dispatch(actions.damagePlayerFirewall(this.damage));
      store.dispatch(
        actions.addToRunTerminalDisplay({
          output: `${this.damage} damage has been dealt to you`,
          color: colors.red,
        })
      );
      printSuccess(this.name);
    },
  },
  {
    name: 'reverse denial of service',
    damage: 20,
    program: function() {
      store.dispatch(actions.damagePlayerFirewall(this.damage));
      store.dispatch(
        actions.addToRunTerminalDisplay({
          output: `${this.damage} damage has been dealt to you`,
          color: colors.red,
        })
      );
      printSuccess(this.name);
    },
  },
  {
    name: 'anti-viral doubler',
    damage: 3,
    program: function() {
      let timer = 12;
      const dotTimer = setInterval(() => {
        if (timer > 1) {
          store.dispatch(actions.damagePlayerFirewall(this.damage));
          store.dispatch(
            actions.addToRunTerminalDisplay({
              output: `${this.damage} damage has been dealt to you`,
              color: colors.red,
            })
          );
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
