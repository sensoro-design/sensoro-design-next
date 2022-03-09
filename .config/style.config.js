module.exports = function StyleConfig(config) {
  config.less.cssJsEntry = ['src/**/style/index.ts'];
  config.less.output.dist.cssFileName = 'sensoro.min.css';
  config.less.watch = [
    'src/**/*.{less,woff,woff2,png,jpg}',
    'src/style/theme/color/*.js',
  ];
  config.less.watchBase = {
    ['src/**/*.{less,woff,woff2,png,jpg}']: 'src',
    ['src/style/theme/color/*.js']: 'src',
  };
  config.jsEntry.autoInjectArcoDep = false;
};
