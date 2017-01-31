const { join } = require('path')
const merge = require('webpack-merge')
const common = require('../webpack.common')

/**
 * Webpack Renderer Process Config :
 * Executed with `webpack-dev-server` for development
 */
const config = module.exports = merge(
  common.config,

  // Enable HotReload only for development
  common.isProduction ? {} : common.parts.rendererHotReload(),

  {
    target: 'electron-renderer',
    devtool: 'inline-source-map',

    entry: {
      renderer: [
        join(common.paths.source, 'renderer/index')
      ]
    },

    output: {
      path: common.paths.build,
      publicPath: common.isProduction ? '' : '/app/',
      filename: '[name].js'
    }
  },
  common.parts.createHtmlIndex(join(common.paths.source, 'renderer/index.html')),
  common.parts.compileTypescript()
)
