import store from '../store';
import * as actions from '../store/actions';
import colors from '../utils/colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} executed successfully`,
      color: colors.yellow,
    })
  );
};

export const iceIceBaby = {
  name: 'Ice Ice Baby',
  tte: 3,
  cost: 1000,
  memRequired: 20,
  program: function() {
    console.log('Ice Ice Baby...'); // change to a run terminal display
    store.dispatch(actions.damageFirewall(5));
    printSuccess(this.name);
  },
};
