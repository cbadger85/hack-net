import React, { useEffect, useRef } from 'react';

const ConsoleBottom = () => {
  const consoleBottom = useRef();

  useEffect(() => {
    consoleBottom.current.scrollIntoView({ behavior: 'smooth' });
  });

  return <div ref={consoleBottom} />;
};

export default ConsoleBottom;
