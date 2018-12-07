import { combineReducers } from 'redux';
import issues from './issues';
import details from './details';

export const app = combineReducers({
  issues,
  details
})