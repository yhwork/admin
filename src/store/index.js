import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import dmeo from './modules/dmeo'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        app,    // 子模块
        dmeo,
        user   // 用户模块
    },
    getters
})

export default store

/**
 *  
    state：存储状态（变量）
    getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
    mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
    actions：异步操作。在组件中使用是$store.dispath('')
    modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。
 * 
 */