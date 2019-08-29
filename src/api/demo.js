import axios from './index'
import ApiPath from './config'




export function getInfo(data) {
  console.log('请求参数',data)
  return axios({
    url: '/store/class/getClassList',
    method: 'get',
    params: { data }
  })
}

export function demo2(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.getCurriculumList,
    method: 'post',
    params: {data} 
  })
}

    // // 获取角色列表
    // getRoleList:`/store/role/getRoleList/`,
    // // 添加角色：
    // addRole:`/store/role/addRole`,
    // // 删除角色：
    // delRole:`/store/role/delRole`,
    // // 获取角色详情：
    // getRoleDetails:`/store/role/getRoleDetails`,
    // // 更新角色：
    // updateRole:`/store/role/updateRole`,


// 获取角色列表
export function getRoleList(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getRoleList}`,
    method: 'get',
    data
  })
}
// 添加角色
export function addRole(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.addRole}`,
    method: 'post',
    data
  })
}
// 删除角色
export function delRole(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.delRole}/${data.id}`,
    method: 'delete',
    data:data.id
  })
}
// 角色详情
export function getRoleDetails(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getRoleDetails}/${data.id}`,
    method: 'get',
    data:data.id
  })
}

// 更新角色
export function updateRole(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.updateRole}`,
    method: 'post',
    data
  })
}





// 重置密码
export function resetUserPasswd(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.resetUserPasswd}/${data.id}`,
    method: 'get',
    data:data.id
  })
}

// 编辑查询id
export function getUserDetails(data){
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getUserDetails}/${data.id}`,
    method: 'get',
    data:data.id
  })
}

// 编辑保存员工
export function updateUser(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.updateUser}`,
    method: 'post',
    data
  })
}
// 添加员工
export function addUser(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.addUser}`,
    method: 'post',
    data
  })
}
// 查询员工
export function getUserList(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getUserList}/?status=${data.status}&roleId=${data.roleId}&account=${data.account}`,
    method: 'get',
    data
  })
}
// 删除员工
export function delUser(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.delUser}/${data.id}`,
    method: 'delete',
    data
  })
}


// 预约详情
export function getHotCourseAppointmentInfo(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getHotCourseAppointmentInfo}/${data.id}`,
    method: 'get',
    data
  })
}
// 预约列表
export function getHotCourseAppointmentList(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getHotCourseAppointmentList}?orgId=${data.orgId}&hotCourseId=${data.hotCourseId}&startTime=${data.startTime}&endTime=${data.endTime}`,
    method: 'get',
    data
  })
}

// 添加课程
export function addCourseTime(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.addCourseTime}`,
    method: 'post',
    data
  })
}

//编辑课程
export function updateCourseTime(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.updateCourseTime}`,
    method: 'post',
    data
  })
}
// 删除班级
export function getCourseTimeDetails(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.getCourseTimeDetails}/${data}`,
    method: 'get',
    data
  })
}

// 删除班级
export function finishCourseTime(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.finishCourseTime}/${data}`,
    method: 'delete',
    data
  })
}

// 删除班级
export function delCourseTime(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.delCourseTime}/${data}`,
    method: 'delete',
    data
  })
}

// 查询课程表
export function getAllCourseTime(data){
  console.log('请求参数',data)
  return axios({
    url:`${ApiPath.getAllCourseTime}`,
    method: 'get',
    data
  })
}
// 查询班级详情
export function getCourseInfoByClassId(data){
  console.log('请求参数',data)
  return axios({
    url:`${ApiPath.getCourseInfoByClassId}?classId=${data.classId}`,
    method: 'get',
    data
  })
}

// 新建排课
export function addCourseArrange(data){
  console.log('请求参数',data)
  return axios({
    url: ApiPath.addCourseArrange,
    method: 'post',
    data
  })
}


// 新建班级
export function addClass(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.addClass,
    method: 'post',
    data
  })
}
// 编辑班级
export function updateClass(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.updateClass,
    method: 'put',
    data
  })
}
// 获取班级列表
export function getClassList(data) {
  console.log('请求参数',data)
  if(data===undefined){
    return axios({
      url: ApiPath.getClassList,
      method: 'get',
      data
    })
  }else{
    return axios({
      url: `${ApiPath.getClassList}?className=${data.className}&orgId=${data.orgId}&techerId=${data.techerId}&roomId=${data.roomId}`,
      method: 'get',
      data
    })
  }

}

// 删除班级
export function deleteClass(data) {
  console.log('请求参数',data)
  return axios({
    url: `${ApiPath.deleteClass}/${data}`,
    method: 'delete',
    data
  })
}





// 课程添加
export function addCurriculum(params) {
  return axios({
    url: ApiPath.addCurriculum,
    method: 'post',
    params
  })
}
// 课程上架
export function courseUp(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.courseUp,
    method: 'post',
    data
  })
}

// 课程下架
export function courseDown(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.courseDown,
    method: 'post',
    data
  })
}

// 获取课程列表
export function getCourseList(params) {
  console.log('请求参数',params)
  return axios({
    url: ApiPath.getCourseList,
    method: 'get',
    params
  })
}
// 筛选条件进行搜索
export function getSelectRes() {
  return axios({
    url: ApiPath.getSelectRes,
    method: 'post'
  })
}
// 编辑条件
export function ideaCurriculum() {
  return axios({
    url: ApiPath.ideaCurriculum,
    method: 'post'
  })
}
