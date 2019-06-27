import React from 'react';
import styled from 'styled-components';

const HealthBarIndicator = styled.div`
  height: 1em;
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  padding: 0.25em;
  transition: width 1s linear;
`;

const HealthBar = ({ label, width, color }) => {
  return (
    <div style={{ width: '100%', padding: '.25em' }}>
      <div>{label}</div>
      <HealthBarIndicator width={width} color={color} />
    </div>
  );
};

export default HealthBar;
