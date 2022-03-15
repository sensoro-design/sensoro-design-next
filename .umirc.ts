import { join } from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default {
  mode: 'site',
  title: 'Sensoro Design',
  favicon: logo,
  logo,
  resolve: {
    includes: [
      'docs',
      'src',
    ]
  },
  outputPath: 'site',
  alias: {
    '@sensoro-design/react/icon': join(__dirname, 'icon')
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
  // dynamicImport: {},
  hash: true,
  menus: {
    '/components': [
      {
        title: '通用',
        children: [
          'Button/README.md',
          'Link/README.md',
          'Typography/README.md',
        ],
      },
      {
        title: '布局',
        children: [
          'Divider/README.md',
          'Grid/README.md',
          'Layout/README.md',
          'Space/README.md',
        ],
      },
      {
        title: '数据展示',
        children: [
          'Avatar/README.md',
          'Badge/README.md',
          'Calendar/README.md',
          'Card/README.md',
          'Carousel/README.md',
          'Collapse/README.md',
          'Comment/README.md',
          'Descriptions/README.md',
          'Empty/README.md',
          'Image/README.md',
          'List/README.md',
          'Popover/README.md',
          'Statistic/README.md',
          'Table/README.md',
          'Tabs/README.md',
          'Tag/README.md',
          'Timeline/README.md',
          'Tooltip/README.md',
          'Tree/README.md',
        ],
      },
      {
        title: '数据输入',
        children: [
          'AutoComplete/README.md',
          'Cascader/README.md',
          'Checkbox/README.md',
          'DatePicker/README.md',
          'Form/README.md',
          'Input/README.md',
          'InputTag/README.md',
          'InputNumber/README.md',
          'Mentions/README.md',
          'Radio/README.md',
          'Rate/README.md',
          'Select/README.md',
          'Slider/README.md',
          'Switch/README.md',
          'TimePicker/README.md',
          'Transfer/README.md',
          'TreeSelect/README.md',
          'Upload/README.md',
        ]
      },
      {
        title: '反馈',
        children: [
          'Alert/README.md',
          'Drawer/README.md',
          'Message/README.md',
          'Modal/README.md',
          'Notification/README.md',
          'Popconfirm/README.md',
          'Progress/README.md',
          'Result/README.md',
          'Spin/README.md',
          'Skeleton/README.md',
        ],
      },
      {
        title: '导航',
        children: [
          'Breadcrumb/README.md',
          'Dropdown/README.md',
          'Operations/README.md',
          'Menu/README.md',
          'PageHeader/README.md',
          'Pagination/README.md',
          'Steps/README.md',
        ],
      },
      {
        title: '其他',
        children: [
          'Affix/README.md',
          'Anchor/README.md',
          'ConfigProvider/README.md',
          'BackTop/README.md',
          'ResizeBox/README.md',
          'Trigger/README.md',
        ],
      },
    ]
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
  ],
  copy: isProduction ? [
    './dist/css/sen.min.css'
  ] : [],
  links: isProduction ? [
    { rel: 'stylesheet', href: '/sen.min.css' },
  ]: [],
};
