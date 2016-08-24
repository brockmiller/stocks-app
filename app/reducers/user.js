import * as types from '../actions/types';
import { combineReducers } from 'redux';

const initialState = {
  watchList: ['FB', 'AAPL', 'AMZN', 'NFLX', 'GOOGL', 'CSCO', 'TSLA', 'MSFT', 'TWLO', 'TWTR'],
  prefs: {
    deltaUnitsAsPercentage: true
  }
};

function watchListReducer(state = initialState.watchList, action) {
  // switch(action.type) {
  // }
  return state
}

function prefsReducer(state = initialState.prefs, action) {
  switch(action.type) {
    case types.TOGGLE_PRICE_DELTA_UNITS:
      return {
        ...state,
        deltaUnitsAsPercentage: !state.deltaUnitsAsPercentage
      }
  }

  return state
}


const userReducer = combineReducers({
  watchList: watchListReducer,
  prefs: prefsReducer
})

export default userReducer
