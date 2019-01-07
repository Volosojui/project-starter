import gulp from 'gulp'

const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config').copy[isDev ? 'local' : 'production']

function copyFavicons(cb) {
  return gulp.src(config.favicons.src)
    .pipe(gulp.dest(config.favicons.dest));
}

function copyFonts(cb) {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
}

export default function copy(cb) {
  return gulp.parallel(copyFavicons, copyFonts)(cb);
}