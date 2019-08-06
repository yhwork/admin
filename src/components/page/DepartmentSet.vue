<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区设置</el-breadcrumb-item>
      <el-breadcrumb-item>部门设置</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <div>小区名字</div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="add_box">
            <div class="add_item">
              <span>部门名称</span>
              <el-input placeholder="最多可输入15字" v-model="getName"></el-input>
            </div>
            <div class="btn_box1">
              <el-button type>取消</el-button>
              <el-button type="primary">保存</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="add_box">
            <div class="add_item">
              <div>教师部</div>
              <el-button
                type="text"
                icon="el-icon-delete"
                class="red"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "department_set",
  data() {
    return {
      getName: ""
    };
  }
};
</script>

 <style scoped>
.campus {
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
.add_box {
  min-height: 400px;
  border-radius: 8px;
  background: #ddd;
  padding: 15px;
}
.add_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add_item span {
  min-width: 80px;
}
.btn_box1 {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.el-button {
  margin-left: 40px;
}
.red {
  color: red;
}
</style>


