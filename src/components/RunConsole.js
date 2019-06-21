import React, { useState } from 'react';

import Console from './Console';

const RunConsole = () => {
  const [output, setOutput] = useState([{ output: 'Running...' }]);

  const handleRunCommand = input => {
    setOutput([...output, { output: input }]);
  };

  return (
    <Console terminalOutput={output} runCommand={handleRunCommand} runMode />
  );
};

export default RunConsole;
