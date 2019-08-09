<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="ms-content"
        >
          <div class="phone_box">
            <el-select v-model="city" placeholder="请选择" style="margin-right:10px;width:130px">
              <el-option v-for="item in cityArray" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-form-item prop="tel">
              <el-input v-model="ruleForm.tel" placeholder="今后使用手机号登录"></el-input>
            </el-form-item>
          </div>
          <div class="phone_box">
            <el-form-item prop="smsCode">
              <el-input
                class="auth_input"
                type="text"
                v-model="ruleForm.smsCode"
                placeholder="输入验证码"
              >
                <el-button slot="prepend" icon="el-icon-service"></el-button>
              </el-input>
            </el-form-item>
            <el-button
              :plain="true"
              v-if="btnTitle"
              class="ml"
              @click="getVerificationCode()"
              :disabled="disabled"
            >{{btnTitle}}</el-button>
          </div>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码">
              <el-button slot="prepend" icon="el-icon-service"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" placeholder="请再次输入密码">
              <el-button slot="prepend" icon="el-icon-service"></el-button>
            </el-input>
          </el-form-item>
          <el-button style="width:100%;" type="primary" @click="onSubmit('ruleForm')" :disabled="!checked">确定注册</el-button>
          <div class="btn_box1">
            <div>  
              <el-checkbox v-model="checked" @change="changeState">已阅读并同意</el-checkbox>
              <span style="color:#409EFF;cursor: pointer;" @click="agreement">《用户使用协议》</span>
            </div>
            <el-button @click="onCancle()" class="login_btn" >已有帐号，立即登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>             

<script>
import Util from "../../utils/utils";
export default {
  name: "register",
  data: function() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!Util.phoneReg.test(this.ruleForm.tel)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      checked:true,
      disabled: false, //是否可点击
      btnTitle: "获取验证码",
      city: "中国 +86",
      cityArray: [
        "中国 +86",
        "阿根廷 +54",
        "爱尔兰 +353",
        "澳大利亚 +61",
        "中国澳门 +853",
        "巴基斯坦 +92",
        "巴拿马 +507",
        "巴西 +55",
        "比利时 +32",
        "丹麦 +45",
        "德国 +49",
        "俄罗斯 +7",
        "法国 +33",
        "芬兰 +358",
        "古巴 +53",
        "韩国 +82",
        "荷兰 +31",
        "加拿大 +1",
        "老挝 +856",
        "卢森堡 +352",
        "马来西亚 +60",
        "美国 +1",
        "蒙古 +976",
        "摩纳哥 +377",
        "墨西哥 +52",
        "摩洛哥 +212",
        "尼泊尔 +977",
        "日本 +81",
        "瑞士 +41",
        "沙特阿拉伯 +966",
        "斯里兰卡 +94",
        "泰国 +66",
        "中国台湾 +886",
        "土耳其 +90",
        "委内瑞拉 +58",
        "乌克兰 +380",
        "中国香港 +852",
        "新加坡 +65",
        "新西兰 +64",
        "意大利 +39",
        "伊朗 +98",
        "印度 +91",
        "印度尼西亚 +62",
        "英国 +44",
        "越南 +84",
        "西班牙 +34"
      ],
      auth_time: 0,
      sendAuthCode: true,
      verification: "", //绑定输入验证码框框
      ruleForm: {
        tel: "",
        password: "",
        checkPass: "",
        smsCode: ""
      },
      rules: {
        tel: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        smsCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  created() {
    document.onkeydown = function(e) {
      var key = window.event.keyCode;
      if (key == 13) {
        that.onSubmit('ruleForm');
      }
    }
  },
  methods: {
    getCode() {
      //倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },

    // 获取验证码
    getVerificationCode() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.ruleForm.tel)) {
        this.$message.error("手机号不正确");
      } else {
        this.getCode();
        this.$axios({
          method: "post",
          url: "/store/sms/getSmsVerifyCode?phone=" + this.ruleForm.tel,
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

    //注册协议
    agreement(){
      console.log('注册协议')
    },
    changeState(e){
      console.log('sif',e)
      this.checked=e
    },
    onSubmit(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/store/auth/storeUserRegister", {
              username: self.ruleForm.tel,
              password: self.ruleForm.password,
              smsCode: self.ruleForm.smsCode
            })
            .then(function(res) {
              if (res.data.errorCode == "200002") {
                console.log("账号或密码不能为空！");
                self.$message.error("账号或密码不能为空！");
              } else if (res.data.errorCode == "200003") {
                console.log("账号不能为空");
                self.$message.error("账号不能为空");
              } else if (res.data.errorCode == "200004") {
                console.log("密码不能为空");
                self.$message.error("密码不能为空");
              } else if (res.data.errorCode == "200009") {
                console.log("注册失败");
                self.$message.error("注册失败");
              } else if (res.data.errorCode == "200010") {
                console.log("注册成功");
                self.$message({
                  message: "注册成功",
                  type: "success"
                });
                self.$router.push("/login");
              } else if (res.data.errorCode == "200012") {
                console.log("账号已注册");
                self.$message.error("账号已注册");
              } else if (res.data.errorCode == "200017") {
                console.log("手机验证码错误");
                self.$message.error("手机验证码错误");
              }
            })
            .then(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onCancle() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.phone_box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.ml {
  margin-left: 10px;
}
.login-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/bg.jpg);
  background-size: 100%;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  background: orange;
  border: 0;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.btn_box1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #38f;
  margin-top: 10px;
}
.el-checkbox{
  margin-right: 0;
}
/* .btn_box1 >>> .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after{
  border-color:#fff;
}
.btn_box1 >>> .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{
  border-color:#409EFF!important;
  background-color:#409EFF!important;
  background: none;
}
.btn_box1 >>>.el-checkbox__input.is-disabled+span.el-checkbox__label{
  font-size: 13px;
  cursor: pointer;
  /* color: #C0C4CC; 
} */
.btn_box1 >>>.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #C0C4CC; 
}
.login_btn{
  border:0;background:none;padding:0;
  color:#409EFF;
  font-size: 13px;
  padding-top: 5px;
}
</style>