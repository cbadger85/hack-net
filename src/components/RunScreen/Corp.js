import React from 'react';

import Figlet from '../Figlet';
import colors from '../../utils/colors';

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

export default Corp;
