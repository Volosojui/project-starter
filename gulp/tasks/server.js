import gulp from 'gulp'
import browserSync from 'browser-sync'

const config = require('../config').browserSync
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init(config);
  done();
}

export default {
  serve: serve,
  reload: reload,
}