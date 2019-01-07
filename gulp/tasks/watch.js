import gulp from 'gulp'

import scripts from './scripts'
import iconfont from './iconfont'
import styles from './styles'
import html from './html';
import server from './server';

export default function localWatch(){
  gulp.watch('./app/scripts/**/*', gulp.series(scripts, server.reload));
  gulp.watch('./app/iconfont/icons/*.svg', gulp.series(iconfont, server.reload));
  gulp.watch('./app/stylesheets/**/*', gulp.series(styles, server.reload));
  gulp.watch('./app/templates/**/*', gulp.series(html, server.reload));
}