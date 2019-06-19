import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const countdown = size => keyframes`
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: ${2 * Math.PI * (size / 2)}px;
  }
`;

const TimerContainer = styled.div`
  position: relative;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  margin: 0.5em 0;
  text-align: center;
`;

const Countdown = styled.div`
  color: white;
  display: inline-block;
  line-height: ${props => props.size}px;
`;

const SvgTimer = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: rotateY(-180deg) rotateZ(-90deg);

  circle {
    stroke-dasharray: ${props => 2 * Math.PI * (props.size / 2)}px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 4px;
    stroke: white;
    fill: none;
    animation: ${props => countdown(props.size)} ${props => props.initialTime}s
      linear forwards;
  }
`;

export const Timer = ({ initialTime, setTerminalActive, size = 150 }) => {
  const [time, setTime] = useState(parseInt(initialTime));

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time => time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  if (time <= 0) {
    setTerminalActive();
  }

  if (isNaN(time)) {
    setTerminalActive();
    return (
      <span style={{ color: '#ff5151' }}>
        timer requires a number as its argument
      </span>
    );
  }
  // cx, cy === radius r === radius - 2
  return (
    <TimerContainer size={size}>
      <Countdown size={size}>{time}</Countdown>
      <SvgTimer initialTime={initialTime} size={size}>
        <circle r={size / 2 - 4} cx={size / 2} cy={size / 2} />
      </SvgTimer>
    </TimerContainer>
  );
};

export default Timer;
