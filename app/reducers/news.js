import * as types from '../actions/types';
import { orderBy } from 'lodash'
import moment from 'moment'
import 'moment-timezone'

function parseTime(t) {
  return moment.tz(t, 'ddd, DD MMM YYYY HH:mm:ss', 'UTC').valueOf()
}

const initialState = {
  headlines: []
};

const newsReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_NEWS_HEADLINES_SUCCESS:
      const headlines = action.news.map(n => ({ ...n, moment: parseTime(n.pubDate) }))
      return { ...state, headlines: orderBy(headlines, 'moment', 'desc') }
  }

  return state;
}

export default newsReducer;
