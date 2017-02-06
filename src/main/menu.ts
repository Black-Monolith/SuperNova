import store from './store'
import { app, Menu } from 'electron'

export const createMenu = () =>
  Menu.buildFromTemplate([
    {
      label: app.getName()
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'New Note',
          accelerator: 'CommandOrControl+N',
          click: () =>
            store.dispatch({ type: 'NEW_WINDOW' })
        },
        {
          label: 'Close Note',
          role: 'close'
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'paste'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Switch Theme',
          accelerator: 'CommandOrControl+Shift+D',
          click: () =>
            store.dispatch({ type: 'SWITCH_THEME' })
        }
      ]
    }
  ])

export const setMenu = () =>
  Menu.setApplicationMenu(createMenu())
