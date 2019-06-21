import React from 'react';
import styled from 'styled-components';

import Layout from './Layout';
import RunConsole from './RunConsole';
import HealthBarContainer from './HealthBarContainer';
import colors from '../utils/colors';

const HealthBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid ${colors.blue};
`;

const ConsoleAndStatusWrapper = styled.div`
  height: 664px;
  display: flex;
`;

const CountdownAndStacksWrapper = styled.div`
  width: 300px;
  border-left: 2px solid ${colors.blue};
`;

const RunLayout = () => {
  return (
    <Layout>
      <HealthBarWrapper className="health-row">
        <HealthBarContainer />
      </HealthBarWrapper>
      <ConsoleAndStatusWrapper className="console-and-status-row">
        <RunConsole />
        <CountdownAndStacksWrapper className="countdown-and-stack-timers-column">
          <div className="countdown-timer">{/* GameTimer1 */}</div>
          <div className="program-stack">{/* StackLayout */}</div>
        </CountdownAndStacksWrapper>
      </ConsoleAndStatusWrapper>
    </Layout>
  );
};

export default RunLayout;
