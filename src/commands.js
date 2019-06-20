import React from 'react';

import store from './store';
import * as actions from './store/actions';
import Timer from './components/Timer';

export const timer = (args, props) => {
  store.dispatch(actions.setTerminalInactive());
  store.dispatch(
    actions.addToTerminalDisplay({
      output: (
        <Timer
          initialTime={args[0]}
          setTerminalActive={props.setTerminalActive}
        />
      ),
    })
  );
};

export const echo = (args, props) => {
  store.dispatch(
    actions.addToTerminalDisplay({
      output: args.join(' '),
      color: '#4286f4',
    })
  );
};
