// 'use strict'
// following this guide: https://github.com/vuejs-templates/webpack/issues/722
// require('dotenv').config();
// let _ = require('lodash');
// let env = {};

// env = _(process.env)
//   .mapValues(value => `"${value}"`)
//   .value();

// module.exports = env;

module.exports = {
  NODE_ENV: '"production"',
  // SOCKET_SERVER: '"http://irisjarvis.zapto.org:661"',
  // BASE_URL: '"www.willchou.ca"',
  SOCKET_SERVER: '"http://irisjarvis.zapto.org:661/authorized"',
  // BASE_URL: '"http://localhost:8081"',
  BASE_URL: '"http://willchou.ca"',
  BASE_NAME: '"/irisjarvis/"'

}

// Why don't vue have .env support :()
// module.exports = {
//   NODE_ENV: '"production"',
// }
