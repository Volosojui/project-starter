import path from 'path';
// import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

const SRC = './app';
const BUILD = './build';
const DIST = './dist';

const isProduction = process.env.NODE_ENV === 'production';

let devtool = 'none'
let plugins = []

if (process.argv.indexOf('--sourcemap=true') !== -1) {
  devtool = 'source-map'
}

if (isProduction) {
  plugins.push(new CompressionPlugin({
    filename: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
  }))
}

module.exports = {
  context: path.join(__dirname, SRC),

  entry: isProduction ? './scripts/production.js' : './scripts/local.js',

  output: {
    path: path.join(__dirname, isProduction ? DIST : BUILD),
    filename: isProduction ? 'js/bundle.min.js' : 'js/bundle.js'
  },

  mode: isProduction ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },

  devtool: devtool,

  optimization: {
    minimize: isProduction ? true : false
  },

  resolve: {
    modules: ['bower_components', 'node_modules'],
    extensions: ['.js'],
    alias: {
      'jquery': 'jquery/dist/jquery',
    }
  },

  plugins: plugins
}