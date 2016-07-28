import * as types from './types'
import { getCurrentPrice } from '../services/stock-market'
import { get } from 'lodash'

export function getPriceQuoteSuccess(symbol, priceData) {
  return {
    type: types.GET_PRICE_QUOTE_SUCCESS,
    symbol: symbol,
    data: priceData
  }
}

export function getPriceQuoteRequest(symbol) {
  return {
    type: types.GET_PRICE_QUOTE_REQUEST,
    symbol: symbol
  }
}

export function fetchPriceQuote(symbol) {
  return (dispatch) => {
    dispatch(getPriceQuoteRequest(symbol))

    return getCurrentPrice(symbol)
      .then((result) => dispatch(getPriceQuoteSuccess(symbol, result)))
  }
}

export function refreshWatchListItems() {
  return (dispatch, getState) => {
    let watchList = get(getState(), 'user.watchList', [])
    watchList.forEach((symbol) => dispatch(fetchPriceQuote(symbol)))
  }
}
