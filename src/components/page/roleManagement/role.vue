<style lang="scss">
.role {
  .pointer {
    cursor: pointer;
  }
  .flex_row {
    display: flex;
    flex-flow: row nowrap;
  }
  .el-input {
    width: auto;
  }
  .el-transfer {
    width: auto;
  }
  .el-textarea__inner {
    width: 260px;
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
  .new_role {
    margin: 10px 0 25px 0;
    padding: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
  .m_top {
    margin-top: 25px;
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
}
</style>
<template>
  <div class="content_box1 role">
    <div class="m_bottom">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="pointer">教务管理</el-breadcrumb-item>
        <el-breadcrumb-item class="pointer">
          <div v-if="my_newcourse" class="pointer">新建角色</div>
          <div v-else class="pointer">角色管理</div>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--新建员工-->
    <div class="new_role" v-if="my_newcourse">
      <el-form res="newForm" :model="newForm" label-width="100px" :rules="rules">
        <div class="flex_column m_top">
          <el-form-item label="角色名称：" prop="roleName">
            <div class="flex_row">
              <el-input
                v-model="newForm.roleName"
                placeholder="请输入需要角色的名称"
                maxlength="8"
                auto-complete="off"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item label="角色描述：" prop="roleTxt">
            <div class="flex_row">
              <el-input
                type="textarea"
                :autosize="{ minRows:6, maxRows: 8}"
                v-model="newForm.roleTxt"
                placeholder="至多输入50个汉字"
                maxlength="50"
                auto-complete="off"
              ></el-input>
            </div>
          </el-form-item>
          <el-form-item label="角色权限：" prop="roleTxt">
            <div class="flex_row">
              <el-tree
                 ref="tree"
                :data="newForm.roledata"
                show-checkbox
                node-key="id"
                 accordion
                @node-click='changeData'
                :current-node-key='newForm.currentData'
                @check-change='setCheckeData'
                @getCheckedKeys='getCheckeData'
                :default-expanded-keys="newForm.unfold"
                :default-checked-keys="newForm.checked"
                :props="newForm.defaultProps"
                
              ></el-tree>
            </div>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="flex_row flex_center">
        <el-button class="tenter" @click="saveiedData(0)">取 消</el-button>
        <el-button class="tenter" v-if="iscreate" type="primary" @click="saveiedData(1)">保存</el-button>
        <el-button class="tenter" v-else type="primary" @click="saveiedData(2)">保存</el-button>
      </div>
    </div>
    <!--表格-->
    <div v-else class="content_box1">
      <div class="flex_row tenter">
        <el-button size="medium" @click="btnnewUser" type="primary">新建角色</el-button>
      </div>
      <div class="new_role">
        <el-table ref="multipleTable" :data="tableData" style="width: 100%">
          <el-table-column label="员工角色" :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.userType }}</template>
          </el-table-column>
          <el-table-column label="描述">
            <template slot-scope="scope">{{ scope.row.usertxt }}</template>
          </el-table-column>

          <el-table-column prop="userNum" label="员工数量"></el-table-column>
          <el-table-column label="操作" :show-overflow-tooltip="true" min-width="150px">
            <template slot-scope="scope">
              <div>
                <el-button size="mini" @click="btnTable(scope.row.id,1)" type="primary">编辑</el-button>
                <el-button size="mini" @click="btnTable(scope.row.id,2)" type="danger">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getRoleList,
  addRole,
  delRole,
  getRoleDetails,
  updateRole
} from "@/api/demo";
export default {
  name: "role",
  data() {
    return {
      iscreate: true,
      my_newcourse: false,
      newForm: {
        currentData:0,
        roleTxt: "",
        roleName: "",
        unfold: [], // 默认展开  id
        checked: [], // 默认选中  id
        roledata: [
          {
            id: 1,
            label: "店铺",
            children: [
              {
                id: 4,
                label: "店铺概括"
              },
              {
                id: 9,
                label: "店铺装修"
              },
              {
                id: 10,
                label: "小程序装修"
              },
              {
                id: 11,
                label: "微页面"
              }
            ]
          },
          {
            id: 2,
            label: "一级 2",
            children: [
              {
                id: 5,
                label: "二级 2-1"
              },
              {
                id: 6,
                label: "二级 2-2"
              }
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        }
      },
      tableData: [
        { userNum: 6, usertxt: "", userType: "", id: 0 }
      ],
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { max: 20, message: "最多50字" }
        ],
        roleTxt: [
          { required: true, message: "请输入描述内容", trigger: "blur" }
        ],
        userPwd: [
          { required: true, message: "请输入员工密码", trigger: "blur" }
        ],
        userId: [{ required: true, message: "请输入员工编号", trigger: "blur" }]
      }
    };
  },
  created() {
    this.selectRoleLIst();
  },
  methods: {
    selectRoleLIst() {
      console.log("查询");
      getRoleList().then(res => {
        if (res.errorCode == 0) {
          let data = res.result.roleList;

          let tableData = [];
          data.map(item => {
            let obj = {
              userNum: item.userNum,
              usertxt: item.descr,
              userType: item.name,
              id: item.id
            };
            tableData.push(obj);
          });
          this.tableData = tableData;
          this.newForm.roledata = res.result.menuTree;
          // descr: null
          // id: 82
          // iedit: "false"
          // name: "管理员"
          // userNum: 2

          console.log("角色列表", res);
          // 赋值
        }
      });
    },
    // 编辑/删除
    btnTable(id, status) {
      if (status == 1) {
        // 编辑
        getRoleDetails({ id }).then(res => {
          console.log("角色详情列表", res);
          this.iscreate = false;
          this.my_newcourse = true;
          // 赋值
          let data = res.result;
          this.newForm.roleTxt=data.descr ;
          this.newForm.roleName =data.name;
          this.newForm.roledata = data.menuTree;  // 所有的列表
          this.newForm.checked=data.ownMenu       // 默认选中
          this.newForm.id = data.id;
          // descr: null
          // id: 82
          // iedit: "false"
          // name: "管理员"
          // userNum: 2
        });
      } else if (status == 2) {
        // 删除
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            delRole({ id }).then(res => {
            console.log("删除成功", res);
            this.$message({type:'success',message:'删除成功'})
            this.selectRoleLIst();
          });
        })
        
      }
    },
    // 新建员工
    btnnewUser() {
      this.my_newcourse = true;
      this.iscreate = true;
    },
    changeData(data,e){
      console.log(data,e)
    },
    getCheckeData(e){
        console.log('选中',e,this.newForm.currentData)
    },
    setCheckeData(e,data){
        console.log('选中',e,data);
        // 添加或者删除
        if(data){
          // 添加
        }else{
        }
    },
    // 获取节点
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      // 获取key
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
        return this.$refs.tree.getCheckedKeys();
      },
      // 设置选中
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      },
    // 保存
    saveiedData(args) {
      if (args == 0) {
        
        return this.my_newcourse = false;
      } else if (args == 1) {
        let {roleName,roleTxt} = this.newForm;
        let menu = this.getCheckedKeys();
         this.selectRoleLIst();
        // 获取保存的数据
        let params = {descr:roleTxt,name:roleName,menu};
        // 发送请求
        addRole(params).then(res => {
          if (res.errorCode == 0) {
            this.$message({ type: "success", message: "保存成功" });
            this.my_newcourse = false;
             this.selectRoleLIst();
            // 清楚 选项
            this.newForm.roleTxt= "";
            this.newForm.roleName = "";
          }
        });
        // 返回列表页
      } else if (args == 2) {
        // 编辑
        let {roleName,roleTxt,id} = this.newForm;
        let menu = this.getCheckedKeys();
        // 获取保存的数据
        let params = {descr:roleTxt,name:roleName,menu,id};
        updateRole(params).then(res => {
         
          if (res.errorCode == 0) {
            this.$message({ type: "success", message: "保存成功" });
             this.selectRoleLIst();
            this.my_newcourse = false;
          }
        });
      }
    }
  }
};
</script>