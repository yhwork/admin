import Cookies from 'js-cookie'
// const user = {
//     name: 'lia',
//     age: 18
//   }
//   Cookies.set('user', user)
//   const liaUser = JSON.parse(Cookies.get('user'))

// 状态
const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  demo: '测试内容'
}
// 事件
const mutations = {
    getstore:state=>{
        console.log('获取到内容',state.demo)
    },
    setstore:(state,data)=>{
        state.demo=data
        console.log('修改后内容为',state.demo)
    }
//   TOGGLE_SIDEBAR: state => {
//     state.sidebar.opened = !state.sidebar.opened
//     state.sidebar.withoutAnimation = false
//     if (state.sidebar.opened) {
//       Cookies.set('sidebarStatus', 1)
//     } else {
//       Cookies.set('sidebarStatus', 0)
//     }
//   },
//   CLOSE_SIDEBAR: (state, withoutAnimation) => {
//     Cookies.set('sidebarStatus', 0)
//     state.sidebar.opened = false
//     state.sidebar.withoutAnimation = withoutAnimation
//   },
//   TOGGLE_DEVICE: (state, device) => {
//     state.device = device
//   }
}
// 异步操作方法
const actions = {
    asyncGetStore({commit},data){
        commit("setstore",data)
    },
    // 获取兄弟模块中的方法和store
    getdemofun:(store,data)=>{
        const { commit, dispatch, state, rootState,rootGetters  } = store
        console.log(rootState) // 打印根 state
        console.log(rootState.dmeo) // 打印其他模块的 state
        // console.log(rootGetters) // 打印其他模块的 getters

        commit('setstore', data) // 调用当前模块的 mutations
        dispatch('dmeo/changeName', {data}, {root: true}) // 调用其他模块的 actions

        // 第一个参数是其他模块的 mutations 路径, 第二个是传给 mutations 的数据, 如果不需要传数据, 也必须预留, 第三个参数是配置选项, 申明这个 mutations 不是当前模块的
        // commit('dmeo/setNmae', data) // 调用当前模块的 mutations
        commit('dmeo/setNmae',data, {root: true}) // 调用其他模块的 mutations

    }
//   toggleSideBar({ commit }) {
//     commit('TOGGLE_SIDEBAR')
//   },
//   closeSideBar({ commit }, { withoutAnimation }) {
//     commit('CLOSE_SIDEBAR', withoutAnimation)
//   },
//   toggleDevice({ commit }, device) {
//     commit('TOGGLE_DEVICE', device)
//   }
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
