import gulp from 'gulp'
import githubPages from 'gulp-gh-pages'

const isDev = process.env.NODE_ENV !== 'production'
const config = require('../config').githubPages[isDev ? 'local' : 'production']

export default function ghPages(){
  return gulp.src(config.src)
    .pipe(githubPages(config.options));
}