import React, { useRef, useEffect } from 'react';
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

const ItemType = styled.span`
  color: ${props => (props.isSoldOut ? colors.red : colors.green)};
`;

const StoreItem = ({
  name,
  description,
  cost,
  purchased,
  clickItem,
  credits,
  type,
  tabIndex,
  isFocused,
}) => {
  const checkboxRef = useRef();

  useEffect(() => {
    isFocused && checkboxRef.current.focus();
  });

  const handleOnClick = e => {
    clickItem(name);
  };

  return (
    <StoreItemWrapper onClick={handleOnClick} isSoldOut={credits - cost < 0}>
      <Checkbox
        ref={checkboxRef}
        type="checkbox"
        checked={purchased}
        onChange={() => null}
        isSoldOut={credits - cost < 0}
        tabIndex={tabIndex}
      />
      <div style={{ padding: '1em', width: '30%' }}>{name}</div>
      <div style={{ padding: '1em', width: '56%' }}>
        <ItemType isSoldOut={credits - cost < 0}>{type}:</ItemType>{' '}
        {description}
      </div>
      <div style={{ padding: '.5em', width: '10%', textAlign: 'right' }}>
        {cost}
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;
