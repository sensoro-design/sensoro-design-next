import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default {
  mode: 'site',
  title: 'Sensoro Design',
  favicon: logo,
  logo,
  resolve: {
    includes: [
      'docs',
      'src/Button'
    ]
  },
  navs: [
    null,
    {
      title: '友情链接',
      children: [
        { title: 'AMap', path: 'https://amap.xingkang.wang' },
        { title: 'Watermark', path: 'https://watermark.xingkang.wang' },
        { title: 'Hooks', path: 'https://hooks.xingkang.wang' }
      ]
    },
    {
      title: 'GitHub',
      path: 'https://github.com/sensoro-design/sensoro-design'
    }
  ],
  ignoreMomentLocale: true,
  dynamicImport: {},
  hash: true,
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@sensoro-design/react',
        libraryDirectory: 'es',
        style: (name: string) => {
          if(name === '@sensoro-design/lib/utils'){
            return false;
          }
          return `${name}/style`;
        },
        camel2DashComponentName: false,
      },
    ],
  ]
};
