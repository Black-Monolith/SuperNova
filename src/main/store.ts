import { createStore, Action } from 'redux'
import when from 'when-switch'
import { setAppend } from 'monolite'
import { createWindow } from './window'

type State = {
  windows: Electron.BrowserWindow[]
}

const initialState: State = {
  windows: []
}

const reducer = (state: State, action: Action) =>
  when(action.type)
    .is('NEW_WINDOW', () =>
      setAppend(state, _ => _.windows)(createWindow())
    )
    .else(state)

export default createStore<State>(reducer, initialState)
