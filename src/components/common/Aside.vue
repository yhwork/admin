<template>
  <div class="sidebar" :class="{'sidebar2':collapse}">
    <el-menu class="sidebar-el-menu" :default-active="$route.path" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router >
<!-- 左边菜单栏 -->
      <template v-for="item in menuList">
        <!-- 判断是否有嵌套的子路由-->
        <template v-if="item.childMenu">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.childMenu">
              <el-menu-item :index="subItem.path" :key="subItem.path">{{ subItem.name }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 显示当前-->
        <template v-else>
          <el-menu-item :index="item.path" :key="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>


<script>
import bus from "../common/bus";
export default {
  props: ["menuList"],
  name: "Aside",
  data() {
    return {
      // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "public_info",
          title: "系统首页"
        },
        {
          icon: "el-icon-star-on",
          index: "material_manage",
          title: "门店管理",
          subs: [
            {
              index: "classroom_setup",
              title: "教室"
            },
            {
              index: "staff",
              title: "员工"
            }
          ]
        },
        {
          icon: "el-icon-star-on",
          index: "",
          title: "产品中心",
          subs: [
            {
              index: "hot_goods",
              title: "爆款产品"
            },
            {
              index: "material_manage",
              title: "素材管理"
            }
          ]
        },
        {
          icon: "el-icon-info",
          index: "3",
          title: "教务中心",
          subs: [
            {
              index: "staff",
              title: "员工管理"
            },
            {
              index: "campus",
              title: "校区管理"
            },
            {
              index: "campus_manage",
              title: "校区管理2"
            },
            {
              index: "staff_setup",
              title: "新建员工"
            },
            {
              index: "role_manage",
              title: "角色管理"
            },
            {
              index: "classroom_setup",
              title: "创建教室"
            },
            {
              index: "course_list",
              title: "排课"
            },
            {
              index: "course_setup",
              title: "创建课程"
            }
          ]
        }
      ],
      istrue:true,
      activeIndex:'',
    };
  },
  watch: {
    // 监听props值
    menuList: function(newVal,oldVal){
          console.log('侧边栏路由',newVal,oldVal)
          if(this.istrue){
            this.istrue=false;
             newVal.push({
            childMenu:[
              {
                icon: null,
                name: "班级",
                path: "/grade"
              },{
                icon: null,
                name: "课程",
                path: "/curriculum"
              },{
                icon: null,
                name: "排课",
                path: "/scheduling"
              },{
                icon:null,
                name:"教室",
                path:"/classroom"
              },
              {
                icon: null,
                name: "课程表",
                path: "/timetable"
              }
            ],
            icon: null,
            name: "教务管理",
            path: "demo",
      })
          }
    },
    // $route(newValue, oldValue) {
    //   // console.log('路由变换啦',newValue)
    //   this.activeIndex = newValue.path.replace("/",'')
    // }
  },
  computed: {
    //当前激活菜单的 name名称
    // onRoutes() {
    //   //  var a= this.$route.path.replace("/", "")
    //   //  console.log('当前激活菜单的',a);
    //    return this.activeIndex;
     
    // }
  },
  created() {
    // this.activeIndex=this.$route.path.replace("/", "");
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
    bus.$on('tagindex',(path)=>{
      var a= path.replace("/",'')
      console.log('兄弟收到',path)
      this.activeIndex =a;
    })
  }
};
</script>

<style scoped>
.el-icon-info {
  font-size: 15px;
  color: #666;
}
.el-icon-setting,
.el-icon-star-on {
  color: #666;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 0;
  overflow-y: scroll;
  width: 10%;
}
.sidebar2 {
  width: 5%;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 100%;
}
.sidebar > ul {
  height: 100%;
}

.el-menu--collapse {
  width: 63px;
}
</style>
   