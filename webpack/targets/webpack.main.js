const { join } = require('path')
const merge = require('webpack-merge')
const common = require('../webpack.common')

/**
 * Webpack Main Process Config :
 * Executed with `webpack --watch` for development
 */
const config = module.exports = merge(
  common.config,
  {
    target: 'electron',
    devtool: 'source-map',

    entry: {
      main: join(common.paths.source, 'main/index')
    },

    output: {
      path: common.paths.build,
      filename: '[name].js'
    }
  },

  // If production, use production config clean()
  common.isProduction ? {} : common.parts.clean(common.paths.build),

  common.parts.compileTypescript()
)
