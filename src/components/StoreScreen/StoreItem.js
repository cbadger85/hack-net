import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

const StoreItemWrapper = styled.div`
  display: flex;
  align-items: top;
  width: 100%;
  justify-content: center;
  color: ${props => (props.isSoldOut ? colors.red : colors.blue)};
`;

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
    top: 0.6em;
    right: 0px;
    color: ${props => (props.isSoldOut ? colors.red : colors.blue)};
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
    top: 0.6em;
    right: 0px;
    color: ${colors.green};
  }

  &:checked:focus:after {
    color: ${colors.yellow};
  }
`;

const StoreItem = ({
  name,
  description,
  cost,
  purchased,
  clickItem,
  credits,
}) => {
  const handleOnClick = () => {
    clickItem(name);
  };

  return (
    <StoreItemWrapper onClick={handleOnClick} isSoldOut={credits - cost < 0}>
      <Checkbox
        type="checkbox"
        checked={purchased}
        onChange={() => null}
        isSoldOut={credits - cost < 0}
      />
      <div style={{ padding: '1em', width: '30%' }}>{name}</div>
      <div style={{ padding: '1em', width: '56%' }}>{description}</div>
      <div style={{ padding: '.5em', width: '10%', textAlign: 'right' }}>
        {cost}
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;
