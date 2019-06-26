import { combineReducers } from 'redux';

import terminal from './terminalReducer';
import runTerminal from './runTerminalReducer';
import player from './playerReducer';
import enemy from './enemyReducer';
import game from './gameReducer';
import callStack from './callStackReducer';
import timer from './timerReducer';

export default combineReducers({
  terminal,
  runTerminal,
  player,
  enemy,
  game,
  callStack,
  timer,
});
