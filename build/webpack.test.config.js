/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
const base = require("./webpack.base.config.js");

let config = Object.assign({}, base, {});

// no need for app entry during tests
delete config.entry;

module.exports = config;
