const Mock = require("mockjs")
import ApiPath from '@/api/config'
// console.log('全部地址', ApiPath)
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
// 测试
Mock.mock(ApiPath.demo, "get",
    {
        "errorCode": "0",
        "result": {
            "name": '小豆包课程表一班',
            "type": '音乐1',
            "curriculum": 'demo1'
        },
        "errorMessage": "认证成功",
})
// 测试2
Mock.mock(ApiPath.demo2, "post",
    {
        "errorCode": "0",
        "result": {
            "name": '小豆包课程表一班',
            "type": '音乐2',
            "curriculum": 'demo2'
        },
        "errorMessage": "认证成功",
})
// 课程添加
Mock.mock(ApiPath.addCurriculum, "get",
    {
        "errorCode": "0",
        "result": {},
        "errorMessage": "认证成功",
    })
// 获取课程列表
Mock.mock(ApiPath.getCurriculumList, "post",
    {
        "errorCode": "0",
        "result": {
            "name": '小豆包课程表一班',
            type: '音乐',
            curriculum: '列表222'
        },
        "errorMessage": "认证成功",
    })

// 编辑条件
Mock.mock(ApiPath.ideaCurriculum, "get",
    {
        "errorCode": "0",
        "result": {},
        "errorMessage": "认证成功",
    })
// 筛选条件
Mock.mock(ApiPath.getSelectRes, "get",
    {
        "errorCode": "0",
        "result": {},
        "errorMessage": "认证成功",
    })