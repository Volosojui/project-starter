import gulp from 'gulp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';

const isDev = process.env.NODE_ENV !== 'production';
const config = require('../config').svgicons[isDev ? 'local' : 'production'];

export default function svgs(){
  return gulp.src(config.src, config.options)
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(cheerio({
      run: function($){
        $('svg').attr('aria-hidden', 'true');
      }
    }))
    .pipe(gulp.dest(config.dest));
};