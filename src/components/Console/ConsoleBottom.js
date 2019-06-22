import React, { useEffect, useRef } from 'react';

const ConsoleBottom = () => {
  const consoleBottom = useRef();

  const scrollingFunc = () => {
    console.log('im scrolling');
    consoleBottom.current.scrollIntoView({ behavior: 'smooth' });
    consoleBottom.current.scrollTop += 300;
  };

  useEffect(() => {
    scrollingFunc();
  });

  return <div ref={consoleBottom} />;
};

export default ConsoleBottom;
