import * as types from '../actions/action-types';

const initialState = {
  tickerSymbols: ['DOW', 'S&P 500', 'NASDAQ'],
  priceQuoteBySymbol: {}
}

const priceReducer = function(state = initialState, action) {
  let newState;
  switch(action.type) {
    case types.GET_PRICE_QUOTE_REQUEST:
      newState = {
        tickerSymbols: state.tickerSymbols,
        priceQuoteBySymbol: {...state.priceQuoteBySymbol}
      }
      let currentPrice = newState.priceQuoteBySymbol[action.symbol]
      newState.priceQuoteBySymbol[action.symbol] = { ...currentPrice, symbol: action.symbol }
      return newState

    case types.GET_PRICE_QUOTE_SUCCESS:
      newState = {
        tickerSymbols: state.tickerSymbols,
        priceQuoteBySymbol: {...state.priceQuoteBySymbol}
      }
      newState.priceQuoteBySymbol[action.symbol] = { ...action.data, symbol: action.symbol }

      return newState
  }

  return state
}

export default priceReducer;
