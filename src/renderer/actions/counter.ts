import returnof from 'returnof'

export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})

const incrementReturn = returnof(increment)
const decrementReturn = returnof(decrement)

export type CounterAction =
  | typeof incrementReturn
  | typeof decrementReturn
