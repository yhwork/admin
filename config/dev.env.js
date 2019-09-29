'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://qa.xdb.iforbao.com"'
  // API_ROOT: '"http://192.168.1.105:8083"'   // 测试服务器
  // API_ROOT: '"192.168.1.104/"'
})
