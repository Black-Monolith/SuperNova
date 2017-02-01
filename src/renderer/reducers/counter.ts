import { set } from 'monolite'
import { Action, Reducer } from 'redux'
import when from 'when-switch'

export type CounterState = {
  value: number
}

const increment = (state: CounterState) =>
  set(state, _ => _.value)(value => value + 1)

const decrement = (state: CounterState) =>
  set(state, _ => _.value)(value => value - 1)

const counterReducer: Reducer<CounterState> =
  (state: CounterState, action: Action) =>
    when(action.type)
      .is('INCREMENT', () => increment(state))
      .is('DECREMENT', () => decrement(state))
      .else(state)

export default counterReducer
