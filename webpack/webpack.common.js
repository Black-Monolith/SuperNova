const webpack = require('webpack')
const CleanWebpack = require('clean-webpack-plugin')
const HtmlWebpack = require('html-webpack-plugin')
const { join } = require('path')

const projectRoot = exports.projectRoot = join(__dirname, '..')
const isProduction = exports.isProduction = process.env.NODE_ENV === 'production'

/**
 * Configuration common paths
 */
const paths = exports.paths = {
  source: join(projectRoot, 'src'),
  build: join(projectRoot, 'app')
}


/**
 * Common configuration between development and production
 */
const config = exports.config =
  {
    resolve: {
      modules: [
        'node_modules'
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }


/**
 * Configuration splitted in functions for modularity
 */
const parts = exports.parts = {

  rendererHotReload: () => ({
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
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }),

  // Compile sources through TypeScript compiler
  // then Babel for additional transformations
  compileTypescript: () => ({
    module: {
      loaders: [
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'source-map-loader'
        },
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          use: 'source-map-loader'
        },
        {
          test: /\.tsx?$/,
          loaders: ['babel-loader', 'ts-loader']
        }
      ]
    }
  }),

  // Define a variable statically during build process
  setFreeVariable: (key, value) => ({
    plugins: [
      new webpack.DefinePlugin({
        [key]: JSON.stringify(value)
      })
    ]
  }),

  // Minify and optimize code by removing unused code, such as
  // conditions involving variables statically resolved
  // after using setFreeVariable
  minify: () => ({
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }),

  loadFonts: paths => ({
    module: {
      loaders: [
        {
          test: /\.woff(2)?$/,
          loader: 'url-loader',
          query: {
            name: 'fonts/[hash].[ext]'
          },
          include: paths
        }
      ]
    }
  }),

  setupStyles: paths => ({
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
          include: paths
        }
      ]
    }
  }),

  createHtmlIndex: (template) => ({
    plugins: [
      new HtmlWebpack({
        template,

        // Do not append chunks to body as we use `require`
        // directly in template to load renderer chunk
        excludeChunks: ['main']
      })
    ]
  }),

  extractBundle: (options) => ({
    entry: [options.entry],
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  }),

  clean: (path) => ({
    plugins: [
      new CleanWebpack([path], {
        root: process.cwd()
      })
    ]
  })
}
