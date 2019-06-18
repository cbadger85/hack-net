import blessed from 'blessed';

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed hooks demo',
});

export default screen;
