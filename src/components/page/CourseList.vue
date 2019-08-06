<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/'}">校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click>创建教室</el-button>
      </div>
      <div>
        <div class="dropdown_box">
          <el-dropdown>
            <span class="el-dropdown-link">
              开课校区
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              科目
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              教课模式
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              课程状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              类别
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="label_box">
          <div class="label_item">
            <span>开课校区：</span>
            <span class="label_info">迪斯尼英语徐汇校区</span>
          </div>
          <div class="label_item">
            <span>开课校区：</span>
            <span class="label_info">迪斯尼英语徐汇校区</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content_box1">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="number" label="序号"></el-table-column>
        <el-table-column prop="room_num" label="课名"></el-table-column>
        <el-table-column prop="state" label="科目" ></el-table-column>
        <el-table-column prop="campus" label="类别"></el-table-column>
        <el-table-column prop="number" label="授课模式"></el-table-column>
        <el-table-column prop="room_num" label="收费模式"></el-table-column>
        <el-table-column prop="state" label="开课校区" width="300"></el-table-column>
        <el-table-column prop="campus" label="创建时间"></el-table-column>
        <el-table-column prop="campus" label="课程状态"></el-table-column>
        <el-table-column label="操作" width="280" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "course_list",
  data() {
    return {
      tableData: [
        {
          number: "校区名称",
          room_num: "简称",
          state: "上海市普陀区金沙江路 1518 弄",
          phone: "123456789",
          campus: "营业执照"
        },
        {
          number: "校区名称",
          room_num: "简称",
          state: "上海市普陀区金沙江路 1518 弄",
          phone: "123456789",
          campus: "营业执照"
        }
      ]
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    campusSetup(e) {
      this.$router.push({ path: "/campusSetup" });
    }
  }
};
</script >

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
.dropdown_box {
  margin-top: 15px;
}
.el-dropdown {
  margin-right: 20px;
}
.label_box {
  margin-top: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.label_item {
  margin-right: 20px;
}
.label_info {
  display: inline-block;
  padding: 8px 10px;
  background: #ddd;
}
</style>


