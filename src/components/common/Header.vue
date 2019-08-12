<template>
  <div class="header_box">
    <div class="header_left">
      <!-- <i class="el-icon-menu"></i> -->
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <div class="header_name">后台管理系统</div>
    </div>
    <div class="header_right">
      <el-dropdown>
        <el-button size="small" class="bell_btn" type="primary">
          模块名称
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>第一模块</el-dropdown-item>
          <el-dropdown-item>第一模块</el-dropdown-item>
          <el-dropdown-item>第一模块</el-dropdown-item>
          <el-dropdown-item>第一模块</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="btn_bell">
        <el-tooltip class="item" effect="dark" content="未读消息" placement="bottom">
          <i class="el-icon-bell"></i>
        </el-tooltip>
      </div>
      <div class="user_avator">
        <img src="../../assets/images/img2.jpg">
      </div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import bus from "@/components/common/bus.js";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    username() {
      let username = sessionStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
};
</script>

<style  scoped>
.header_box {
  width: 100%;
  height: 80px;
  /* background: #ff9800; */
  background: #242f42;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  position: relative;
  box-sizing: border-box;
  color: #fff;
}
.header_left {
  display: flex;
  align-content: center;
}
.collapse-btn {
  cursor: pointer;
  /* line-height: 70px; */
}
.el-icon-menu {
  font-size: 25px;
  color: #fff;
}
.header_name {
  font-size: 25px;
  /* font-weight: bold; */
  color: #fff;
  margin-left: 10px;
}
.header_right {
  display: flex;
  align-items: center;
}
.el-button--primary {
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border: none;
}

.el-icon-bell {
  font-size: 20px;
  color: #fff;
  margin: 0 10px;
}

.user_avator {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.user_avator img {
  width: 100%;
  height: 100%;
}
.el-dropdown-link {
  color: #fff;
}
</style>

