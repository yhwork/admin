# element UI

## 路由/组件的懒加载

原因：`为给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题 `

解决：`即使用**vue异步组件** `和`**ES中的import** `

#### 1.vue异步组件实现懒加载 

```js
//使用：component：resolve=>(require(['需要加载的路由的地址'])，resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>(require(["@/components/HelloWorld"],resolve))
    }
  ]
})

```

#### 2.ES6 提出的import方法 

```js
//方法如下：const HelloWorld = （）=>import('需要加载的模块地址')
const HelloWorld = ()=>import("@/components/HelloWorld")
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    }
  ]
})
```

#### 3.组件懒加载

1.异步

```js
export default {
  components:{
    "One-com":resolve=>(['./one'],resolve)
  },
}
```

2.const

```js
const One = ()=>import("./one");
export default {
  components:{
    "One-com":One
  }
}
```









## slot插槽的使用

```js

```

## 组件间传值

`兄弟间传值`

```js
 // 非负组件的通讯
var bus = new Vue()
// 触发组件A中的事件
bus.$emit('change',1);
// 在同级b组件创建监听事件
 bus.$on("change", msg => {
     console.log(msg)
      this.collapse = msg;
 });

//前提   <a></a>   <b></b>在同一个模板中
```

`获取props的面值`

```js
  watch: {
            chartData: function(newVal,oldVal){
                this.cData = newVal;  //newVal即是chartData 改变后数据
                this.drawChart();
       }
   },
```

## 路由间传值

##### 方法一

`直接调用$router.push 实现携带参数的跳转`

```js
this.$router.push({
    path: `/describe/${id}`,
})
// 路由配置的条件
 {
     path: '/describe/:id',
     name: 'Describe',
     component: Describe
  }
// 接收
this.$route.params.id
```

##### 方法二

`通过路由属性中的name来确定匹配的路由，通过params来传递参数 `

```js
 this.$router.push({
     name: 'Describe',
     params: {
         id: id
     }
 })
// 所需路由配置的条件
 {
     path: '/describe',
     name: 'Describe',
     component: Describe
   }
// 子组件接收
this.$route.params.id

```

##### 方法三

`使用path来匹配路由，然后通过query来传递参数 这种情况下 query传递的参数会显示在url后面?id=？ `

```js
this.$router.push({
    path: '/describe',
    query: {
        id: id
    }
})
// 所需路由配置的条件
 {
     path: '/describe',
     name: 'Describe',
     component: Describe
   }
// 子组件接收
this.$route.query.id

```

vue中路由返回

```js
this.$router.replace() 
// 同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
```

## vue的生命周期

```js
activated(){
    
}
// 相当于onshow 页面进入就会触发，可用于初始化页面数据等
// 其触发的顺序是  create mounted  activated
```

## Vue事件

##### `键盘事件`

```js
// 全局的
created() {
	var lett = this;
    // 监听当前文档的键盘点击
    document.onkeydown = function(e) {
        // 读取所有的键盘code码
        var key = window.event.keyCode;
        if (key == 13) {
            // 要出发的事件
        	lett.func();
        }
}
// 在input添加键盘事件
 <input class="form-control search-input" type="search" placeholder="输入用户名进行搜索" aria-label="Search" maxlength="32" v-model.trim="search_value" @keyup.enter。13="func">
// 注意 ：事件需要在焦点上才能触发
```

## axios 请求封装

index.js

```js
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
    console.log('请求参数拦截',config)
    if (store.getters.user) {
      config.headers['Authorization'] = sessionStorage.getItem("Authorization") ? sessionStorage.getItem("Authorization") :store.getters.user
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('响应数据拦截',res);
    // 判断相应的状态码
    if (res.code !== 0 ) {
      Message({
        message: res.errorMessage || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.errorCode === 100001 || res.cerrorCodeode === 100005 || res.errorCode === 300000 ) {
        // to re-login
        MessageBox.confirm('服务器错误', '请重新登录', {
          confirmButtonText: '去登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('/login').then(() => {
            location.reload()
          })
        })
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

```

user.js

```js
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
```

在login.vue中引用

```js
import {getInfo} from '@/api/demo'
// 使用
 getInfo().then((res)=>{
     console.log(res.data)
 })
```



## mock.js 请求拦截，模拟数据

githup:https://github.com/nuysoft/Mock/wiki 

```js
// npm安装
 npm install mockjs
// script引入
 <script src="http://mockjs.com/dist/mock.js"></script>
```

在src目录新建目录mock，再index.js,usermock.js

```js
// 引进所有的文件
require('@/mock/usermock')
require('@/mock/demo')
// 通用配置
const Mock = require('mockjs')
// 设置所有的请求超时时间，模拟网络传输消耗
Mock.setup({
    timeout:0-300
})
```

usermock.js

