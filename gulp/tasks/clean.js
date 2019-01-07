import del from'del';
import { clean as config } from '../config';

export default function clean() {
  return del(config.dest);
}