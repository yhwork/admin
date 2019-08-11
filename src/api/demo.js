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
// 课程添加
export function addCurriculum() {
  return axios({
    url: ApiPath.addCurriculum,
    method: 'post',
    params
  })
}
// 获取课程列表
export function getCurriculumList(data) {
  console.log('请求参数',data)
  return axios({
    url: ApiPath.getCurriculumList,
    method: 'post',
    params: {data} 
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
