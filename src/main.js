import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import './assets/css/iconfont.css';

import 'babel-polyfill'
// 引用百度编辑器
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/jquery-2.2.3.min.js'

// import { currency,orgId } from '@/utils/filter'
// // 全局过滤器
// Vue.filter('currency', currency);
// Vue.filter('orgId', orgId);

// 封装的过滤器
import filter from '@/utils/filter'
// 全局导入过滤器
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))


//模拟数据
require('./mock'); //引入mock数据，关闭则注释该行
// process.env.MOCK && require('@/mock')  // 根据环境判断是否使用mock

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

Vue.filter('isSell',(val)=>{
    // console.log('全局过滤器',val)
    return val
})
// var isSell =vue.filter('isSell')
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

var root = process.env.API_ROOT;
var $http = process.env.VUE_APP_BASE_API;
var status_http = process.env.NODE_ENV;
console.log('生产',root,'开发',$http,status_http);

// 设置默认请求地址
// axios.defaults.baseURL=root

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
            // next()
        }
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // console.log('路由监控',to,from);
        // 把路由的来源和去像存起来
        to.params.router={
            path:to.name,
            from:from.name
        }
        next();
        var allowBack = true  //    给个默认值true
        // console.log('你又是个啥',to)
        if (to.meta.allowBack !== undefined) {
            allowBack = to.meta.allowBack
        }
        // console.log('你到底是个啥',allowBack)
        if (!allowBack) {
            history.pushState(null, null, location.href)
        }   
 //   updateAppSetting 只是store里面的一个action， 用来改变store里的allowBack的值的，具体怎么改这个值 要根据各位的实际情况而定
        store.dispatch('user/updateAppSetting', {    
            allowBack
        })
    }
})

// router.afterEach((to, from , next)=> {

//     // sessionStorage.clear();
//     console.log('路由监控',to,from)
//     // next()
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
