import * as types from '../actions/action-types';

const initialState = {
  tickerMap: {}
}

const priceReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_STOCK_PRICE_SUCCESS:
      let newTick = Object.assign({}, state)
      newTick.tickerMap[action.symbol] = action.data
      return newTick
  }

  return state
}

export default priceReducer;
