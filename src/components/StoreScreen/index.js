import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ScreenLayout from '../ScreenLayout';
import ButtonContainer from './ButtonContainer';
import StoreItem from './StoreItem';
import colors from '../../utils/colors';
import storeItems from '../../data/storeItems';
import Figlet from '../Figlet';

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
  // TODO: filter store items by programs purchased by player
  const initialCredits = useSelector(state => state.player.credits);
  const [items, setItems] = useState(
    storeItems.map(item => ({ ...item, purchased: false }))
  );
  const [credits, setCredits] = useState(initialCredits);

  const handleClickItem = name => {
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

  // TODO: dispatch actions modifying the players programs, credits, and stats by purchase

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
            />
          ))}
        </StoreItemsLayout>
        <ButtonContainer />
      </StoreLayout>
    </ScreenLayout>
  );
};

export default StoreScreen;
