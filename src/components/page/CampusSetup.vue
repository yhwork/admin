<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区设置</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>
    </el-breadcrumb>
    <form class="content_box1">
      <div class="content_left">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div v-else>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">营业执照上传</div>
          </div>
        </el-upload>
        <div>
          <div class="upload_info">是否与上级同一营业执照</div>
          <template>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </template>
        </div>
      </div>
      <div class="content_right">
        <div class="input_item">
          <div class="symbol_box">
            <span class="input_symbol">*</span>
            <span>名称</span>
          </div>
          <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
        </div>
        <div class="input_item">
          <div class="symbol_box">
            <span class="input_symbol">*</span>
            <span>是否为总部</span>
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
            <span>上级</span>
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
          <span class="input_info">如果是分校区，则必须先创建上级校区</span>
        </div>
        <div class="input_item">
          <div class="symbol_box">
            <span class="input_symbol">*</span>
            <span>地址</span>
          </div>
          <el-input class="input_box" placeholder="请输入地址" v-model="getAddress"></el-input>
        </div>
        <div class="amap-wrapper">
          <el-amap class="amap-box" :vid="amap_vue"></el-amap>
        </div>
        <div class="btn_box">
          <el-button>取消</el-button>
          <el-button type="primary" plain>保存</el-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "campus_setup",
  data() {
    return {
      imageUrl: "",
      radio: "1",
      value: "",
      amap_vue: "",
      getAddress: "",
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
      center: [117.255267, 31.515451], //初始化地图中心点
      getName: ""
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

  }
};
</script >

<style scoped>
.campus {
  padding: 20px 15px;
}
.content_box1 {
  display: flex;
  align-items: flex-start;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
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
</style>


