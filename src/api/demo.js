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
// 

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
