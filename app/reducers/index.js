import { combineReducers } from 'redux';

// Reducers
import newsReducer from './news';
import priceReducer from './price'

// Combine Reducers
var reducers = combineReducers({
  newsData: newsReducer,
  priceData: priceReducer
});

export default reducers;
