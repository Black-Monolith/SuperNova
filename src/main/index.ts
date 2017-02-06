import { app } from 'electron'
import store from './store'
import { setMenu } from './menu'

/**
 * Electron Main Process
 * Entry point of the application
 */

app.on('ready', () => {
  setMenu()
  store.dispatch({ type: 'NEW_WINDOW' })
})
