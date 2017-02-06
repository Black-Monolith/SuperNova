export type GoToAction = {
  type: 'GOTO',
  payload: {
    route: string
  }
}

export type RoutingAction =
  | GoToAction

export const goTo = (route: string): GoToAction => ({
  type: 'GOTO',
  payload: {
    route: route
  }
})

export const goHome = () => goTo('/home')
