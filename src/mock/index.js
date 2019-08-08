// 引进所有的文件
require('@/mock/usermock')
require('@/mock/demo')

// 通用配置
const Mock = require('mockjs')







// 设置所有的请求超时时间，模拟网络传输消耗
Mock.setup({
    timeout:0-300
})