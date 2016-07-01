import * as types from '../actions/types';

const initialState = {
  headlines: []
};

const newsReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_NEWS_SUCCESS:
      return { ...state, headlines: action.news };
  }

  return state;
}

export default newsReducer;
