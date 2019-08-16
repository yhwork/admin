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
  return axios({
    url: ApiPath.getClassList,
    method: 'get',
    data
  })
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
