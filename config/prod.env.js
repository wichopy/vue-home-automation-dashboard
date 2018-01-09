// 'use strict'
// following this guide: https://github.com/vuejs-templates/webpack/issues/722
require('dotenv').config();
let _ = require('lodash');
let env = {};

env = _(process.env)
  .mapValues(value => `"${value}"`)
  .value();

module.exports = env;

// Why don't vue have .env support :()
// module.exports = {
//   NODE_ENV: '"production"',
// }
