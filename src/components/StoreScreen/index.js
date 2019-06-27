import React from 'react';
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
  width: 70%;
  text-align: center;
  padding: 1em;
  padding-bottom: 0;
`;

const StoreItemsLayout = styled.div`
  margin: auto;
  height: 55%;
  overflow-y: scroll;
  width: 70%;
  border: 1px solid ${colors.blue};
  padding: 0 1em;
`;

const Credits = styled.div`
  text-align: right;
  width: 70%;
  margin: auto;
`;

const StoreScreen = () => {
  console.log(storeItems);

  const credits = `0000`;

  return (
    <ScreenLayout>
      <StoreLayout>
        <HeaderContainer>
          <Figlet font="lean" color={colors.pink}>
            STORE
          </Figlet>
        </HeaderContainer>
        <Credits>
          CREDITS: <span style={{ color: colors.yellow }}>{credits}</span>
        </Credits>
        <StoreItemsLayout>
          <StoreItem />
        </StoreItemsLayout>
        <ButtonContainer />
      </StoreLayout>
    </ScreenLayout>
  );
};

export default StoreScreen;
