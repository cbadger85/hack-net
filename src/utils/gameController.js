import store from '../store';
import * as actions from '../store/actions';

export default (time, initialTime) => {
  if (time === initialTime) {
    store.dispatch(actions.addToTerminalDisplay({ output: 'Running...' }));
  }

  if (time === initialTime - 10 && initialTime - 10 > 0) {
    store.dispatch(
      actions.addToTerminalDisplay({ output: 'Still Running...' })
    );
  }
};
