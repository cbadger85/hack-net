import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const Checkbox = styled.input`
  padding: 1em;
  appearance: none;
  display: inline-block;
  position: relative;

  &:after {
    content: '[  ]';
    white-space: pre;
    font-size: 1.4rem;
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: ${colors.blue};
  }

  &:focus {
    outline: none;
  }

  &:focus:after {
    color: ${colors.yellow};
  }

  &:checked:after {
    content: '[*]';
    font-size: 1.4rem;
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: ${colors.green};
  }
`;

const StoreItem = ({ id = 0 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox type="checkbox" id={id} />
      <div style={{ padding: '1em' }}>name</div>
      <div style={{ padding: '1em' }}>description</div>
      <div style={{ padding: '1em' }}>cost</div>
    </div>
  );
};

export default StoreItem;
