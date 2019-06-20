import React from 'react';

import Figlet from './Figlet';

const Intro = () => {
  return (
    <div>
      <Figlet>Hacker Net</Figlet>
      <div style={{ marginBottom: '1em' }}>
        Type create-runner [name] to begin...
      </div>
    </div>
  );
};

export default Intro;
