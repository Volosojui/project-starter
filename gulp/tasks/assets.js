import gulp from 'gulp'
import plumber from 'gulp-plumber'

const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config').assets[isDev ? 'local' : 'production']

export default function assets(){
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
}