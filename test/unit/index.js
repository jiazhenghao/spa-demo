/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
const testsContext = require.context("./specs", true, /\.spec$/);
testsContext.keys().forEach(testsContext);
