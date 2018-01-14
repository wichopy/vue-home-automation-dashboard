'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKET_SERVER: '"http://irisjarvis.zapto.org:661/authorized"',
  BASE_URL: '"http://localhost:8080"',
  BASE_NAME: '"/irisjarvis/"'
})
