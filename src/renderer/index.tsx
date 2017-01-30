import { webFrame } from 'electron'
import React from 'react'
import { render } from 'react-dom'
import { cssRule } from 'typestyle'
import App from './containers/App'

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

render(
  <App projectName='SuperNova' />,
  document.getElementById('app-root')
)
