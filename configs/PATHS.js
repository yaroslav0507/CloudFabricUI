const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../CloudFabric.Web/Web/wwwroot'),
  styles: path.resolve(__dirname, '../src/styles')
};
