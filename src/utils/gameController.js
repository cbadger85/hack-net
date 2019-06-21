import React from 'react';

import store from '../store';
import * as actions from '../store/actions';
import colors from './colors';
import Figlet from '../components/Figlet';

const Corp = ({ name }) => {
  return (
    <div>
      <div>connecting...</div>
      <div>connected successful</div>
      <Figlet font="doom" color={colors.yellow}>
        {name}
      </Figlet>
      <span style={{ color: colors.red }}>+++ INTRUSION DETECTED +++</span>
    </div>
  );
};

export default (time, initialTime) => {
  const { enemy } = store.getState();

  if (time === initialTime) {
    store.dispatch(
      actions.addToTerminalDisplay({ output: <Corp name={enemy.name} /> })
    );
  }

  if (time % 5 === 0) {
    store.dispatch(
      actions.addToTerminalDisplay({
        output: '+++ INTRUSION DETECTED +++',
        color: colors.red,
      })
    );
  }
};