```js
// axios 请求
// import ApiPath from "@/api/ApiPath"
const Mock = require("mockjs")
// 对这个请求进行拦截
Mock.mock('/store/class/getClassList', "get", {
     "code": 0,
     "data|1-3": [{   // 随机生成1到3个数组元素
        'name': '@cname',  // 中文名称
        'id|+1': 88,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'fromObj|2': obj,  // 从obj对象中随机获取2个属性
        'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    }]
})

//格式： Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));
// Mock.mock('/home/banner', 'get', require('./json/homeBanner'));
// Mock.mock( url, type, template )   // 模板
// Mock.mock( url, type, function( options ) )  // 回调参数
// url: 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。
// 在vue 工程中，建议将api的url全部放在apipath中统一管理，然后在Mock中使用与发请求的时候使用的同一个引用
// type: 表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
// template: 表示数据模板，可以是对象或字符串。如果需要要把数据写死，可以直接写一个普通的对象。如果要让Mock随机生成，可以根据Mock模板的规则自定义
// 例如：
// { 'data|1-10':[{}] } 表示生成生成包含 1到10个空对象的数据
// '@EMAIL' 表示随机生成一个email地址
// '@CNAME' 表示随机生成一个中文人名


```



## vuex模块化封装

index.js

```js
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

```

getting.js

```js
const getters = {
    sidebar: state => state.app.sidebar,
    demo: state =>{                     // 修改值state的值
       let name = state.app.demo;
       name.demo='杨辉真帅'
       return  name
    }, // 异步获取 store的值
    user:state =>{
       let token = state.user.token;
       if(token === ""){
          console.warn('没有token请登录')
       }
       return token;
    }
  }
  export default getters
```

module/user.js

```js
import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  token: sessionStorage.getItem("Authorization") ? sessionStorage.getItem("Authorization"):"",
  demo: '测试内容'
}

const mutations = {
    gettoken:state=>{
        console.log(state.token)
    },
    setstore:(state,data)=>{
        state.demo=data
        console.log('修改后内容为',state.demo)
    }
}

const actions = {
    asyncgettoken({commit}){
        commit("gettoken")
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
```



# js中处理方法

## 1.检测对象中是否存在某个属性

```js
// 1.使用hasOwnProperty()方法
var obj={
    a:1,
    b:2
}
obj.hasOwnProperty('a')   // true
obj.hasOwnProperty('y')   // false

// 注意：该方法只能判断自有属性是否存在，对于继承属性会返回false。

//2.	Object.keys(obj)   // ['a','b']
//3.	if(obj.a)
//4.	obj.a ===undefine
```

## 2.对js对象进行深拷贝

```js
//1.使用递归的方式实现深拷贝
function deepClone1(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

//2.通过js的内置对象JSON来进行数组对象的深拷贝
 JSON.parse(JSON.stringfly(obj))
// 注：不管这个对象原来是什么在深拷贝之后都会变成Object-
//     无法实现对对象中方法的深拷贝

//3. Object.assign()拷贝 
// 注：当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。

//4. Array.prototype.forEach
let deepClone = function (obj) {
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function (items) {
        let item = Object.getOwnPropertyDescriptor(obj, items);
        Object.defineProperty(copy, items, item);

    });
    return copy;
};
//5.es6
let newObj = {...oldObj}只是拷贝了引用地址
// 注：String，Number，Boolean时，是可以使用拓展运算符进行深拷贝的，Object，Array只是拷贝了引用地址
```

## 3.模块的导入和导出es5,es6

在es5中，用`module.exports`和`exports`导出模块，用`require`引入模块。

```js
//导出 people.js
const obj1 = {name: '萤火虫叔叔'}
const obj2 = {name: '萤火虫老阿姨'}
module.exports =obj1 ；
exports = obj2;
`注：当 module.exports和exports指向的不是同一块内存时，exports的内容就会失效。`
// main.js
let people = require('./people');
console.log(people);//输出：{name: '萤火虫叔叔'}
```

在es6新增 `export`和`export default`导出模块，`import`导入模块。 

```js
const obj1 = {name: '萤火虫叔叔'}
const obj2 = {name: '萤火虫老阿姨'}
export default obj1
// 结果  key 默认是 default
{exports: {default:{name: '萤火虫叔叔'}, hot:{...}}
// 导出
 export {obj1, obj2}
// 导出
 {exports: {obj1:{name: '萤火虫叔叔'},obj2:{name: '萤火虫老阿姨'}, hot:{...}}
```

参考1：https://www.jianshu.com/p/beafd9ac9656

参考2：https://www.jianshu.com/p/f6c5a646c00b



vue插件集合



# 间接代码块

```js
// 先判断有没有 在执行
for (let i = 0, len = msg.length; i < len; i++) {
      msg[i].name && arr.push(msg[i].name);
    }
    this.tagsList = arr;
});
```



















































































































