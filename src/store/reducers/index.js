import { combineReducers } from 'redux';

import terminal from './terminalReducer';
import player from './playerReducer';

export default combineReducers({ terminal, player });
