import React from 'react';
import { render } from 'react-blessed';
import screen from './screen';
import store from './store';
import App from './components/App';
import ReduxProvider from './ReduxProvider';
import Example from './examples';

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  screen
);
