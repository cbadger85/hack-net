import React from 'react';
import { connect } from 'react-redux';

import MainLayout from './components/MainLayout';
import RunLayout from './components/RunLayout';

const App = ({ screen }) => {
  switch (screen) {
    case 'run':
      return (
        <div>
          <RunLayout />
        </div>
      );
    default:
      return (
        <div>
          <MainLayout />
        </div>
      );
  }
};

const mapStateToProps = ({ game }) => ({
  screen: game.screen,
});

export default connect(mapStateToProps)(App);
