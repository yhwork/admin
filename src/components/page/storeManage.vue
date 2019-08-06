<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新建门店</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="content_box1"
    >
      <el-form-item label="门店名称：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入门店名称"></el-input>
      </el-form-item>

      <el-form-item label="门店 logo： " prop="logo">
        <el-upload
          class="upload_box1"
          action="/store/file/img/upload"
          :show-file-list="false"
          :on-success="uploadlogo"
          :headers="headers"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="logo" :src="logo" class="avatar">
          <div v-else>
            <i class="el-icon-plus"></i>
            <div class="el-upload__text">上传logo</div>
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="主营类目：" prop="category">
        <el-select v-model="ruleForm.category" value-key="id" placeholder="请选择主营类目">
          <el-option
            v-for="item in categoryList"
            :label="item.name"
            :key="item.id"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="门店负责人：" prop="personInCharge">
        <el-input v-model="ruleForm.personInCharge" placeholder="请输入负责人姓名"></el-input>
      </el-form-item>
      <el-form-item label="负责人手机号：" prop="picPhone">
        <el-input v-model="ruleForm.picPhone" placeholder="请输入负责人手机号"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码：" prop="veryify_code">
        <div class="input_box">
          <el-input v-model="ruleForm.veryify_code" placeholder="请输入短信验证码"></el-input>
          <el-button
            type="primary"
            :plain="true"
            v-if="btnTitle"
            class="ml"
            @click="getVerificationCode()"
            :disabled="code_state"
          >{{btnTitle}}</el-button>
        </div>
        <span class="hint_info">验证短信将发送到你绑定的手机：{{user_tel}}，请注意查收</span>
      </el-form-item>

      <el-form-item label="选择门店类型：" prop="companyType">
        <el-radio-group v-model="companyType" @change="changeType">
          <el-radio-button label="0">直营店</el-radio-button>
          <el-radio-button label="1">加盟店</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <div v-if="veryifyType">
        <div class="title">请选择你可提供的认证信息</div>
        <el-form-item label="加盟授权书： " prop="joinImg">
          <el-upload
            class="upload_box1"
            action="/store/file/img/upload"
            :show-file-list="false"
            :on-success="uploadJoinImg"
            :headers="headers"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="joinImg" :src="joinImg" class="avatar">
            <div v-else>
              <i class="el-icon-plus"></i>
              <div class="el-upload__text">非原件照片需加盖公司红色公章</div>
            </div>
          </el-upload>
        </el-form-item>
      </div>
      <el-form-item label="门店地址：" prop="address">
        <el-input v-model="keyword"></el-input>
      </el-form-item>

      <div>
        <baidu-map
          class="map"
          id="mapID"
          center="上海市"
          :zoom="zoom"
          :scroll-wheel-zoom="true"
          @click="getMarker"
          style="witdth:400px;height:300px;"
        >
          <bm-local-search
            :keyword="keyword"
            :auto-viewport="true"
            :location="location"
            zoom="12.8"
            style="display: none"
          ></bm-local-search>
        </baidu-map>
      </div>

      <div class="bottom_box">
        <el-button type="primary" style="margin-top: 12px;width:150px;" @click="addOrgList('ruleForm')" >保存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "course",
  data() {
    return {
      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      btnTitle: "获取验证码",
      code_state: false, //是否可点击
      logo: "",
      categoryList: [],
      jgNameDialog: false,
      show: false,
      postionMap: {
        //地图坐标
        lng: 120.211486,
        lat: 30.256576
      },
      location: "",
      keyword: "", //搜索框关键词
      zoom: 12.8, //放大比例
      address: "", //位置详细信息
      add: {
        siteName: "",
        site: "",
        jd: "",
        wd: "",
        desce: "",
        type: "",
        jgName: "",
        jgNum: ""
      },
      organizationData: [],
      jgName: "",
      jgNum: "",
      disabled: true,
      veryifyType: false,
      companyType: "0",
      user_tel: "",

      ruleForm: {
        name: "",
        logo: "",
        subjectId: "",
        picPhone: "",
        personInCharge: "",
        companyType: "",
        latitude: "",
        longitude: "",
        address: ""
      },

      rules: {
        personInCharge: [
          { required: true, message: "请输入负责人", trigger: "blur" }
        ],
        picPhone: [
          { required: true, message: "请输入负责人手机号", trigger: "blur" }
        ],
        bankCard: [
          { required: true, message: "请输入银行账号", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入门店名称", trigger: "blur" }],
        logo: [{ required: true, message: "请上传门店照片", trigger: "blur" }],
        category: [
          { required: true, message: "请选择主营类目", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getUserInfo();
    this.getCategory()
  },
  methods: {

   //获取分类
    getCategory() {
      this.$axios({
        method: "get",
        url: "/store/org/getOrgSubList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.categoryList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //获取当前用户信息
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/store/storeUser/getCurrentUserInfo",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          //   this.id = res.data.result.userInfo.orgId;
          this.orgId = res.data.result.userInfo.orgId;
          //   this.ruleForm.personInCharge =
          //     res.data.result.orgInfo.orgPersonInCharge;
          //   this.ruleForm.picPhone = res.data.result.orgInfo.orgPicPhone;
          //   this.ruleForm.legal_name = res.data.result.orgInfo.orgCompanyName;
          //   this.ruleForm.bankCard = res.data.result.orgInfo.orgBankCard;
          //   this.ruleForm.bankType = res.data.result.orgInfo.orgBank;
          //   this.ruleForm.time = res.data.result.orgInfo.orgAuthCommitTime;
          this.user_tel = res.data.result.userInfo.account;
        })
        .catch(error => {
          console.log("error", error);
        });
    },


    getCode() {
      //倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.code_state = false;
          this.btnTitle = "获取验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.code_state = true;
          time--;
        }
      }, 1000);
    },

    // 获取验证码
    getVerificationCode() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.user_tel)) {
        this.$message.error("手机号不正确");
      } else {
        this.getCode();
        this.$axios({
          method: "post",
          url: "/store/sms/getSmsVerifyCode?phone=" + this.user_tel,
          headers: { Authorization: sessionStorage.getItem("Authorization") }
        })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    },
    uploadlogo(res, file) {
      this.ruleForm.logo = file.raw;
      this.logo = URL.createObjectURL(file.raw);
      this.logo = res.result;
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
 
    //获取搜索的地址
    getMarker(e) {
      this.longitude = e.point.lng;
      this.latitude = e.point.lat;
      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
      geocoder.getLocation(e.point, rs => {
        console.log("point", e.point, rs, rs.address);
        this.address = rs.address;
        this.keyword = rs.address;
      });
    },
    changeType(e) {
      this.veryifyType = !this.veryifyType;
      this.companyType = e;
    },
    //获取门店
    addOrgList(formName) {
      this.$refs[formName].validate(valid => {
        console.log("submitForm", valid, this.ruleForm, this.active);
        if (valid) {
          var params = {
            type:1,
            name: this.ruleForm.name,
            logo: this.logo,
            subjectId: this.ruleForm.category,
            picPhone: this.ruleForm.picPhone,
            personInCharge: this.ruleForm.personInCharge,
            companyType: parseInt(this.companyType),
            latitude: this.latitude,
            longitude: this.longitude,
            address: this.address
          };

          this.$axios({
            method: "post",
            url: "/store/org/addOrg",
            data: params,
            headers: { Authorization: sessionStorage.getItem("Authorization") }
          })
            .then(res => {
              console.log("save", res, this.ruleForm);
              if(res.data.errorCode==0){
                this.$router.push('/goods_setup')
              }
              this.ruleForm.veryify_code = "";
            })
            .catch(error => {
              console.log("error", error);
            });
        }
      });
    }
  }
};
</script >

<style scoped>
.bottom_box{
  display: flex;
  align-items: center;
  justify-content: center;
}
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
.title {
  font-size: 18px;
  position: relative;
  margin: 8px 0;
}
.title::after {
  content: "";
  width: 2px;
  height: 100%;
  background: orange;
  position: absolute;
  left: -10px;
  border-radius: 3px;
}
.upload_box1 {
  width: 200px;
  height: 150px;
  border-radius: 8px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #999;
}
.upload_box1 .avatar {
  width: 200px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form-item >>> .el-form-item__label {
  width: 125px !important;
}
.el-form-item__content .el-input {
  width: 500px !important;
}
</style>


