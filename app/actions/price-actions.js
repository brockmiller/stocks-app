import * as types from './action-types'

export function getStockPriceSuccess(symbol, priceData) {
  return {
    type: types.GET_STOCK_PRICE_SUCCESS,
    symbol: symbol,
    data: priceData
  }
}
