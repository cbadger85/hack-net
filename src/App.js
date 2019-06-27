import React from 'react';
import { connect } from 'react-redux';

import MainScreen from './components/MainScreen';
import RunScreen from './components/RunScreen';
import StoreScreen from './components/StoreScreen';

const App = ({ screen }) => {
  switch (screen) {
    case 'run':
      return (
        <div>
          <RunScreen />
        </div>
      );
    case 'store':
      return (
        <div>
          <StoreScreen />
        </div>
      );
    default:
      return (
        <div>
          <MainScreen />
        </div>
      );
  }
};

const mapStateToProps = ({ game }) => ({
  screen: game.screen,
});

export default connect(mapStateToProps)(App);
