import { set } from 'monolite'
import { Reducer } from 'redux'
import { RoutingAction } from '../actions/routing'
import when from 'when-switch'

export type RoutingState = {
  route: string
}

const INITIAL_STATE = {
  route: '/home'
}

const goTo = (state: RoutingState, route: string) =>
  set(state, _ => _.route)(route)

const routingReducer: Reducer<RoutingState> =
  (state: RoutingState = INITIAL_STATE, action: RoutingAction) =>
    when(action.type)
      .is('GOTO', () => goTo(state, action.payload.route))
      .else(state)

export default routingReducer
