import { combineReducers } from 'redux';

// Reducers
import newsReducer from './news';
import priceReducer from './price'

// Combine Reducers
var reducers = combineReducers({
  newsState: newsReducer,
  priceData: priceReducer
});

export default reducers;
