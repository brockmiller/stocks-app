import * as types from './action-types'

export function getNewsSuccess(news) {
  return {
    type: types.GET_NEWS_SUCCESS,
    news
  }
}
