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

const initialPriceBySymbol = {
  FB: {
    "Name": "DOW",
    "Symbol": "FB",
    "LastPrice": 17567,
    "Change": 0.620000000000005,
    "ChangePercent": 0.648535564853561,
    "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
    "MarketCap": 527037833500,
    "Volume": 1264859,
    "ChangeYTD": 105.26,
    "ChangePercentYTD": -8.58825764772944
  },
  AAPL: {
    "Name": "S&P 500",
    "Symbol": "AAPL",
    "LastPrice": 2104.51,
    "Change": 5.38,
    "ChangePercent": 0.26,
    "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
    "MSDate": 42552.5023032437,
    "MarketCap": 527037833500,
    "Volume": 1264859,
    "ChangeYTD": 105.26,
    "ChangePercentYTD": -8.58825764772944
  },
  AMZN: {
    "Name": "NASDAQ",
    "Symbol": "AMZN",
    "LastPrice": 4868.24,
    "Change": 25.50,
    "ChangePercent": 0.53,
    "Timestamp": "Fri Jul 1 12:03:19 UTC-04:00 2016",
    "MSDate": 42552.5023032437,
    "MarketCap": 527037833500,
    "Volume": 1264859,
    "ChangeYTD": 105.26,
    "ChangePercentYTD": -8.58825764772944
  }
}


const quoteReducer = function(state = initialPriceBySymbol, action) {
  let newState;
  switch(action.type) {
    case types.GET_PRICE_QUOTE_REQUEST:
      newState = { ...state }
      newState[action.symbol] = newState[action.symbol] || { Symbol: action.symbol }
      newState[action.symbol].isFetching = true
      return newState
    case types.GET_PRICE_QUOTE_SUCCESS:
      newState = { ...state, [action.symbol]: { ...action.data, isFetching: false} }
      return newState
  }

  return state
}


const marketReducer = combineReducers({
  quotes: quoteReducer
})


export default marketReducer;
