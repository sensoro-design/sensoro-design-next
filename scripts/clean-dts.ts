import path from 'path';
import { glob, fsExtra } from '@walrus/cli-utils';

const ROOT_DIR = path.join(__dirname, '../');

(async () => {
  const files = glob.sync(`${ROOT_DIR}/**/*.d.ts`);

  files.forEach((file) => {
    fsExtra.removeSync(file);
  })
})()
