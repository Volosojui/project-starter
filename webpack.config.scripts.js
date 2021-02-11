import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';

const SRC = './app';
const BUILD = './build';

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

  entry: './scripts/index.js',

  output: {
    path: path.join(__dirname, BUILD),
    filename: isProduction ? 'js/bundle.min.js' : 'js/bundle.js',
  },

  mode: isProduction ? 'production' : 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  devtool: devtool,

  optimization: {
    minimize: isProduction,
  },

  resolve: {
    modules: ['bower_components', 'node_modules'],
    extensions: ['.js'],
    // alias: {
    //   'jquery': 'jquery/dist/jquery',
    // },
  },

  plugins: plugins,
}