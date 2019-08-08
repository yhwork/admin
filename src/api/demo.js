import axios from './index'

export function getInfo(data) {
  return axios({
    url: '/store/class/getClassList',
    method: 'get',
    params: { data }
  })
}

export function logout() {
  return axios({
    url: '/user/logout',
    method: 'post'
  })
}
