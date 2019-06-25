import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import colors from '../utils/colors';

const CallStackTitleWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${colors.blue};
`;

const CallStackWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CallStack = () => {
  const callStack = useSelector(state => state.callStack.stack);
  return (
    <CallStackWrapper>
      <CallStackTitleWrapper>
        <h2>Call Stack</h2>
      </CallStackTitleWrapper>
      {callStack.map(program => program.output)}
    </CallStackWrapper>
  );
};

export default CallStack;
