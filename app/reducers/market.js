import * as types from '../actions/types'
import { combineReducers } from 'redux'

const tickerSymbols = [
  'FB',
  'AMZN',
  'GOOGL',
  'CSCO',
  'AAPL',
  'TSLA',
  'NFLX',
  'MSFT',
  'PANW',
  'BRK-B',
  'BABA',
  'BIDU',
  'TWTR',
  'YHOO',
  'VOO',
  'NOBL',
  'SSO',
  'VXX',
  'SDS',
  'SPY',
  'QQQ'
]
const indexSymbols = ['^DJI', '^GSPC', '^INX']

const initialState = {
  status: {
    open: true
  },
  priceBySymbol: {
    '^DJI': {
      "Name": "DOW",
      "Symbol": "^DJI",
      "LastPrice": 17567,
      "Change": 0.620000000000005,
      "ChangePercent": 0.648535564853561,
      "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
      "MarketCap": 527037833500,
      "Volume": 1264859,
      "ChangeYTD": 105.26,
      "ChangePercentYTD": -8.58825764772944
    },
    '^GSPC': {
      "Name": "S&P 500",
      "Symbol": "^GSPC",
      "LastPrice": 2104.51,
      "Change": 5.38,
      "ChangePercent": 0.26,
      "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
      "MSDate": 42552.5023032437,
      "MarketCap": 527037833500,
      "Volume": 1264859,
      "ChangeYTD": 105.26,
      "ChangePercentYTD": -8.58825764772944,
    },
    '^INX': {
      "Name": "NASDAQ",
      "Symbol": "^INX",
      "LastPrice": 4868.24,
      "Change": 25.50,
      "ChangePercent": 0.53,
      "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
      "MSDate": 42552.5023032437,
      "MarketCap": 527037833500,
      "Volume": 1264859,
      "ChangeYTD": 105.26,
      "ChangePercentYTD": -8.58825764772944,
    }
  }
}

const marketReducer = combineReducers({
  status: statusReducer,
  priceBySymbol: priceReducer
})

const statusReducer = function(state = initialState, action) {
  return state;
}

const priceReducer = function(state = initialState, action) {
  let newState;
  switch(action.type) {
    case types.GET_PRICE_QUOTE_REQUEST:
      // newState.priceBySymbol[action.symbol] = { ...currentQuote, Symbol: action.symbol, isFetching: true }
      newState = { ...state, [action.symbol]: {isFetching: true} }
      console.log(state)
      console.log(newState)
      return newState
    case types.GET_PRICE_QUOTE_SUCCESS:
      newState = { ...state, [action.symbol]: { ...action.data, isFetching: false} }
      console.log(state)
      console.log(newState)
      return newState
  }

  return state
}

export default priceReducer;
