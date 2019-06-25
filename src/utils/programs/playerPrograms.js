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
    tte: 1,
    cost: 2500,
    memRequired: 32,
    program: function() {
      store.dispatch(actions.damageFirewall(100));
      printSuccess(this.name);
    },
  },
];
