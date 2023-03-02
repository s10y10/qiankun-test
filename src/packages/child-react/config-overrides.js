const { name } = require('./package');
const path = require('path');

module.exports = {
  webpack: (config, env) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';
    if (env !== 'development') {
      config.devtool = false;
    }
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow_Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
  paths: function (paths, env) {
    if (env !== 'development') {
      paths.appBuild = path.resolve(__dirname, '../../../blog/child-react');
      paths.publicUrlOrPath = '/blog/child-react/';
    }
    return paths;
  },
};
