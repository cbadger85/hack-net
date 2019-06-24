import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';

const printScreen = (output, color = colors.blue) => {
  store.dispatch(
    actions.addToRunTerminalDisplay({
      output,
      color,
    })
  );
};

export const error = args => {
  printScreen('invalid command', colors.red);
};

export const main = args => {
  store.dispatch(actions.switchScreenToMainConsole());
  store.dispatch(
    actions.addToTerminalDisplay({
      output: 'connection lost...',
      color: colors.red,
    })
  );
};

export const execCounterIce = args => {
  if (args.length !== 1) {
    printScreen('invalid argument(s)', colors.red);
    return;
  }

  printScreen(`executing ${args[0]}...`, colors.yellow);
};
