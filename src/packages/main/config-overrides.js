const path = require('path');

module.exports = {
  webpack: (config, env) => {
    if (env !== 'development') {
      config.devtool = false;
    }
    return config;
  },

  paths: function (paths, env) {
    if (env !== 'development') {
      paths.appBuild = path.resolve(__dirname, '../../../blog/main');
      paths.publicUrlOrPath = './';
    }
    return paths;
  },
};
