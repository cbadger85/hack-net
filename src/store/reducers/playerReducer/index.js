import { combineReducers } from 'redux';

import name from './name';
import credits from './credits';
import programs from './programs';
import firewallStrength from './firewallStrength';

export default combineReducers({ name, credits, firewallStrength, programs });
