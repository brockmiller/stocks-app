import { combineReducers } from 'redux';

// Reducers
import newsReducer from './news';
import marketReducer from './market'

// Combine Reducers
var reducers = combineReducers({
  news: newsReducer,
  market: marketReducer
});

export default reducers;
