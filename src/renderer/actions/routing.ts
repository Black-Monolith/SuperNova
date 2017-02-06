import returnof from 'returnof'

export const goTo = (route: string) => ({
  type: 'GOTO',
  payload: {
    route: route
  }
})

const goToReturn = returnof(goTo)

export type RoutingAction =
  | typeof goToReturn
