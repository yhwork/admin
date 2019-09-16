/**
 * 接口地址
 * 
 */

const root = process.env.API_ROOT;
// 13716583263 736602
const ApiUrl ={


    // 练习  21

    root:root,
    // 线下活动
    // 获取所有课程
    getAllCourse:'/store/course/getAllCourse',
    // 获取班级
    getCourseClass:'/store/course/getCourseClass',
    // 获取门店
    getOrgListByOrgid:'/store/org/getOrgListByOrgid',
    // 获取分类
    getOrgSubList:"/store/org/getOrgSubList",
    // 获取产品详情
    getHotProductInfo:'/store/hotProduct/getHotProductInfo',





    // 角色管理
    // 获取角色列表
    getRoleList:`/store/role/getRoleList`,
    // 添加角色：
    addRole:`/store/role/addRole`,
    // 删除角色：
    delRole:`/store/role/delRole`,
    // 获取角色详情：
    getRoleDetails:`/store/role/getRoleDetails`,
    // 更新角色：
    updateRole:`/store/role/updateRole`,
    



    // 重置密码
    resetUserPasswd:`/store/user/resetUserPasswd`,
    // 编辑查询id
    getUserDetails:`/store/user/getUserDetails`,
    // 编辑保存员工
    updateUser:`/store/user/updateUser`,
    // 添加员工
    addUser:`/store/user/addUser`,
    // 查询员工列表
    getUserList:`/store/user/getUserList`,
    // 删除员工
    delUser:`/store/user/delUser`,


    // 预约详情
    getHotCourseAppointmentInfo:`/store/appointment/getHotCourseAppointmentInfo`,
    
    // 预约列表
    getHotCourseAppointmentList:`/store/appointment/getHotCourseAppointmentList`,



    //添加课程表
    addCourseTime:`/store/course/addCourseTime`,
    //编辑课程表
    updateCourseTime:`/store/course/updateCourseTime`,
    // 课程详情
    getCourseTimeDetails:`/store/course/getCourseTimeDetails`,
    // 记上课
    finishCourseTime:`/store/course/finishCourseTime`,
    // 删除单个课程
    delCourseTime:`/store/course/delCourseTime`,
    // 查询课程表
    getAllCourseTime:`/store/course/getAllCourseTime`,
    // 新建排课
    addCourseArrange:`/store/course/addCourseArrange`,
    // 查询班级详情
    getCourseInfoByClassId:'/store/class/getCourseInfoByClassId',




    // 新建线下活动
    
    // 课程上架
    courseUp:'/store/course/courseUp',
    // 课程下架
    courseDown:'store/course/courseDown',
    // 课程添加
    addCurriculum:'/store/cousre/addCurriculum',
    // 获取课程列表/筛选
    getCourseList:'/store/course/getCourseList',


    // 添加班级
    addClass:'/store/class/addClass',
    // 修改班级
    updateClass:'/store/class/updateClass',
    // 查询班级列表
    getClassList:'/store/class/getClassList',
    // 删除班级
    deleteClass:'/store/class/deleteClass',






    // 编辑条件
    ideaCurriculum:'/store/cousre/ideaCurriculum',
    // 测试1号  get
    demo:'/store/class/getClassList',
    // 测试2号  post
    demo2:'/store/room/addRoom',

}
export default ApiUrl