import { combineReducers } from 'redux';

import terminalOutput from './terminalOutput';
import isTerminalActive from './isTerminalActive';
import history from './history';

export default combineReducers({ terminalOutput, isTerminalActive, history });
