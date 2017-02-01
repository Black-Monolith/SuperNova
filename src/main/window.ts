import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

export const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'dark'
  })
  window.loadURL(
    process.env.NODE_ENV === 'production'

      // Load file in app folder
      ? format({
        pathname: join(app.getAppPath(), 'app/index.html'),
        protocol: 'file:',
        slashes: true
      })

      // Load from Webpack DevServer
      // TODO: This should not be hardcoded
      : 'http://localhost:8080/app/index.html'
  )
  return window
}
