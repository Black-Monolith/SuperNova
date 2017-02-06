export type IncrementAction = { type: 'INCREMENT' }
export type DecrementAction = { type: 'DECREMENT' }

export type CounterAction =
  | IncrementAction
  | DecrementAction

export const increment = (): IncrementAction => ({ type: 'INCREMENT' })
export const decrement = (): DecrementAction => ({ type: 'DECREMENT' })
