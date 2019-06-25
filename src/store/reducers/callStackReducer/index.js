import { combineReducers } from 'redux';

import stack from './stack';
import buffer from './buffer';

export default combineReducers({ stack, buffer });
