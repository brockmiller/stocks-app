import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

export default store;
