import store from '../../store';
import * as actions from '../../store/actions';
import colors from '../colors';

const printSuccess = programName => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output: `${programName} has been executed against you`,
      color: colors.yellow,
    })
  );
};

export default [
  {
    name: 'counter insertion agent',
    tte: 3,
    cost: 1000,
    memRequired: 16,
    program: function() {
      store.dispatch(actions.damagePlayerFirewall(5));
      printSuccess(this.name);
    },
  },
  // {
  //   name: 'reverse denial of service',
  //   tte: 15,
  //   cost: 2500,
  //   memRequired: 32,
  //   program: function() {
  //     store.dispatch(actions.damagePlayerFirewall(20));
  //     printSuccess(this.name);
  //   },
  // },
  // {
  //   name: 'anti-viral doubler',
  //   tte: 10,
  //   memRequired: 16,
  //   program: function() {
  //     let timer = 12;
  //     const dotTimer = setInterval(() => {
  //       if (timer > 0) {
  //         store.dispatch(actions.damagePlayerFirewall(3));
  //       } else {
  //         clearInterval(dotTimer);
  //       }
  //       timer -= 1;
  //     }, 2000);
  //     printSuccess(this.name);
  //   },
  // },
];
