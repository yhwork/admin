<style lang="scss">
.users {
  .el-input {
    width: auto;
  }
  .el-transfer {
    width: auto;
  }
  .el-input__inner {
    width: auto;
  }
  .flex_row {
    display: flex;
    flex-flow: row nowrap;
  }
  .flex_column {
    display: flex;
    flex-flow: column wrap;
  }
  .m_left {
    margin: 0 15px;
  }
  .boeder {
    padding: 0 5px;
    margin: 3px 5px;
    width: 650px;
    overflow: hidden;
    box-sizing: border-box;
    border: rgba(0, 0, 0, 0.1) solid 1px;
    border-radius: 15px;
  }
  .font_color {
    color: #696969;
    font-size: 12px;
    p {
      font-size: 12px !important;
    }
  }
  .w_size {
    .el-input {
      width: 140px; // 直接写固定值
    }
    .el-select {
      width: 55%;
    }
    .el-input__inner {
      width: 95%;
    }
  }
  .clearselectall {
    font-size: 0.6rem;
    color: #409eff;
    height: 40px;
    line-height: 35px;
    margin-left: 15px;
  }
  .clearpadding {
    margin-top: 2px;
    padding: 8px 12px !important;
    margin-left: 15px;
  }
  .newUsers {
    position: relative;
    align-items: center;
    margin: 10px 0 25px 0;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .el-upload--picture-card {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .progress {
    width: 500px;
    position: absolute;
    right: 2%;
    border-radius: 15px;
    padding: 2px 3px;
    border: rgba(0, 0, 0, 0.1) 1px double;
    .progressitem {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 8px;
      justify-content: space-between;
      p {
        font-size: 12px;
      }
    }
  }
  .m_bottom {
    margin-bottom: 35px;
  }
  .flex_center {
    display: flex;
    justify-content: center;
  }
  .tenter {
    margin: 50px 50px;
  }
  .headerclassname {
    border: 1px solid #ccc !important;
    color: darkslategrey;
    background-color: #ccc !important;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #cbd1d8 !important;
  }

  .table_border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #a0c6f0 !important;
  }

  .table_borders {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #cae1ff !important;
  }
  .line {
    margin-bottom: 10px;
  }
  .roleselect {
    margin-right: 10px;
    max-width: 10rem;
    p {
      font-size: 14px;
      color: #696969;
    }
  }
  .hovers:hover {
    color: #409eff;
  }
}
.pointer {
  cursor: pointer;
}
</style>

<template>
  <div class="content_box1 users">
    <div class="m_bottom">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="pointer">教务管理</el-breadcrumb-item>
        <div v-if="my_newcourse">
          <div v-if="iscreate">
            <el-breadcrumb-item>
              <span class="pointer hovers" @click.stop="changetitle(2)">员工管理</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span class="pointer hovers">新建员工</span>
            </el-breadcrumb-item>
          </div>
          <div v-else>
            <el-breadcrumb-item @click.stop="changetitle(2)">
              <span class="pointer hovers" @click.stop="changetitle(2)">员工管理</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span class="pointer hovers">编辑员工</span>
            </el-breadcrumb-item>
          </div>
        </div>
        <div v-else>
          <el-breadcrumb-item>
            <span class="pointer hovers">员工管理</span>
          </el-breadcrumb-item>
        </div>
      </el-breadcrumb>
    </div>
    <div v-if="my_newcourse">
      <!--新建员工-->
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="员工姓名：" prop="userName">
          <div class="flex_row">
            <el-input v-model="form.userName" placeholder="请输入员工姓名" maxlength="8"></el-input>
            <div class="m_left font_color">
              <p>建议真实姓名，方便管理</p>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="员工账号：" label-width="110px" prop="userPhone">
          <div class="flex_row">
            <el-select :disabled="true" class="w_size" v-model="form.phone" placeholder="中国+86">
              <el-option
                :class="'w_size'"
                v-for="(item,index) in form.phoneCity"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-input
              class="m_left"
              :disabled="!iscreate"
              v-model.number="form.userPhone"
              placeholder="请输入员工手机号"
              maxlength="11"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="设置密码：" prop="userPwd">
          <div class="flex_row">
            <el-input
              :disabled="!iscreate"
              v-model="form.userPwd"
              type="password"
              placeholder="为员工设置密码"
              maxlength="16"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="员工编号：" prop="userId">
          <div>
            <el-input v-model="form.userId" placeholder="请输入员工编号"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="所属门店：" :required="true">
          <div class="boeder">
            <template>
              <!--   :left-default-checked="[2, 3]"
              :right-default-checked="[1]"-->
              <el-transfer
                v-model="form.orgId"
                :data="form.orgData"
                :left-default-checked="form.lchecked"
                :right-default-checked="form.rchecked"
                :titles="['全部', '已选中']"
                @change="handleChangese"
              ></el-transfer>
            </template>
          </div>
        </el-form-item>
        <!--<el-form-item label="账号类型：" label-width="100px"  :required='true'>
                <div class=" flex_row">
                   <el-select  v-model="form.role" placeholder='角色'>
                        <el-option
                            v-for="(item,index) in form.roletype"
                            :key="index"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <div class="m_left font_color"><p>如果没有相应角色，请点击“新建”进行添加</p></div>
                </div>
        </el-form-item>-->
        <el-form-item label="所属门店角色：" label-width="130px" :required="true">
          <div class="m_left font_color">
            <p>
              如果没有相应角色，请点击“
              <span @click="addrole">新建</span>”进行添加
            </p>
          </div>
          <!--机构
              [
                  { 
                    orgId:61,
                    name:'机构1',
                    roleId:'',
                    roleList:[
                        {roleId:21,name:'第一'},
                        {roleId:22,name:'第二'},
                    ]
                  },
                  {}
              ]
              //
              [{orgId:'',roleId:''}]
          -->
          <div v-for="(item, index) in form.roleIdList" :key="index">
            <div class="flex_row line">
              <div class="roleselect">
                <p class="font_size" :title="item.name">{{item.name}}</p>
              </div>
              <el-select v-model="item.roleId" placeholder="角色" @change="Changerole">
                <el-option
                  v-for="(items,index) in item.roleList"
                  :key="index"
                  :label="items.name"
                  :value="items.roleId"
                ></el-option>
              </el-select>
              <div v-if="item.roleId==0" class="roleselect">
                <p>请选择角色权限</p>
              </div>
            </div>
          </div>
        </el-form-item>
        <!--如果为老师显示-->
        <div>
          <el-form-item label="教师职务：" :required="true">
            <div class="flex_column">
              <el-input v-model="form.duty" placeholder="请输入教师职务" maxlength="18"></el-input>
              <p class="font_color">可以输入老师的职位如：清华大学教授，便于用户了解详细信息</p>
            </div>
          </el-form-item>
          <el-form-item label="教师昵称：" :required="true">
            <div class="flex_row">
              <el-input v-model="form.teacherName" placeholder="请输入教师姓名" maxlength="18"></el-input>
              <div class="m_left font_color flex_row">
                <p>用于购买课程时，显示老师昵称</p>
                <el-checkbox class="m_left" v-model="form.checked"></el-checkbox>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="教师头像：" :required="true">
            <div class="flex_row">
              <el-upload
                class="avatar-uploader"
                :action="url_root + img_url"
                accept="image/png, image/jpeg"
                :show-file-list="true"
                :limit="1"
                list-type="picture-card"
                :headers="headers"
                :multiple="true"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="form.imageUrlIdPhone && !iscreate"
                  :src="form.dialogImageUrl"
                  class="avatar"
                />
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <div>
                <el-dialog :visible.sync="form.dialogVisible" size="tiny">
                  <img width="100%" :src="form.dialogImageUrl" alt />
                </el-dialog>
              </div>
            </div>
            <div class="font_color">
              <p>建议：上传一张 160*160 像素</p>
            </div>
          </el-form-item>

          <el-form-item label="教师证件：" :required="true">
            <div class="flex_row">
              <el-upload
                class="avatar-uploader"
                :action="url_root + img_url"
                accept="image/png, image/jpeg"
                :show-file-list="true"
                :limit="1"
                :headers="headers"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview1"
                :on-remove="handleRemove1"
                :on-success="handleAvatarSuccess1"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="form.imageUrlIdPhone && !iscreate"
                  :src="form.imageUrlIdPhone"
                  class="avatar"
                />
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <div>
                <el-dialog :visible.sync="form.dialogVisible1" size="tiny">
                  <img width="100%" :src="form.imageUrlIdPhone" alt />
                </el-dialog>
              </div>
            </div>
            <div class="font_color">
              <p>建议：上传一张 160*160 像素</p>
            </div>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="flex_row flex_center">
        <el-button class="tenter" @click="saveiedData(0)">取 消</el-button>
        <el-button v-if="iscreate" class="tenter" type="primary" @click="saveiedData(1)">保存</el-button>
        <el-button v-else class="tenter" type="primary" @click="saveiedData(2)">保存</el-button>
      </div>
    </div>
    <div v-else>
      <!--员工管理-->
      <div class="content_box1">
        <!--刷选员工-->
        <el-form res="newForm" :model="newForm" label="新建员工" label-width="70px" :rules="rules">
          <div class="newUsers flex_row">
            <el-button size="medium" @click="btnnewUser" type="primary">新建员工</el-button>
            <div class="progress">
              <el-progress
                :text-inside="true"
                :stroke-width="20"
                :show-text="true"
                :percentage="status"
                :status="status>99?'success':status<=50?'exception':''"
              ></el-progress>
              <div class="progressitem font_color">
                <p>员工数量</p>
                <p>1/10</p>
              </div>
            </div>
          </div>

          <!--刷选-->
          <div class="flex_row">
            <el-form-item label="状态">
              <el-select class="w_size" v-model="newForm.status" placeholder="全部">
                <el-option
                  :class="'w_size'"
                  v-for="(item,index) in newForm.stateCity"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="角色">
              <el-select class="w_size" v-model="newForm.roleId" placeholder="全部">
                <el-option
                  :class="'w_size'"
                  v-for="(item,index) in newForm.roleList"
                  :key="index"
                  :label="item.name"
                  :value="item.roleId"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="员工账号">
              <el-input v-model.number="newForm.account" placeholder="请输入员工账号" maxlength="11"></el-input>
            </el-form-item>
            <div class="flex_row">
              <div class="clearselectall">
                <el-button
                  class="clearpadding"
                  icon="el-icon-search"
                  @click="selsectdata(0)"
                  type="primary"
                  plain
                >筛选</el-button>
              </div>
              <div class="clearselectall">
                <el-button
                  @click="selsectdata(1)"
                  class="clearpadding"
                  type="primary"
                  plain
                >清除筛选条件</el-button>
              </div>
            </div>
          </div>
        </el-form>
        <!--表格-->
        <div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <!--<el-table-column
                        prop="date"
                        label="小豆包账号"
                        width="180">
            </el-table-column>-->
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="小豆包账号" :show-overflow-tooltip="true">
              <template slot-scope="scope">{{ scope.row.userId }}</template>
            </el-table-column>
            <el-table-column label="员工姓名">
              <template slot-scope="scope">{{ scope.row.userName }}</template>
            </el-table-column>

            <el-table-column prop="userType" label="角色"></el-table-column>
            <el-table-column label="员工状态">
              <template slot-scope="scope">{{ scope.row.statusName }}</template>
            </el-table-column>
            <el-table-column label="操作" :show-overflow-tooltip="true" min-width="150px">
              <template slot-scope="scope">
                <div>
                  <el-button size="mini" @click="btnTable(scope.row.id,1)" type="primary">编辑</el-button>
                  <el-button size="mini" @click="btnTable(scope.row.id,3)" type="warning">重置密码</el-button>
                  <el-button size="mini" @click="btnTable(scope.row.id,2)" type="danger">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button size="mini" @click="btnTablestop()" type="primary">停用</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getUserList,
  addUser,
  delUser,
  updateUser,
  getUserDetails,
  resetUserPasswd
} from "@/api/demo";
import URL  from '@/api/config';
export default {
  name: "usermge",
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 6; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    return { 
      url_root:'',
      // img_url:'/store/file/img/upload',   //代理配置
       img_url:'/file/img/upload',
      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      my_newcourse: false, // 是否员工管理
      imageUrl: "", // 头像
      status: 100,
      form: {
        dialogImageUrl: "", // 头像
        imageUrlIdPhone: "", // 证件照
        dialogVisible: false,
        dialogVisible1: false,
        roleId: "",
        roleList: [],
        userPhone: "",
        id: "",
        lchecked: [],
        rchecked: [],
        userName: "",
        userId: "",
        teacherName: "",
        checked: true,
        orgData: [],
        orgDataList: [],
        selectorgId: [],
        // roletype:[{name:'是',id:1},{name:'否',id:0}],
        orgId: [],
        role: [],
        userPwd: ""
      },
      iscreate: true,
      newForm: {
        status: 0,
        stateCity: [
          { id: 0, name: "请选择状态" },
          { id: 1, name: "正常使用" },
          { id: 2, name: "禁" },
          { id: 3, name: "离职" }
        ],
        account: "",
        userPhoneList: "",
        roleList: [],
        roleId: 0
      },
      // 表格
      tableData: [],
      // userName,userPhone,userPwd,userId,roleId,teacherName,dialogImageUrl,imageUrlIdPhone,duty,orgId,selectorgId
      rules: {
        userName: [
          { required: true, message: "请输入员工姓名", trigger: "blur" },
          { max: 20, message: "最多50字" }
        ],
        userPhone: [
          { required: true, message: "请输入员工账号", trigger: "blur" }
        ],
        userPwd: [
          { required: true, message: "请输入员工密码", trigger: "blur" }
        ],
        userId: [
          { required: true, message: "请输入员工编号", trigger: "blur" }
        ],
        teacherName: [
          { required: true, message: "请输入老师昵称", trigger: "blur" }
        ],
        dialogImageUrl: [
          { required: true, message: "请输入老师头像", trigger: "blur" }
        ],
        imageUrlIdPhone: [
          { required: true, message: "请输入老师证件照", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getUserLists();
  },
  activated() {
    this.getUserLists();
    console.log('url',URL.root);
    this.url_root = URL.root;
  },
  methods: {
    changetitle(args) {
      this.my_newcourse = false;
      //1
      //2
      //3
    },
    // 跳转新建
    addrole() {
      this.$router.push("/role");
    },
    handleChangese(value, direction, movedKeys) {
      console.log("右边的值", value, "方向", direction, "移除的值", movedKeys);
      // this.selectorgId = value;
      // 找到 id对应的value 再找到  id 对应的角色

      console.log(this.form.orgData);
      let orgId = this.form.orgId;
      let roleIdList = this.form.orgDataList.filter(
        (item, i) =>
          // 判断某数组是否包含该元素 arr.find()
          orgId.indexOf(item.orgId) > -1
      );
      this.form.roleIdList = roleIdList;
      console.log(this.form.orgId, roleIdList);
    },
    Changerole(e) {
      console.log(e, this.form.roleIdList);
    },
    // 获取列表
    getUserLists(args) {
      let Pparams = {}
      if(args){
        Pparams =args
      }else{
        Pparams={ 
          status:0,
          roleId:0,
          account:""
        }
      }
      getUserList(Pparams).then(res => {
        console.log(res);
        if (res.errorCode == 0) {
          this.tableData = [];
          res.result.list.map(item => {
            let obj = {
              userId: item.account,
              userName: item.name,
              userType: item.roleName,
              status: item.status,
              statusName: item.statusName,
              id: item.id
            };
            this.tableData.push(obj);
            console.log("table表单数据", this.tableData);
          });
          let arrs = res.result.orgList;
          //  arrs=[
          //    {orgId:61,name:'机构1',roleId:22,roleList:[{roleId:21,name:'角色一'},{roleId:23,name:'角色三'},{roleId:22,name:'角色二'}]},
          //    {orgId:62,name:'机构2',roleId:21,roleList:[{roleId:21,name:'角色一'},{roleId:23,name:'角色三'},{roleId:22,name:'角色二'}]},
          //    {orgId:63,name:'机构3',roleId:21,roleList:[{roleId:21,name:'角色一'},{roleId:23,name:'角色三'},{roleId:22,name:'角色二'}]},
          //    {orgId:64,name:'机构4',roleId:21,roleList:[{roleId:21,name:'角色一'},{roleId:23,name:'角色三'},{roleId:22,name:'角色二'}]},
          // ]
          console.log("原始数据", arrs);

          this.form.orgDataList = JSON.parse(JSON.stringify(arrs));
          this.form.orgData = [];
          arrs.map((item, index) => {
            this.form.orgData.push({
              key: item.orgId,
              label: item.name
            });
          });
          this.form.roleList = res.result.roleList;
          this.newForm.roleList = res.result.roleList;
        }
      });
    },
    // 头像上传成功时的钩子
    handleAvatarSuccess(res, file) {
      if (res.errorCode == 0) {
        this.form.dialogImageUrl = res.result;
      }
      console.log("头像上传成功", res, file);
    },
    // 证件照上传成功时的钩子
    handleAvatarSuccess1(res, file) {
      console.log("证件照上传成功", res, file);
      if (res.errorCode == 0) {
        this.form.imageUrlIdPhone = res.result;
      }
      // this.imageUrlIdPhone = URL.createObjectURL(file.raw);
    },
    // 保存 / 取消
    saveiedData(args) {
      if (args == 0) {
        return (this.my_newcourse = false);
      }
      // 赋值为空
      
      console.log("添加员工参数", this.form);
      let {
        userName,
        userPhone,
        userPwd,
        userId,
        teacherName,
        dialogImageUrl,
        imageUrlIdPhone,
        id,
        duty,
        roleIdList,
        selectorgId
      } = this.form;
      if (userName == "" || userName == undefined) {
        return this.$message({ type: "warning", message: "请输入员工姓名" });
      }

      if (roleIdList.length == "" || roleIdList.length == undefined) {
        return this.$message({ type: "warning", message: "请输入角色" });
      }
      if (teacherName == "" || teacherName == undefined) {
        return this.$message({ type: "warning", message: "请输入老师昵称" });
      }
      if (dialogImageUrl == "" || dialogImageUrl == undefined) {
        return this.$message({ type: "warning", message: "请输入员工头像" });
      }
      if (imageUrlIdPhone == "" || imageUrlIdPhone == undefined) {
        return this.$message({
          type: "warning",
          message: "请输入员工证件照"
        });
      }
      if (duty == "" || duty == undefined) {
        return this.$message({ type: "warning", message: "请输入员工职务" });
      }
      let arrrole = [];
      roleIdList.map(i => {
        let obj = {
          orgId: i.orgId,
          roleId: i.roleId
        };
        arrrole.push(obj);
      });
      // 保存数据
      if (args == 1) {
        if (userPhone == "" || userPhone == undefined) {
          return this.$message({ type: "warning", message: "请输入员工账号" });
        }
        if (userPwd == "" || userPwd == undefined) {
          return this.$message({ type: "warning", message: "请输入员工密码" });
        }
        let params = {
          name: userName,
          phone: userPhone,
          passwd: userPwd,
          employeeID: userId,
          userRole: arrrole,
          nickName: teacherName,
          logo: dialogImageUrl,
          duties: duty,
          authInfo: imageUrlIdPhone
        };
        addUser(params).then(res => {
          console.log("保存", res);
          if (res.errorCode == 0) {
            this.forminit()
            this.$message({ type: "success", message: "添加成功" });
            this.my_newcourse = false;
            this.getUserLists();
          } else {
            this.$message({ type: "warning", message: "检查参数" });
          }
        });
      } else if (args == 2) {
        let params = {
          name: userName,
          phone: userPhone,
          passwd: userPwd,
          employeeID: userId,
          userRole: arrrole,
          teacherName,
          logo: dialogImageUrl,
          duties: duty,
          id,
          authInfo: imageUrlIdPhone
        };
        updateUser(params).then(res => {
          console.log("编辑", res);
          if (res.errorCode == 0) {
            this.my_newcourse = false;
            this.getUserLists();
            this.forminit()
            this.$message({ type: "success", message: "编辑成功" });
          }
        });
      }
     
    },
    forminit(){
       this.form.userName='';
      this.form.userPhone='';
      this.form.userPwd= '';
      this.form.dialogImageUrl='';
      this.form.imageUrlIdPhone='';
    },
    // 上传文件之前的钩子
    beforeAvatarUpload(file) {
      console.log("图片正在上传", file);
      const isJPG = file.type === "image/jpeg" || file.type === "image/png"; // 图片类型
      const isLt2M = file.size / 1024 / 1024 < 2; // 图片大小

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 移除图片
    handleRemove(file, fileList) {
      console.log("移除图片", file, fileList);
      // console.log(file, fileList);
      this.form.dialogImageUrl = "";
    },
    //
    handleRemove1(file, fileList) {
      console.log("移除图片", file, fileList);
      // console.log(file, fileList);
      this.form.imageUrlIdPhone = "";
    },
    // 点击已上传的文件链接时的钩子
    handlePictureCardPreview(file) {
      console.log("点击已上传", file);
      this.form.dialogImageUrl = file.url;
      this.form.dialogVisible = true;
    },
    // 点击已上传的文件链接时的钩子
    handlePictureCardPreview1(file) {
      console.log("点击已上传", file);
      this.form.imageUrlIdPhone = file.url;
      this.form.dialogVisible1 = true;
    },
    //  筛选全部信息
    selsectdata(args) {
      if (args == 0) {
        // 参数
        let { status, roleId, account } = this.newForm;
        let params = {
          status,
          roleId,
          account
        };
        console.log("筛选", params);
        this.getUserLists(params);
      } else {
        // 清楚
        this.newForm.status=0;
        this.newForm.roleId=0;
          this.newForm.account="";
      }
    },
    // 停用
    btnTablestop() {},
    // 编辑/删除
    btnTable(id, status) {
      console.log(id, status);
      if (status == 2) {
        // 删除
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delUser({ id }).then(res => {
          if (res.errorCode == 0) this.getUserLists();
          return this.$message({ type: "success", message: "删除成功" });
        });
        })
      } else if (status == 1) {
        getUserDetails({ id }).then(res => {
          console.log("编辑信息", res);
          if (res.errorCode == 0) {
            // 编辑
            this.iscreate = false;
            this.my_newcourse = true;
            let obj = res.result;

            let {
              name,
              phone,
              employeeID,
              orgList,
              nickName,
              logo,
              authInfo,
              id,
              duties
            } = JSON.parse(JSON.stringify(obj));
            let arrorgId = [];
            orgList.map(i => {
              if (i.orgId) {
                arrorgId.push(i.orgId);
              }
            });
            this.form.orgId = arrorgId;
            this.form.userName = name;
            this.form.userPhone = phone;
            this.form.userId = employeeID;
            this.form.roleIdList = JSON.parse(JSON.stringify(orgList));
            this.form.teacherName = nickName;
            this.form.dialogImageUrl = logo;
            this.form.imageUrlIdPhone = authInfo;
            this.form.id = id;
            this.form.duty = duties;
          }
          let obj = new Object();
          obj = JSON.parse(JSON.stringify(this.form));
          this.form = {};
          this.form = obj;
        });
      } else if (status == 3) {
        // 重置密码
        this.$confirm("此操作将永久重置密码为 123456 ！", "提示", {
          confirmButtonText: "重置密码",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            resetUserPasswd({id}).then(res=>{
                if(res.errorCode == 0){
                     this.$message({
                      type: "success",
                      message: "重置成功"
                    });
                }else{
                  this.$message({
                      type: "warning",
                      message: "重置失败"
                    });
                }
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    },
    // 新建
    btnnewUser() {
      this.iscreate = true;
      this.my_newcourse = true;
    },
    handleSelectionChange() {}
  }
};
</script>
