import React, { useEffect, useState, memo } from 'react';
import styled, { keyframes, css } from 'styled-components';

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
  color: ${props => (props.isAnimated ? props.countdownColor : '#ff5151')};
  display: inline-block;
  line-height: ${props => props.size}px;
  font-size: ${props => props.size / 2.5}px;
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
    stroke: ${props => (props.isAnimated ? props.timerColor : '#ff5151')};
    fill: none;
    ${props =>
      props.isAnimated &&
      css`
        animation: ${props => countdown(props.size)}
          ${props => props.initialTime}s linear forwards;
      `}
  }
`;

export const Timer = ({
  initialTime,
  setTerminalActive,
  size = 60,
  timerColor = 'green',
  countdownColor = 'green',
}) => {
  const [time, setTime] = useState(parseInt(initialTime));

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  if (time === 0) {
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

  return (
    <TimerContainer size={size}>
      <Countdown
        size={size}
        countdownColor={countdownColor}
        isAnimated={time > 0 ? true : false}
      >
        {time > 0 ? time : 0}
      </Countdown>
      <SvgTimer
        initialTime={initialTime}
        size={size}
        timerColor={timerColor}
        isAnimated={time > 0 ? true : false}
      >
        <circle r={size / 2 - 4} cx={size / 2} cy={size / 2} />
      </SvgTimer>
    </TimerContainer>
  );
};

export default memo(Timer);
