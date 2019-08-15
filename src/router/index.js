import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const HelloWorld = ()=>import("@/components/HelloWorld")   es6
// const class = ()=>import("@/components/page/educationalCenter/class");             //班级
// const classroom = ()=>import("@/components/page/educationalCenter/classroom");     //教室
// const curriculum = ()=>import("@/components/page/educationalCenter/curriculum");   //课程
// const scheduling = ()=>import("@/components/page/educationalCenter/scheduling");   //排课
// const timetable = ()=>import("@/components/page/educationalCenter/timetable");     //课程表


export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect: '/public_info',
      meta: {allowBack: false}
    },
      //  {
      //   path: '/example',
      //   component: Layout,
      //   redirect: '/example/table',
      //   name: 'Example',
      //   meta: { title: 'Example', icon: 'example' },
      //   children: [
          //     {
          //       path: 'table',
          //       name: 'Table',
          //       component: () => import('@/views/table/index'),
          //       meta: { title: 'Table', icon: 'table' }
          //     },
          //     {
          //       path: 'tree',
          //       name: 'Tree',
          //       component: () => import('@/views/tree/index'),
          //       meta: { title: 'Tree', icon: 'tree' }
          //     }
        //   ]
    // },
    // 路由懒加载
    {
      path: '/',
      component: resolve => require(['../components/common/Main.vue'], resolve),
      meta: { title: '主页面', isLogin: true},
      children: [
        {
          path: '/classroom',
          name: 'classroom',
          component:()=>import("@/components/page/educationalCenter/classroom"),
          meta: { title: '教室界面', icon: '' }
        },
        {
          path: '/grade',
          name: 'grade',
          component:()=>import("@/components/page/educationalCenter/class"),
          meta: { title: '班级界面', icon: '' }
        },
        {
          path: '/curriculum',
          name: 'curriculum',
          component: ()=>import("@/components/page/educationalCenter/curriculum"),
          meta: { title: '课程界面', icon: '' }
        },
                {
          path: '/timetable',
          name: 'timetable',
          component: ()=>import("@/components/page/educationalCenter/timetable"),
          meta: { title: '课程表界面', icon: '' }
        },
        {
          path: '/scheduling',
          name: 'scheduling',
          component: ()=>import("@/components/page/educationalCenter/scheduling"),
          meta: { title: '排课界面', icon: '' }
        },
        {
          path: '/room',
          component: resolve => require(['../components/page/ClassroomSetup.vue'], resolve),
          meta: { title: '创建教室' }
        },
        {
          path: '/course_list',
          component: resolve => require(['../components/page/CourseList.vue'], resolve),
          meta: { title: '课程列表' }
        },
        {
          path: '/public_info',
          name:'public_info',
          component: resolve => require(['../components/page/PublicInfo.vue'], resolve),
          meta: { title: '工作台',allowBack: false }
        },
        {
          path: '/department',
          component: resolve => require(['../components/page/CampusManage.vue'], resolve),
          meta: { title: '校区管理' }
        },
        {
          path: '/campus_setup',
          component: resolve => require(['../components/page/CampusSetup.vue'], resolve),
          meta: { title: '新建校区' }
        },
        {
          path: '/user',
          component: resolve => require(['../components/page/StaffManage.vue'], resolve),
          meta: { title: '员工管理' }
        },
        {
          path: '/staff_setup',
          component: resolve => require(['../components/page/StaffSetup.vue'], resolve),
          meta: { title: '新建员工' }
        },
        {
          path: '/department_set',
          component: resolve => require(['../components/page/DepartmentSet.vue'], resolve),
          meta: { title: '部门设置' }
        },
        {
          path: '/role_manage',
          component: resolve => require(['../components/page/RoleManage.vue'], resolve),
          meta: { title: '新建员工' }
        },

        {
          path: '/course_setup',
          component: resolve => require(['../components/page/CourseSetup.vue'], resolve),
          meta: { title: '创建课程' }
        },
        {
          path: '/source',
          component: resolve => require(['../components/page/MaterialManage.vue'], resolve),
          meta: { title: '素材管理' },
        },
        {
          path: '/host_product',
          component: resolve => require(['../components/page/HotGoods.vue'], resolve),
          meta: { title: '爆款产品' },
        },
        {
          path: '/goods_setup',
          component: resolve => require(['../components/page/GoodsSetup.vue'], resolve),
          meta: { title: '新建爆款' },
        },
        {
          path: '/activity',
          component: resolve => require(['../components/page/ActiveManage.vue'], resolve),
          meta: { title: '爆款活动' },
        },
        {
          path: '/active_setup',
          component: resolve => require(['../components/page/ActiveSetup.vue'], resolve),
          meta: { title: '新建活动' },
        },
        {
          path: '/class',
          component: resolve => require(['../components/page/storeInfo.vue'], resolve),
          meta: { title: '门店信息' },
        },
        {
          path: '/course',
          component: resolve => require(['../components/page/storeManage.vue'], resolve),
          meta: { title: '门店管理' },
        },
        {
          path: '/appointment',
          component: resolve => require(['../components/page/appointmentManage.vue'], resolve),
          meta: { title: '预约管理' },
        }, {
          path: '/order',
          component: resolve => require(['../components/page/orderManage.vue'], resolve),
          meta: { title: '订单查询' },
        }, {
          path: '/property',
          component: resolve => require(['../components/page/propertyManage.vue'], resolve),
          meta: { title: '资产管理' },
        }, {
          path: '/signin',
          component: resolve => require(['../components/page/clockManage.vue'], resolve),
          meta: { title: '打卡管理' },
        }, {
          path: '/role',
          component: resolve => require(['../components/page/ueditor_demo.vue'], resolve),
          meta: { title: '百度编辑器' },
        }, {
          path: '/online_course',
          component: resolve => require(['../components/page/onlineList.vue'], resolve),
          meta: { title: '线上爆款' },
        }, {
          path: '/online_setup',
          component: resolve => require(['../components/page/onlineCourse.vue'], resolve),
          meta: { title: '新建爆款' },
        },
        {
          path: '/myDemo',
          component: resolve => require(['../components/page/myDemo.vue'], resolve),
          meta: { title: '我的测试' },
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: { isLogin: false },
    },
    {
      path: '/register',
      name: "register",
      component: resolve => require(['../components/page/Register.vue'], resolve),
      meta: { isLogin: false },
    },

  ]
})     
