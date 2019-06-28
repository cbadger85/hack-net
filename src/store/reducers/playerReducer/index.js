import { combineReducers } from 'redux';

import name from './name';
import credits from './credits';
import programs from './programs';
import firewallStrength from './firewallStrength';
import maxPlayerHealth from './maxPlayerHealth';
import memoryBuffer from './memoryBuffer';

export default combineReducers({
  name,
  credits,
  firewallStrength,
  maxPlayerHealth,
  programs,
  memoryBuffer,
});
