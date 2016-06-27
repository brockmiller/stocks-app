import { combineReducers } from 'redux';

// Reducers
import newsReducer from './news';

// Combine Reducers
var reducers = combineReducers({
  newsState: newsReducer
});

export default reducers;
