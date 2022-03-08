// 自定义 webpack 构建配置
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { version } = require('../package.json');

// 组件 dist 打包
exports.component = (config) => {
  config.entry = path.resolve(__dirname, '../components/index.tsx');
  config.plugins.pop();
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: `SensoroDesign v${version}\n\nCopyright 2019-present, SensoroFE, Inc.\nAll rights reserved.\n`,
    })
  );
};

// 图标 dist 打包
exports.icon = (config) => {
  config.plugins.pop();
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: `SensoroDesign v${version}\n\nCopyright 2019-present, SensoroFE, Inc.\nAll rights reserved.\n`,
    })
  );
};

// 官网
exports.site = (config, env) => {
  if (env === 'prod') {
    config.output.publicPath = '/';
  }

  config.entry = {
    react: path.resolve(__dirname, '../site/src/index.js'),
    'react-en': path.resolve(__dirname, '../site/src/index-en.js'),
  };

  config.module.rules[1].use[1].options.demoDir = '__demo__';

  config.module.rules[1].use[1].options.autoHelmet = {
    formatTitle: (value) => `${value} | SensoroDesign`,
  };

  // esbuild
  config.module.rules[0].loader = 'esbuild-loader';
  config.module.rules[0].options = {
    loader: 'tsx',
    target: 'es2015',
  };
  config.module.rules[1].use[0].loader = 'esbuild-loader';
  config.module.rules[1].use[0].options = {
    loader: 'tsx',
    target: 'es2015',
  };

  config.plugins[0] = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../site/public/index.ejs'),
    templateParameters: {
      title: 'Senosro Design - 企业级产品的完整设计和开发解决方案',
      lang: 'zh',
    },
    chunks: ['react'],
  });

  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index-en.html',
      template: path.resolve(__dirname, '../site/public/index.ejs'),
      templateParameters: {
        title:
          'Senosro Design - Complete design and development solutions for enterprise-level products',
        lang: 'en',
      },
      chunks: ['react-en'],
    })
  );

  config.resolve.alias['@sensoro-design/react'] = path.resolve(__dirname, '..');
  config.resolve.alias['@arco-design/web-react'] = path.resolve(__dirname, '..');
  // config.resolve.alias['dayjs$'] = 'moment-timezone';

  if (env === 'dev') {
    config.devServer.historyApiFallback = {
      rewrites: [
        { from: /^(\/(react|docs|showcase)){0,1}\/en-US/, to: '/index-en.html' },
        { from: /^\/$/, to: '/index.html' },
      ],
    };
  }
};
