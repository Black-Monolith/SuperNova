import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import DevTools from './containers/DevTools'

const enhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunkMiddleware)
  : compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )

const store = createStore(rootReducer, enhancer)

// Enable reducers hot reload
if (module.hot)
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  )

export default store
