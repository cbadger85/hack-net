import React from 'react';

import Figlet from './Figlet';
import colors from '../utils/colors';

const Intro = () => {
  return (
    <div>
      <Figlet font="5lineoblique" isConsole color={colors.yellow}>
        Cyberpunk
      </Figlet>
      <div style={{ marginLeft: '35em' }}>
        <Figlet font="pepper" isConsole>
          1985
        </Figlet>
      </div>
      <div style={{ marginBottom: '1em' }}>
        run create-runner [name] to begin...
      </div>
    </div>
  );
};

export default Intro;
