const merge = require('webpack-merge')
const { join } = require('path')
const common = require('./webpack.common')
const mainTarget = require('./targets/webpack.main')
const rendererTarget = require('./targets/webpack.renderer')

/**
 * Webpack Production Build Configuration :
 * Compile both mainTarget and rendererTarget using production config
 */
const config = module.exports = merge.smart(
  mainTarget,
  rendererTarget,
  common.parts.clean(common.paths.build),
  common.parts.setFreeVariable('process.env.NODE_ENV', 'production'),
  common.parts.compileTypescript(),
  common.parts.minify()
)
