/**
 * 接口地址
 * 
 */
// 13716583263 736602
const ApiUrl ={
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