import { app } from 'electron'
import store from './store'

/**
 * Electron Main Process
 * Entry point of the application
 */

app.on('ready', () =>
  store.dispatch({ type: 'NEW_WINDOW' })
)
