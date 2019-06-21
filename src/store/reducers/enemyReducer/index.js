import { combineReducers } from 'redux';

import firewallStrength from './firewallStrength';
import program from './programs';
import name from './name';

export default combineReducers({ firewallStrength, program, name });
