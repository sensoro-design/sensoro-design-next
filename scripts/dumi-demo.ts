import path from 'path';
import { glob, fsExtra } from '@walrus/cli-utils';

const Dir = path.join(__dirname, '../src/*');

(async () => {
  const components = glob.sync(`${Dir}`);

  components.forEach((componentDir) => {
    if (path.basename(componentDir).startsWith('_')) return;

    const docFile = path.join(componentDir, 'README.md');

    if (!fsExtra.existsSync(docFile)) return;

    const data = fsExtra.readFileSync(docFile).toString();

    if (data.includes('<code')) return;

    const demos = glob.sync(`${componentDir}/**/*.demo.tsx`);

    let demoStr = '\n\n';

    demos.forEach((demo, index) => {
      const demoData = fsExtra.readFileSync(demo).toString();
      const titleStart = demoData.indexOf('title:');
      const titleEnd = demoData.indexOf('\n', titleStart);

      const title = demoData.slice(titleStart + 6, titleEnd);

      demoStr += `###${title}\n\n`;

      demoStr += `<code src="./__demo__/${path.basename(demo)}" />`;

      if (index + 1 !== demos.length) {
        demoStr += `\n\n`;
      }
    });

    fsExtra.writeFileSync(docFile, data.replace('## API', `## API${demoStr}`));
  })
})();
