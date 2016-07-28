import { combineReducers } from 'redux';

// Reducers
import newsReducer from './news'
import marketReducer from './market'
import userReducer from './user'

// Combine Reducers
var reducers = combineReducers({
  news: newsReducer,
  market: marketReducer,
  user: userReducer
});

export default reducers;
