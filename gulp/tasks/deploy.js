import gulp from 'gulp'
import githubPages from 'gulp-gh-pages'

const config = require('../config').githubPages

export default function deploy(){
  return gulp.src(config.src)
    .pipe(githubPages(config.options));
}