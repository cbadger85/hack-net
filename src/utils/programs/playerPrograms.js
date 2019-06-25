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

export default [
  {
    name: 'ice-ice-breaker',
    tte: 3,
    cost: 1000,
    memRequired: 16,
    program: function() {
      store.dispatch(actions.damageFirewall(5));
      printSuccess(this.name);
    },
  },
  {
    name: 'set-them-up-the-bomb',
    tte: 15,
    cost: 2500,
    memRequired: 32,
    program: function() {
      store.dispatch(actions.damageFirewall(20));
      printSuccess(this.name);
    },
  },
  {
    name: 'nuke-em',
    tte: 0,
    cost: 0,
    memRequired: 0,
    program: function() {
      store.dispatch(actions.damageFirewall(100));
      printSuccess(this.name);
    },
  },
  {
    name: 'die',
    tte: 1,
    memRequired: 16,
    program: function() {
      let timer = 5;
      const dotTimer = setInterval(() => {
        if (timer > 0) {
          store.dispatch(actions.damageFirewall(5));
        } else {
          clearInterval(dotTimer);
        }
        timer -= 1;
      }, 2000);
      printSuccess(this.name);
    },
  },
];
