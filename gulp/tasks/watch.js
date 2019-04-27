import gulp from 'gulp';

import scripts from './scripts';
import iconfont from './iconfont';
import styles from './styles';
import html from './html';
import server from './server';

export default function localWatch(){
  gulp.watch('./app/scripts/**/*', gulp.series(scripts));
  gulp.watch('./app/iconfont/icons/*.svg', gulp.series(iconfont, server.reload));
  gulp.watch('./app/stylesheets/**/*', gulp.series(styles));
  gulp.watch('./app/templates/**/*', gulp.series(html));
};