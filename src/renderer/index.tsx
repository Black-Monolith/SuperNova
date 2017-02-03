import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { cssRule } from 'typestyle'
import store from './store'
import App from './containers/App'
import { AppContainer } from 'react-hot-loader'

/**
 * Renderer Process
 * Entry Point of each window
 */

// Basic body style reset
cssRule('html, body, #app-root', {
  height: '100%',
  width: '100%',
  padding: 0,
  margin: 0,
  // Disable text selection
  '-webkit-user-select': 'none'
})

// Disable zoom
webFrame.setVisualZoomLevelLimits(1.0, 1.0)

const renderApp = () => {
  const NextApp: typeof App = require('./containers/App').default

  render(
    <AppContainer>
      <NextApp projectName='SuperNova' store={store} />
    </AppContainer>,
    document.getElementById('app-root')
  )
}

if (module.hot)
  module.hot.accept('./containers/App', renderApp)

renderApp()
