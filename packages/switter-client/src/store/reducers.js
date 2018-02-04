import { combineReducers } from 'redux';
import messagesReducer from './reducers/messages';

const reducers = combineReducers({
  messages: messagesReducer,
});

export default reducers;
