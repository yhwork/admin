<template>
  <div class="role">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/'}">校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click>新建角色</el-button>
        <el-row :gutter="20" style="display:flex;ju">
          <el-col :span="4">
            <div class="item_list">
              <div class="info_item">教师</div>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="item_list">
              <div class="info_item">教师</div>
              <div class="sub_item">
                <div class="sub_title">适用校区</div>
                <div class="info_box">
                  <div class="radio_box">
                    <template>
                      <el-radio v-model="radio" label="1">全部校区</el-radio>
                      <el-radio v-model="radio" label="2">指定校区</el-radio>
                    </template>
                  </div>
                  <div class="sub_info">
                    <div>
                      <el-checkbox>上海迪斯尼徐汇校区</el-checkbox>
                    </div>
                    <div>
                      <el-checkbox>上海迪斯尼徐汇校区</el-checkbox>
                    </div>
                  </div>
                  <div class="hint_info">
                    <i class="el-icon-warning"></i>
                    修改角色的使用校区不影响员工已有角色，如需修改员工账号请编辑员工
                  </div>
                </div>
              </div>

              <div class="sub_item">
                <div class="sub_title">适用校区</div>
                <div class="info_box">
                  <div class="sub_info">
                    <div>
                      <el-checkbox>功能一</el-checkbox>
                    </div>
                    <div>
                      <el-checkbox>功能二</el-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "role_manage",
  data() {
    return {
      checked: true,
      radio: 1
    };
  }
};
</script>

<style scoped>
.role {
  padding: 20px 15px;
  box-sizing: border-box;
}
.content_box1 {
  padding-top: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background: #fff;
}
.el-row {
  margin-top: 20px;
}
.item_list {
  border: 1px solid #dded;
  border-radius: 8px;
  min-height: 400px;
  padding: 15px;
}
.radio_box {
  margin-bottom: 10px;
}
.sub_item {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.info_box {
  width: 100%;
}
.sub_title {
  min-width: 100px;
}
.sub_info {
  width: 100%;
  min-height: 80px;
  background: #ddd;
  padding: 10px;
}
.sub_info div {
  margin-bottom: 16px;
}
.sub_info div:last-child {
  margin-bottom: 0;
}
.hint_info {
  /* text-align: center; */
  color: #ffbe5e;
  margin-top: 20px;
}
</style>
