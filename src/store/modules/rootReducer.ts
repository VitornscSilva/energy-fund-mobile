import {combineReducers} from 'redux';

import auth from './auth/reducer';
import userInfo from './userInfo/reducer';

export default combineReducers({
  auth,
  userInfo,
});
