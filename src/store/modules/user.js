import Cookies from 'js-cookie'
import router from '@/router'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  allowBack:false,
  // token: sessionStorage.getItem("Authorization") ? sessionStorage.getItem("Authorization"):"",
  token:'',
  demo: '测试内容',
  islogin:false
}
var that =this
const mutations = {
    gettoken:state=>{
        console.log(state.token)
    },
    setstore:(state,data)=>{
        state.demo=data
        console.log('修改后内容为',state.demo)
    },

    stopBack:(state,data)=>{
      state.allowBack=data
      // console.log('修改后内容为',state.allowBack)
    },
    login(state,data){
      state.islogin=data
    },
    SetToken(state,data){
       state.token=data
       console.log(state.token,data)
    },
    quit:(state,data)=>{
      state.islogin = data
      console.log('啦啦啦啦',data);
      // console.log(router.options.routes.push('/login'))
      // resetRouter()
      // that.$router.push({
      //   path:'/login',
      // })
    }
}

const actions = {
    asyncgettoken({commit}){
        commit("gettoken")
    },
    asyncSetToken({commit},data){
      commit('SetToken',data)
    },
    asyncQuit({commit},data){
      commit('quit',data)
    },
    updateAppSetting({commit},{state}){
      // console.log('你是个啥？',state)
    commit("stopBack",state)
    },
    // 获取兄弟模块中的方法和store
    getdemofun:(store,data)=>{
        const { commit, dispatch, state, rootState,rootGetters  } = store
        console.log(rootState) // 打印根 state
        console.log(rootState.dmeo) // 打印其他模块的 state
        commit('setstore', data) // 调用当前模块的 mutations
        dispatch('dmeo/changeName', {data}, {root: true}) // 调用其他模块的 actions
        commit('dmeo/setNmae',data, {root: true}) // 调用其他模块的 mutations

    }
}

/**
 *  
    state：存储状态（变量）
    getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
    mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
    actions：异步操作。在组件中使用是$store.dispath('')
    modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。
 * 
 */
// 导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
