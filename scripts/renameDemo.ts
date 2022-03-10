import path from 'path';
import { glob, fsExtra } from '@walrus/cli-utils';

const Dir = path.join(__dirname, '../src');

(async () => {
  const files = glob.sync(`${Dir}/**/__demo__/style.demo.tsx)`);

  console.log(files);

  return;

  if (!(Array.isArray(files) && files.length)) return;

  files.forEach(file => {
    const parse = path.parse(file);
    const newPath = path.join(parse.dir + `/${parse.name}.demo.tsx`);

    const result = fsExtra.readFileSync(file);

fsExtra.writeFileSync(file, `
/**
 * title:
 * desc:
 */
${result.toString()}
`)

    fsExtra.rename(file, newPath)
});
})();
