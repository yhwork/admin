<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>公司信息</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="content_box1"
    >
      <el-form-item label="企业名称：" prop="legal_name">
        <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称"></el-input>
      </el-form-item>
      <el-form-item label="银行账号：" prop="bankCard">
        <el-input v-model="ruleForm.bankCard" placeholder="请输入银行账号"></el-input>
      </el-form-item>
      <el-form-item label="开户行：" prop="bankType">
        <el-input v-model="ruleForm.bankType" placeholder="请输入开户行" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="主营类目：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入主营类目" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="创建日期：" prop="time">
        <el-input v-model="ruleForm.time" placeholder="请输入创建日期" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item label="负责人姓名：" prop="personInCharge">
        <el-input v-model="ruleForm.personInCharge" placeholder="请输入负责人姓名"></el-input>
      </el-form-item>
      <el-form-item label="负责人手机号：" prop="picPhone">
        <el-input v-model="ruleForm.picPhone" placeholder="请输入负责人手机号"></el-input>
      </el-form-item>
      <!-- <el-form-item label="开户银行：" prop="bankName">
          <el-select v-model="ruleForm.bankName" @change="changeBank" placeholder="请选择">
            <el-option
              v-for="item in bankList"
              :label="item.bankName"
              :key="item.bankId"
              :value="item.bankId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开户支行：" prop="name">
          <el-select
            v-model="ruleForm.name"
            value-key="code"
            placeholder="请选择"
            @change="changeCity"
          >
            <el-option
              v-for="item in provinceList"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
          <el-select v-model="name" value-key="name" placeholder="请选择" @change="changeArea">
            <el-option
              v-for="item in cityList"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
          <el-select
            v-model="value"
            placeholder="请选择"
            value-key="subBranchId"
            @change="changeSubBank"
          >
            <el-option
              v-for="item in banksListByCity"
              :key="item.subBranchId"
              :label="item.subBranchName"
              :value="item.subBranchId"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主营类目：" prop="category">
          <el-select v-model="ruleForm.category" value-key="id" placeholder="请选择活动区域">
            <el-option
              v-for="item in categoryList"
              :label="item.name"
              :key="item.id"
              :value="item.id"
            ></el-option>
          </el-select>
      </el-form-item>-->

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
      <el-button type="primary" style="margin-top: 12px;" @click="submitForm('ruleForm')">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "class",
  data() {
    return {
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

      ruleForm: {
        legal_name: "",
        legal_person: "",
        bankCard: "",
        bankType: "",
        bankName: "",
        address: "",
        longitude: "",
        latitude: "",
        personInCharge: "",
        picPhone: "",
        time: ""
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
        legal_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    //获取当前用户信息
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/store/storeUser/getCurrentUserInfo",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log("666666666666", res);
          this.orgId = res.data.result.userInfo.orgId;
          this.ruleForm.personInCharge =
            res.data.result.orgInfo.orgPersonInCharge;
          this.ruleForm.picPhone = res.data.result.orgInfo.orgPicPhone;
          this.ruleForm.legal_name = res.data.result.orgInfo.orgCompanyName;
          this.ruleForm.bankCard = res.data.result.orgInfo.orgBankCard;
          this.ruleForm.bankType = res.data.result.orgInfo.orgBank;
          this.ruleForm.time = res.data.result.orgInfo.orgAuthCommitTime;
        })
        .catch(error => {
          console.log("error", error);
        });
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
     //表单验证，下一步
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("submitForm", valid, this.ruleForm, this.active);

        // if (valid) {
        //   if (this.active == 0) {
        //     this.authStatus = 1;
        //   } else if (this.active == 1) {
        //     this.authStatus = 2;
        //   } else if (this.active == 2) {
        //     this.authStatus = 3;
        //   }
        //   if (this.active++ > 3) this.active = 0;
        //   if (this.active == 1) {
        //     this.orgType = parseInt(this.ruleForm.orgType); //机构类型：0公司 1个人 2公益组织(必填)
        //     this.companyName = this.ruleForm.legal_name; //企业名称(必填)
        //     if (this.orgType == "0") {
        //       this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
        //       this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
        //     } else if (this.orgType == "1") {
        //       this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
        //       this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
        //       this.idcardNum = this.ruleForm.idcardNum;
        //     } else if (this.orgType == 2) {
        //       this.personInCharge = this.ruleForm.personInCharge; //企业法人(必填)
        //       this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
        //     }
        //     if (this.licences_checked) {
        //       this.licencesExpiryDate = JSON.stringify({
        //         startTime: this.ruleForm.startTime
        //       });
        //       this.idcardExpiryDate = JSON.stringify({
        //         startTime: this.ruleForm.startTime1
        //       });
        //     } else {
        //       this.licencesExpiryDate = JSON.stringify({
        //         startTime: this.ruleForm.startTime,
        //         endTime: this.ruleForm.endTime
        //       });
        //       this.idcardExpiryDate = JSON.stringify({
        //         startTime: this.ruleForm.startTime1,
        //         endTime: this.ruleForm.endTime1
        //       });
        //     }
        //   } else if (this.active == 2) {
        //     this.companyName = this.ruleForm.legal_name; //企业名称(必填)
        //     this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
        //     this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
        //     this.bankCardType = this.ruleForm.bankCardType; //银行卡类别(1中国 2工行 3招行...)(必填)
        //     this.bankCard = this.ruleForm.bankCard; //银行卡账号(必填)
        //   } else if (this.active == 3) {
        //     (this.personInCharge = this.ruleForm.personInCharge),
        //       (this.personInCharge = this.ruleForm.personInCharge),
        //       (this.address = this.ruleForm.address);
        //     this.name = this.ruleForm.name;
        //     this.subjectId = this.ruleForm.category;
        //   }
        // } else {
        //   console.log("error submit!!");
        //   return false;
        // }
        this.saveInfo();
      });
    },

    //表单提交
    saveInfo() {
      var params = {};
      console.log("saveinfo", params, this.active);
      this.$axios({
        method: "put",
        url: "/store/org/updateOrgInfo",
        data: params,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log("save", res, this.ruleForm);
            this.getUserInfo();
          this.ruleForm.veryify_code = "";
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
.el-form-item >>> .el-form-item__label {
  width: 125px !important;
}
.el-form-item >>>.el-form-item__content {
  margin-left: 120px!important;
}
.el-form-item__content .el-input{
  width:500px!important;
}
</style>


