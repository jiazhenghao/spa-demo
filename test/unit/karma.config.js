/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
const webpackConfig = require("../../build/webpack.test.config.js");
module.exports = function(config) {
  config.set({
    browsers: ["PhantomJS"],
    frameworks: ["mocha", "sinon-chai"],
    files: ["./index.js"],
    preprocessors: {
      "./index.js": ["webpack"]
    },
    client: {
      mocha: {
        timeout: 20000
      }
    },
    // browserDisconnectTimeout: 20000,
    // processKillTimeout: 20000,
    plugins: [
      "karma-mocha",
      "karma-sinon-chai",
      "karma-phantomjs-launcher",
      "karma-webpack"
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
