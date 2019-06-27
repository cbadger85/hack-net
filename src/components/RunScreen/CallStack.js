import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import colors from '../../utils/colors';

const CallStackTitleWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${colors.blue};

  p {
    margin-top: -0.5rem;
  }
`;

const CallStackWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CallStackProgramWrapper = styled.div`
  width: 100%;
  height: 352px;
  overflow: scroll;
`;

const CallStack = () => {
  const callStack = useSelector(state => state.callStack.stack);
  const buffer = useSelector(state => state.callStack.buffer);
  const callStackScroll = useRef();

  useEffect(() => {
    callStackScroll.current.scrollTop = callStackScroll.current.scrollHeight;
  });

  return (
    <CallStackWrapper>
      <CallStackTitleWrapper>
        <h2>Call Stack</h2>
        <p>memory remaining</p>
        <h2>{buffer}</h2>
      </CallStackTitleWrapper>
      <CallStackProgramWrapper ref={callStackScroll}>
        {callStack.map(program => program.output)}
      </CallStackProgramWrapper>
    </CallStackWrapper>
  );
};

export default CallStack;
