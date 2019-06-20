import React, { useRef, useEffect } from 'react';

const ConsoleBottom = () => {
  const consoleBottom = useRef();

  useEffect(() => {
    consoleBottom.current.scrollIntoView({
      block: 'end',
    });
  });

  return <div ref={consoleBottom} />;
};

export default ConsoleBottom;
