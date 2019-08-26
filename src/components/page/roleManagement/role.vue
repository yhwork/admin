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
        background-color: #ccc !important
    }

    .el-table--enable-row-hover .el-table__body tr:hover>td {

        background-color: #CBD1D8 !important;
    }

    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #A0C6F0 !important;
    }

    .table_borders {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #CAE1FF !important;
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
                  :data="newForm.roledata"
                  show-checkbox
                  node-key="id"
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
          <el-button class="tenter" type="primary" @click="saveiedData()">保存</el-button>
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
export default {
  name: "role",
  data() {
    return {
      my_newcourse: false,
      newForm: {
        roleTxt: "描述",
        roleName: "老师",
        unfold: [], // 默认展开  id
        checked: [], // 默认选中  id
        roledata: [
          {
            id: 1,
            label: "店铺",
            children: [
              {
                id: 4,
                label: "店铺概括",
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
        { userNum: 6, usertxt: "描述", userType: "小灰灰管理", id: 0 }
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
  methods: {
    // 编辑/删除
    btnTable(id, strtus) {},
    // 新建员工
    btnnewUser() {
      this.my_newcourse = true;
    },
    // 保存
    saveiedData() {
      this.my_newcourse = false;
    }
  }
};
</script>