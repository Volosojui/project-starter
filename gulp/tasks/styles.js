import gulp from 'gulp'
import gulpIf from 'gulp-if'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'

const isDev = process.env.NODE_ENV !== 'production'
const shouldCreateSourcemap = process.argv.indexOf('--sourcemap=true') !== -1
const config = require('../config').styles[isDev ? 'local' : 'production']

export default function styles(){
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(gulpIf(shouldCreateSourcemap, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulpIf((shouldCreateSourcemap || !isDev), cleanCSS()))
    .pipe(rename(config.sass.outputName))
    .pipe(gulpIf(shouldCreateSourcemap, sourcemaps.write()))
    .pipe(gulp.dest(config.sass.dest));
}