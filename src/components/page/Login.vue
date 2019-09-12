<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <!-- <div v-if="errorInfo">
          <span>{{errInfo}}</span>
        </div>-->
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名">
            <el-button slot="prepend" icon="el-icon-service"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-service"></el-button>
          </el-input>
        </el-form-item>
        <!-- <el-form-item prop="vrifyCode">
          <div class="">
            <el-input placeholder="请输入验证码" v-model="ruleForm.vrifyCode">
              <el-button slot="prepend" icon="el-icon-service"></el-button>
            </el-input>
            <img :src="code_img" alt @click="getCode()">
          </div>
        </el-form-item>-->
        <el-form-item prop="vrifyCode">
          <div class="verify_box">
            <el-input placeholder="请输入验证码" style="width:230px;" v-model="ruleForm.vrifyCode">
              <el-button slot="prepend" icon="el-icon-service"></el-button>
            </el-input>
            <img :src="code_img" alt @click="getCode()" />
          </div>
        </el-form-item>

        <div class="btn_box1">
          <div>
            <el-checkbox v-model="checkedPwd" @change="changePwd">记住密码</el-checkbox>
          </div>
          <!--<el-button  @click="register()" class="login_btn" >忘记密码</el-button>  -->
        </div>
        <div class="login-btn">
          <el-button type="primary" :disabled="!checked" @click.prevent="submitForm('ruleForm')">登录</el-button>
        </div>
        <div class="login-btn">
          <!-- <el-button type="primary" @click="register()">注册</el-button> -->
        </div>

        <div class="btn_box1">
          <div>
            <el-checkbox v-model="checked" @change="changeState">已阅读并同意</el-checkbox>
            <span style="color:#409EFF;cursor: pointer;" @click="agreement">《用户使用协议》</span>
          </div>
          <el-button @click="register()" class="login_btn">免费注册</el-button>
        </div>
      </el-form>
    </div>
    <a class="bottom_info" href=" http://www.beian.miit.gov.cn" target="_blank">沪ICP备18004521号-1</a>
  </div>
</template>          

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import crypt from "@/utils/crypto";
import router from "../../router";
import qs from "qs";
export default {
  name: "login",
  data: function() {
    return {
      checkedPwd: true,
      checked: true,
      errorInfo: false,
      code_img: "",
      ruleForm: {
        username: "",
        password: "",
        vrifyCode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        vrifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      viewsCount: "app/demo"
    }),
    ...mapGetters({
      todosALise: "user" // user 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
    })
  },
  created() {
    let Eninfo = localStorage.getItem("remember_info");
    if (Eninfo) {
      let Deinfo = JSON.parse(crypt.Decrypt(Eninfo));
      // console.log('解密后',Deinfo,);
      this.ruleForm.username = Deinfo.id;
      this.ruleForm.password = Deinfo.pwd;
    } else {
      this.ruleForm.username = "";
      this.ruleForm.password = "";
    }
    // console.log('getter',this.todosALise)
    var that = this;
    that.getCode();
    // that.geytList()
    document.onkeydown = function(e) {
      var key = window.event.keyCode;
      if (key == 13) {
        that.submitForm("ruleForm");
      }
    };
  },
  methods: {
    // vuex的集合
    ...mapMutations({
      totalAlise: "app/getstore" // getstore 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
    }),
    // vuex 异步调用方法
    ...mapActions({
      blogAdd: "user/asyncSetToken" // 第一个blogAdd是定义的一个函数别名称，挂载在到this(vue)实例上，后面一个blogAdd 才是actions里面函数方法名称
    }),
    //注册协议
    agreement() {
      console.log("注册协议");
    },
    changeState(e) {
      console.log("sif", e);
      this.checked = e;
    },
    // 记住密码
    changePwd(e) {
      console.log("sif", e);
      this.checkedPwd = e;
    },
    getList() {
      this.$axios({
        method: "post",
        url:
          '/store/storeProduct/getStoreProductHotList?parameter={}&client={"wap":"wap"}&token=288cd199-8114-444d-a149-d56077595de2&source=wxapp&langCode=zh&version=1.0',
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
          // token:'288cd199-8114-444d-a149-d56077595de2'
        }
      });
    },

    getCode() {
      this.$axios
        .get("/store/captcha/getCaptchaCode")
        .then(res => {
          this.code_img = "data:image/jpeg;base64," + res.data.result.img;
          sessionStorage.setItem("vrifyKey", res.data.result.vrifyKey);
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    submitForm(formName) {
      console.log(formName); //formName
      const self = this;
      var params = {
        password: self.ruleForm.password,
        username: self.ruleForm.username,
        vrifyCode: self.ruleForm.vrifyCode,
        vrifyKey: sessionStorage.getItem("vrifyKey")
      };
      console.log("第一次点击", params);
      // 13716583263 736602

      self.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          this.$axios({
            method: "post",
            url: "/store/auth/storeUserLogin",
            data: params
            // headers: { Authorization: sessionStorage.getItem("Authorization") }
          })
            .then(res => {
              console.log(res);
              if (res.data.errorCode == 200000) {
                sessionStorage.setItem("ms_username", self.ruleForm.username);

                // 设置记住密码
                if (this.checkedPwd) {
                  let userinfo = JSON.stringify({
                    id: params.username,
                    pwd: params.password
                  });
                  // console.log('密码数据',userinfo)
                  let Eninfo = crypt.Encrypt(userinfo);
                  // console.log('加密后',Eninfo);
                  // 保存
                  localStorage.setItem("remember_info", Eninfo);
                } else {
                  localStorage.clear();
                }
                // let Deinfo =JSON.parse(crypt.Decrypt(Eninfo));
                // console.log('解密后',Deinfo)
                sessionStorage.setItem(
                  "Authorization",
                  "Bearer " + res.data.result.token
                );
                // 存到 store
                let Authorization = `Bearer ${res.data.result.token}`;
                // console.log(Authorization);

                this.blogAdd(Authorization);
                console.log(this.todosALise);
                return this.$router.push("/");
              }
              if (res.data.errorCode == 200014) {
                this.$message.error("账号或密码错误");
              } else if (res.data.errorCode == 200015) {
                this.$message.error("账号被停用");
              } else if (res.data.errorCode == 200016) {
                this.$message.error("验证码错误");
                this.getCode();
              } else if (res.data.errorCode == 200001) {
                this.$message.error("登录失败");
              }
            })
            .catch(error => {
              console.log("error", error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    register() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>
        
<style scoped>
.login-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/bg2.jpg);
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
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
  /* background: orange; */
  border: 0;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.verify_box {
  display: flex;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
}
.verify_box img {
  margin-left: 8px;
}
.btn_box1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #38f;
  margin: 10px 0;
}
.el-checkbox {
  margin-right: 0;
}
.btn_box1 >>> .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #c0c4cc;
}
.login_btn {
  border: 0;
  background: none;
  padding: 0;
  color: #409eff;
  font-size: 13px;
  padding-top: 5px;
}
.bottom_info {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #c0c4cc;
}
</style>