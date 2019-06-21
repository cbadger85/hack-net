import { combineReducers } from 'redux';

import terminal from './terminalReducer';
import runTerminal from './runTerminalReducer';
import player from './playerReducer';
import enemy from './enemyReducer';
import game from './gameReducer';

export default combineReducers({ terminal, runTerminal, player, enemy, game });
