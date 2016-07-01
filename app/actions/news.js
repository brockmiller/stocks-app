import * as types from './types'
import { getMarketHeadlines } from '../services/stock-market'

export function getNewsHeadlinesSuccess(news) {
  return {
    type: types.GET_NEWS_HEADLINES_SUCCESS,
    news
  }
}

export function getNewsHeadlinesRequest() {
  return {
    type: types.GET_NEWS_HEADLINES_REQUEST
  }
}

function extractYQLNewsItems(data) {
  return
}

export function refreshNewsHeadlines() {
  return (dispatch) => {
    dispatch(getNewsHeadlinesRequest())

    return getMarketHeadlines()
      .then((result) => dispatch(getNewsHeadlinesSuccess(result)))
  }
}
