<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>校区</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>-->
    </el-breadcrumb>
    <div class="content_box1">
      <div class="handle-box">
        <el-button type="primary" class="handle-del" @click="campusSetup">新建校区</el-button>
      </div>
      <el-table :data="campusList" class="table">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="sub-table-expand">
              <el-form-item label="教师部"></el-form-item>
              <el-form-item label="行政部"></el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="校区名称" width="300"></el-table-column>
        <el-table-column prop="alias" label="简称"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="tel" label="电话"></el-table-column>
        <el-table-column prop="licences" label="营业执照" align="center">
          <!-- <template slot-scope="scope">
            <img :src="scope.row.head_pic" class="head_pic">
          </template>-->
        </el-table-column>
        <el-table-column prop="openingPermit" label="账号开通"></el-table-column>
        <el-table-column label="操作" width="340" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加子校区</el-button>
            <el-button type="text" icon="el-icon-plus" @click="departmentSet">设置部门</el-button>
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
  name: "department",
  data() {
    return {
      campusList: [],
      tableData: [
        {
          name: "校区名称",
          sub_name: "简称",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "123456789",
          license: "营业执照",
          head_pic: "../../assets/images/img2.jpg",
          account_state: "账号开通"
        },
        {
          name: "校区分部名称",
          sub_name: "简称",
          license: "是",
          head_pic: "../../assets/images/img2.jpg",
          account_state: "账号开通"
        }
      ]
    };
  },
  created() {
    this.getList();
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
      this.$router.push({ path: "/campus_setup" });
      // campus_setup
    },
    departmentSet() {
      this.$router.push({ path: "/department_set" });
    },
    getList() {
      this.$axios({
        method: "get",
        url: "/store/org/getOrgList"
        // headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.campusList = res.data.result;
         console.log("res",res.data)
         if(res.data.errorCode=="400001"){
            this.$message.error("没有访问权限！");
         }
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row.id);
      this.$axios({
        method: "delete",
        url: "/store/org/deleteOrg/"+row.id,
      })
        .then(res => {
          this.getList()
        })
        .catch(error => {
          console.log("error", error);
        });
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
</style>


