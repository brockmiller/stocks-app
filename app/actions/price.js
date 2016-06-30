import * as types from './types'
import { getCurrentPrice } from '../services/stock-market'

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

function quoteUrl(symbol) {
  return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${symbol}%22)&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=`
}

export function fetchPriceQuote(symbol) {
  return (dispatch) => {
    dispatch(getPriceQuoteRequest(symbol))

    return getCurrentPrice(symbol)
      .then((result) => dispatch(getPriceQuoteSuccess(symbol, result)))
  }
}
