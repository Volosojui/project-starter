import gulp from 'gulp'
import pug from 'gulp-pug'
import svgstore from 'gulp-svgstore'
import rename from 'gulp-rename'
import inject from 'gulp-inject'
import plumber from 'gulp-plumber'
import cleanCSS from 'gulp-clean-css'

const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config').pug[isDev ? 'local' : 'production']

function pugToHtml(){
  const sources = gulp.src(config.inject.src, {read: false});
  const svgs = gulp.src(config.svgicons.src, config.svgicons.options)
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file){
    return file.contents.toString();
  }

  let pugOptions = {};

  if (isDev) pugOptions.pretty = true

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(pug(pugOptions))
    .pipe(inject(sources, config.inject.options))
    .pipe(inject(svgs, {removeTags: true, transform: fileContents}))
    .pipe(gulp.dest(config.dest));
}

// Imported css files
function minifyCss(){
  return gulp.src(config.minifyCss.src)
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.minifyCss.dest));
}

export default function html(cb){
  if (!isDev) {
    return gulp.series(pugToHtml, minifyCss)(cb);
  }

  return gulp.series(pugToHtml)(cb);
}