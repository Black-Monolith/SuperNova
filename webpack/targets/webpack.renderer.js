const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('../webpack.common')

/**
 * Webpack Renderer Process Config :
 * Executed with `webpack-dev-server` for development
 */
const config = module.exports = merge(
  common.config,
  {
    target: 'electron-renderer',
    devtool: 'source-map',

    devServer: {
      hot: true,
      host: 'localhost',
      port: 8080,
      historyApiFallback: true
    },

    entry: {
      renderer: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        join(common.paths.source, 'renderer/index')
      ]
    },

    output: {
      path: common.paths.build,
      publicPath: common.isProduction ? '' : '/app/',
      filename: '[name].js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  },
  common.parts.createHtmlIndex(join(common.paths.source, 'renderer/index.html')),
  common.parts.compileTypescript()
)
