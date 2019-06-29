import { combineReducers } from 'redux';

import firewallStrength from './firewallStrength';
import programs from './programs';
import name from './name';
import difficulty from './difficulty';
import credits from './credits';

export default combineReducers({
  firewallStrength,
  programs,
  name,
  difficulty,
  credits,
});
