// import '@babel/polyfill';
// Только для сборки javascript
import webpack from 'webpack'

const config = require('../../webpack.config.scripts.js')

export default function scripts(cb) {
  webpack(config, (error, stats) => {
    // TODO: notifier
    // if (error) throw new gutil.PluginError('webpack', error);
    // console.log('[webpack]', stats.toString());
    cb();
  });
}