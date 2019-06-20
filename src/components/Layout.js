import React from 'react';
import styled from 'styled-components';

import MainConsole from './MainConsole';
import HealthBarContainer from './HealthBarContainer';
import colors from '../utils/colors';

const LayoutWrapper = styled.div`
  width: 1200px;
  min-width: 1200px;
  /* height: 750px; */
  min-height: 750px;
  margin: auto;
  box-sizing: border-box;
  border: 1px solid ${colors.blue};
  color: ${colors.blue};
  background: ${colors.darkPurple};
`;

const HealthBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid ${colors.blue};
`;

const ConsoleAndStatusWrapper = styled.div`
  height: 750px;
  display: flex;
`;

const CountdownAndStacksWrapper = styled.div`
  width: 300px;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <HealthBarWrapper className="health-row">
        <HealthBarContainer />
      </HealthBarWrapper>
      <ConsoleAndStatusWrapper className="console-and-status-row">
        <MainConsole />
        <CountdownAndStacksWrapper className="countdown-and-stack-timers-column">
          <div className="countdown-timer">{/* GameTimer1 */}</div>
          <div className="program-stack">{/* StackLayout */}</div>
        </CountdownAndStacksWrapper>
      </ConsoleAndStatusWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
