import { combineReducers } from 'redux';

import firewallStrength from './firewallStrength';
import program from './programs';
import name from './name';
import difficulty from './difficulty';

export default combineReducers({ firewallStrength, program, name, difficulty });
