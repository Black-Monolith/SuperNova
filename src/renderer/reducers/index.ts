import { combineReducers } from 'redux'
import routingReducer, { RoutingState } from './routing'
import counterReducer, { CounterState } from './counter'

export type State = {
  routing: RoutingState
  counter: CounterState
}

export default combineReducers<State>({
  routing: routingReducer,
  counter: counterReducer
})
