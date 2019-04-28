import gulp from 'gulp';

import scripts from './scripts';
import iconfont from './iconfont';
import svgs from './svgs';
import styles from './styles';
import html from './html';
import server from './server';

const config = require('./../config').watch;

export default function localWatch(){
  gulp.watch(config.scripts, gulp.series(scripts));
  gulp.watch(config.iconfont, gulp.series(iconfont, html));
  gulp.watch(config.svgicons, gulp.series(svgs, html));
  gulp.watch(config.styles, gulp.series(styles));
  gulp.watch(config.pug, gulp.series(html));
};