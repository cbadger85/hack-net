import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import ScreenLayout from '../ScreenLayout';
import ButtonContainer from './ButtonContainer';
import StoreItem from './StoreItem';
import Figlet from '../Figlet';
import * as actions from '../../store/actions';
import colors from '../../utils/colors';
import storeItems from '../../data/storeItems';

const StoreLayout = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  background: inherit;
`;

const HeaderContainer = styled.div`
  margin: auto;
  height: 25%;
  width: 80%;
  text-align: center;
  padding: 1em;
  padding-bottom: 0;
`;

const StoreItemsLayout = styled.div`
  margin: auto;
  height: 55%;
  overflow-y: scroll;
  width: 80%;
  border: 1px solid ${colors.blue};
  padding: 0 1em;

  &:focus {
    outline: none;
  }
`;

const Credits = styled.div`
  text-align: right;
  width: 80%;
  margin: auto;

  span {
    color: ${props => (props.credits < 0 ? colors.red : colors.yellow)};
  }
`;

const StoreScreen = () => {
  const dispatch = useDispatch();

  const ownedPrograms = useSelector(state => state.player.programs);

  const initialStoreItems = storeItems
    .filter(item => !ownedPrograms.includes(item.name))
    .map(item => ({
      ...item,
      purchased: false,
    }));

  const initialCredits = useSelector(state => state.player.credits);
  const [items, setItems] = useState(initialStoreItems);
  const [credits, setCredits] = useState(initialCredits);
  const [focusedItem, setFocusedItem] = useState(storeItems[0].name);

  const handleClickItem = name => {
    setFocusedItem(name);
    setItems(
      items.map(item => {
        if (item.name !== name) {
          return item;
        }

        return { ...item, purchased: !item.purchased };
      })
    );

    const purchasedItem = items.find(item => item.name === name);
    if (purchasedItem.purchased) {
      setCredits(credits => credits + purchasedItem.cost);
      return;
    }

    setCredits(credits => credits - purchasedItem.cost);
  };

  const handleCheckout = () => {
    if (credits < 0 || initialCredits === credits) {
      return;
    }

    const programs = items
      .filter(item => item.purchased && item.type === 'program')
      .map(program => program.name);

    const memoryBuff = items
      .filter(item => item.purchased && item.type === 'memory upgrade')
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    const firewallBuff = items
      .filter(item => item.purchased && item.type === 'firewall upgrade')
      .reduce((acc, item) => {
        return acc + item.amount;
      }, 0);

    dispatch(
      actions.purchaseItems({
        cost: initialCredits - credits,
        programs,
        memoryBuff,
        firewallBuff,
      })
    );
    dispatch(actions.switchScreenToMainConsole());
    dispatch(
      actions.addToTerminalDisplay({
        output: 'Thank you for your purchase!',
        color: colors.yellow,
      })
    );
    dispatch(
      actions.addToTerminalDisplay({
        output: (
          <div>
            use <span style={{ color: colors.pink }}>connect [corp]</span>{' '}
            whenever you're ready to start your run or use{' '}
            <span style={{ color: colors.pink }}>help</span> to learn how to
            play
          </div>
        ),
      })
    );
  };

  const handleCancel = () => {
    dispatch(actions.switchScreenToMainConsole());
    dispatch(
      actions.addToTerminalDisplay({
        output:
          'Thank you for visiting! Feel free to come back and improve your rig!',
        color: colors.yellow,
      })
    );
    dispatch(
      actions.addToTerminalDisplay({
        output: (
          <div>
            use <span style={{ color: colors.pink }}>connect [corp]</span>{' '}
            whenever you're ready to start your run or use{' '}
            <span style={{ color: colors.pink }}>help</span> to learn how to
            play
          </div>
        ),
      })
    );
  };

  return (
    <ScreenLayout>
      <StoreLayout>
        <HeaderContainer>
          <Figlet font="lean" color={colors.pink}>
            STORE
          </Figlet>
        </HeaderContainer>
        <Credits credits={credits}>
          CREDITS: <span>{credits}</span>
        </Credits>
        <StoreItemsLayout>
          {items.map(item => (
            <StoreItem
              name={item.name}
              description={item.description}
              cost={item.cost}
              purchased={item.purchased}
              key={item.name}
              id={item.name}
              clickItem={handleClickItem}
              credits={credits}
              type={item.type}
              isFocused={focusedItem === item.name}
            />
          ))}
        </StoreItemsLayout>
        <ButtonContainer checkout={handleCheckout} cancel={handleCancel} />
      </StoreLayout>
    </ScreenLayout>
  );
};

export default StoreScreen;
