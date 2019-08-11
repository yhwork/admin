// axios 请求
// import ApiPath from "@/api/ApiPath"

const Mock = require("mockjs")
// 对这个请求进行拦截
// Mock.mock(ApiPath.user.getUserInfo, "get", {
//     "code": 0,
//     "data": {
//       "fullName": "@CNAME", // 随机生成中文人名
//       "userId": 1000234234001,
//       "username": "zhangsan"
//     },
//     "msg": "success"
// })
// 
// Mock.mock('/store/class/getClassList', "get", {
//     "code": 0,
//     "data": {
//       "fullName": "@CNAME", // 随机生成中文人名
//       "userId": 1000234234001,
//       "username": "zhangsan"
//     },
//     "msg": "success"
// })

//格式： Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));
// Mock.mock('/home/banner', 'get', require('./json/homeBanner'));



// Mock.mock( url, type, template )   // 模板
// Mock.mock( url, type, function( options ) )  // 回调参数
// url: 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。
// 在vue 工程中，建议将api的url全部放在apipath中统一管理，然后在Mock中使用与发请求的时候使用的同一个引用
// type: 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
// template: 表示数据模板，可以是对象或字符串。如果需要要把数据写死，可以直接写一个普通的对象。如果要让Mock随机生成，可以根据Mock模板的规则自定义
// 例如：
// { 'data|1-10':[{}] } 表示生成生成包含 1到10个空对象的数据
// '@EMAIL' 表示随机生成一个email地址
// '@CNAME' 表示随机生成一个中文人名

