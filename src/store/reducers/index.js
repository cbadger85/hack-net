import { combineReducers } from 'redux';

import terminal from './terminalReducer';
import player from './playerReducer';
import enemy from './enemyReducer';
import game from './gameReducer';

export default combineReducers({ terminal, player, enemy, game });
