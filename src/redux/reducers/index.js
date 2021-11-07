import { combineReducers } from 'redux';

import user from './userReducer';
import loading1 from './loadingReducer';

const rootReducer = combineReducers({ user , loading1 });

export default rootReducer;