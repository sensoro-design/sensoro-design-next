// 自定义 webpack 构建配置
const path = require('path');
const webpack = require('webpack');
const { version } = require('../package.json');

// 组件 dist 打包
exports.component = (config) => {
  config.output.library = 'sen';
  config.entry = path.resolve(__dirname, '../src/index.tsx');
  config.plugins.pop();
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: `SensoroDesign v${version}\n\nCopyright 2019-present, SensoroFE, Inc.\nAll rights reserved.\n`,
    }),
  );

  config.output.filename = 'sen.min.js';
};
