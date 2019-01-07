import gulp from 'gulp'
import gulpIconfont from 'gulp-iconfont'
import consolidate from 'gulp-consolidate'

const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config').iconfont[isDev ? 'local' : 'production']

export default function iconfont(){
  return gulp.src(config.icons.src)
    .pipe(gulpIconfont(config.icons.options))
    .on('glyphs', function(glyphs, options){
      gulp.src(config.templates.styles.src)
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: config.icons.options.fontName,
          fontPath: config.icons.options.cssFontPath,
          className: config.templates.styles.className
        }))
        .pipe(gulp.dest(config.templates.styles.dest));
    })
    .pipe(gulp.dest(config.icons.dest));
}