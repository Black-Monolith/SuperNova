const merge = require('webpack-merge')
const { join } = require('path')
const common = require('./webpack.common')
const mainTarget = require('./target/main')
const rendererTarget = require('./target/renderer')

/**
 * Webpack Production Build Configuration :
 * Compile both mainTarget and rendererTarget using production config
 */
const config = module.exports = merge.smart(
  mainTarget,
  rendererTarget,
  {
    // Use same target for both main and renderer processes
    target: 'electron',
    devtool: 'source-map'
  },
  common.parts.clean(common.paths.build),
  common.parts.setFreeVariable('process.env.NODE_ENV', 'production'),
  common.parts.minify()
)
