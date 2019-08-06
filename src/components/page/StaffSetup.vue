<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>
    </el-breadcrumb>
    <form class="content_box1">
      <div class="content_item">
        <div class="content_title">员工信息</div>
        <div class="staff_info">
          <div class="content_left">
            <el-upload
              class="avatar_uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <div v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">头像上传</div>
              </div>
            </el-upload>
          </div>
          <div class="content_right">
            <el-row>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>名称</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称"></el-input>
              </el-col>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>手机号</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称"></el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>性别</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">男</el-radio>
                  <el-radio v-model="radio" label="2">女</el-radio>
                </template>
              </el-col>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>所属部门</span>
                </div>
                <template>
                  <el-select placeholder="请选择" v-model="value">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </template>
              </el-col>
            </el-row>
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>是否为上课老师</span>
              </div>
              <template>
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </template>
              <span class="input_info">选择“否“，进行分校区创建</span>
            </div>
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>教师资格证号码</span>
              </div>
              <el-input class="input_box" placeholder="请输入" v-model="getAddress"></el-input>
            </div>
          </div>
        </div>
        <div class="staff_info">
          <div class="content_left">
            <el-upload
              class="avatar_uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <div v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">教师证上传</div>
              </div>
            </el-upload>
          </div>
          <div class="content_right">
            <div class="input_item">
              <div class="symbol_box">
                <span>所在校区</span>
              </div>
              <template>
                <el-radio v-model="radio" label="1">全部校区</el-radio>
                <el-radio v-model="radio" label="2">指定校区</el-radio>
              </template>
            </div>
            <div class="input_item" style="align-items:flex-start">
              <div class="symbol_box">
                <span>微信二维码</span>
              </div>
              <div style="display:flex;align-items:flex-end;">
                <el-upload
                  class="code_uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <div v-else>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">二维码上传</div>
                  </div>
                </el-upload>
                <span class="input_info">选择“否“，进行分校区创建</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="account_box">
        <div class="content_title">机构账号</div>
        <div class="staff_info">
          <div class="content_right">
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>登录系统</span>
              </div>
              <template>
                <el-radio v-model="radio" label="1">允许</el-radio>
                <el-radio v-model="radio" label="2">禁止</el-radio>
              </template>
            </div>
            <el-row>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>登录名</span>
                </div>
                <el-input class="input_box" placeholder="请输入登录名"></el-input>
              </el-col>
              <el-col :span="12" class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span>密码</span>
                </div>
                <el-input class="input_box" placeholder="请输入密码"></el-input>
              </el-col>
            </el-row>
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>管辖校区</span>
              </div>
              <template>
                <el-radio v-model="radio" label="1">全部校区</el-radio>
                <el-radio v-model="radio" label="2">指定校区</el-radio>
              </template>
            </div>
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>角色</span>
              </div>
              <template>
                <el-checkbox v-model="checked">教师</el-checkbox>
                <el-checkbox>行政</el-checkbox>
              </template>
            </div>
            <div class="input_item">
              <div class="symbol_box">
                <span class="input_symbol">*</span>
                <span>选择权限</span>
              </div>
              <template>
                <el-select placeholder="请选择" v-model="value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_box1">
        <el-button class="btn_item">取消</el-button>
        <el-button type="primary" class="btn_item">保存</el-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "staff_setup",
  data() {
    return {
      imageUrl: "",
      radio: "1",
      checked: true,
      options: [
        {
          value: "选项1",
          label: "上级1"
        },
        {
          value: "选项2",
          label: "上级2"
        }
      ],
      zoom: 16, //地图缩放点
      lng: 0, //地图经度
      lat: 0, //地图纬度
      center: [117.255267, 31.515451] //初始化地图中心点
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
    getName(e) {
      // console.log("name",e)
    }
  }
};
</script >

<style scoped>
.campus {
  padding: 20px 15px;
}
.content_box1 {
  padding-top: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
.staff_info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.content_title {
  margin-bottom: 20px;
  background: #ccc;
  padding: 10px;
  text-align: center;
}
.content_left {
  margin-right: 40px;
}
.content_right {
  width: 80%;
}
.avatar_uploader {
  width: 150px;
  height: 200px;
  border-radius: 8px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.avatar_uploader .el-icon-upload {
  font-size: 50px;
  color: #ccc;
  text-align: center;
  line-height: 80px;
}
.avatar_uploader .avatar {
  width: 150px;
  height: 200px;
  border-radius: 8px;
}

.code_uploader {
  width: 80px;
  height: 100px;
  border-radius: 8px;
  border: 1px dashed #ccc;
  font-size: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code_uploader .el-icon-upload {
  font-size: 20px;
  color: #ccc;
  line-height: 40px;
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
  min-width: 100px;
  margin-right: 20px;
}
.account_box {
  margin-top: 20px;
}

.btn_box1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.btn_box1 .btn_item {
  width: 150px;
  margin: 40px 80px 10px 80px;
}
</style>


