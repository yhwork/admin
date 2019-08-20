import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { getToken } from './cookie'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // do something before request is sent
   
    if (store.getters.user) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = sessionStorage.getItem("Authorization") ? sessionStorage.getItem("Authorization") :store.getters.user
      // config.headers['X-Token'] = getToken()
    }
    console.log('请求参数拦截',config)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log('响应数据拦截',res);
    // 判断相应的状态码
    if (res.errorCode != 0 ) {
      Message({
        message: res.errorMessage || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.errorCode == 100001||res.errorCode==400001 || res.cerrorCodeode == 100005 || res.errorCode == 300000 ) {
        // to re-login
        // if(){}
        // MessageBox.confirm('请求超时', '请重新登录', {
        //   confirmButtonText: '去登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   console.log('怎敢路')
        //   store.dispath('asyncQuit',false)
        // }).catch(()=>{
          store.dispath('user/asyncQuit',false)
        // })
      }
      return Promise.reject(new Error(res.errorMessage || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
