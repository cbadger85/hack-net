import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CallStackWrapper = styled.div`
  background-color: teal;
  width: 100%;
  height: 100%;
`;

const CallStack = () => {
  const callStack = useSelector(state => state.callStack);
  return <CallStackWrapper>{callStack}</CallStackWrapper>;
};

export default CallStack;
