import { CounterAction } from './counter'
import { RoutingAction } from './routing'

export type Action =
  | CounterAction
  | RoutingAction
