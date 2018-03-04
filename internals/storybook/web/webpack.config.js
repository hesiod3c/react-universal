const defaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const webpack = require('../../webpack/webpack.dev.config.js');

module.exports = function (config, env) {
  const newConfig = defaultConfig(config, env);
  newConfig.module.rules = newConfig.module.rules.concat(webpack.module.rules);
  newConfig.resolve = webpack.resolve;

  return newConfig;
};
