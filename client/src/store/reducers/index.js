import { combineReducers } from 'redux';
import auth from './auth';
import notification from './notification';
import theme from './theme';
const reducers = combineReducers({ auth, notification, theme});

export default reducers