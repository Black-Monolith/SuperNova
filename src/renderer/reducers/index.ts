import { combineReducers } from 'redux'
import counterReducer, { CounterState } from './counter'

export type State = {
  counter: CounterState
}

export const INITIAL_STATE: State = {
  counter: {
    value: 0
  }
}

export default combineReducers<State>({
  counter: counterReducer
})
