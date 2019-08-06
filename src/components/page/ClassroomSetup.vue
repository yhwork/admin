<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>教室</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click="dialogFormVisible = true">创建教室</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="number" label="编号"></el-table-column>
        <el-table-column prop="room_num" label="房号"></el-table-column>
        <el-table-column prop="state" label="状态" width="300"></el-table-column>
        <el-table-column prop="campus" label="所在校区"></el-table-column>
        <el-table-column label="操作" width="280" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-plus" @click>添加</el-button>
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

      <el-dialog title="创建教室" class="dialog_box" center :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="校区" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择校区">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="编号" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="房间号" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            style="background:orange;border:1px solid orange;"
            type="primary"
            @click="dialogFormVisible = false"
          >确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "room",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
      // this.$router.push({ path: "/campusSetup" });
    }
  }
};
</script >

<style >
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
.content_right {
  width: 80%;
  margin-left: 40px;
}
.avatar-uploader {
  width: 300px;
  height: 350px;
  border-radius: 8px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
.el-icon-upload {
  font-size: 50px;
  color: #ccc;
  text-align: center;
  line-height: 80px;
}

.avatar-uploader .avatar {
  width: 300px;
  height: 350px;
  border-radius: 8px;
}
.upload_info {
  font-size: 15px;
  margin: 10px 0;
}
.input_item {
  height: 50px;
  display: flex;
  align-items: center;
}
.input_symbol {
  color: #e51c23;
  color: 18px;
}
.input_box {
  width: 50%;
}
.input_info {
  font-size: 14px;
  color: #999;
  margin-left: 20px;
}
.symbol_box {
  margin-right: 10px;
}
.amap-wrapper {
  width: 900px;
  height: 300px;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.btn_box {
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn_box el-button {
  margin-left: 50px;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}

.sub-table-expand {
  font-size: 0;
}
.sub-table-expandlabel {
  width: 90px;
  color: #99a9bf;
}
.sub-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.head_pic {
  width: 50px;
  height: 50px;
}
.el-dialog__header {
  background: rgb(50, 65, 87)!important;
}
.el-dialog__title {
  color: #fff;
}
.dialog-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>


