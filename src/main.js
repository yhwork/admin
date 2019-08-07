import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import './assets/css/iconfont.css';

// 引用百度编辑器
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/jquery-2.2.3.min.js'

//引入vuex
import store from './store'

// 日历
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import moment from 'moment';
// 中文简体
moment.locale('zh-cn');
Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') =>{
    return moment(dataStr).format(pattern)
})
// document.addEventListener('DOMContentLoaded', function() {
  
//   var calendarEl = document.getElementById('calendar');

//   var calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin ]
//   });
//   console.log('22',calendar)
//   calendar.render();
// });

// 配置百度地图
import BaiduMap from 'vue-baidu-map'
import { BmlMarkerClusterer } from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'BtxvGg8uYmQFkGsmNbnmGmoOae6aGwyK'
})

Vue.use(ElementUI)
Vue.use(qs)




Vue.component('bml-marker-cluster', BmlMarkerClusterer)
Vue.config.productionTip = false
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('Authorization') ? sessionStorage.getItem('Authorization') : "";
// axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'
Vue.prototype.$axios = axios //设置原型

//使用钩子函数对路由进行权限跳转,注册全局前置守卫
router.beforeEach((to, from, next) => {
    const role = sessionStorage.getItem('ms_username');
    if (!role && to.path !== '/login') { //没有角色，不是登录页，则跳转到Login
        if (to.path == '/register') {
            next()
        } else {
            next('/login');
        }
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        next()
    }
})
router.afterEach((to, from , next)=> {
    // sessionStorage.clear();
    console.log('路由离开')
    // next()
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
