import * as types from '../actions/action-types';

const initialState = {
  news: []
};

const newsReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_NEWS_SUCCESS:
      return Object.assign({}, state, { news: action.news });
  }

  return state;
}

export default newsReducer;
