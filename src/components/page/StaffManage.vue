<template>
  <div class="staff">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/'}">员工管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first">角色管理</el-tab-pane>
        <el-tab-pane label="员工管理" name="second">
          <div class="search_box">
            <el-button type="primary" class="handle-del" @click>新建员工</el-button>
            <div class="input_item">
              <el-input v-model="select_word" placeholder="筛选关键词" class="mr10">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="subordinate" label="所属校区" width="300"></el-table-column>
            <el-table-column prop="isTeacher" label="是否是教师"></el-table-column>
            <el-table-column prop="account" label="机构账号"></el-table-column>
            <el-table-column label="操作" width="280" align="center">
              <template slot-scope="scope">
                <el-button type="text" icon="el-icon-plus" @click="">添加</el-button>
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      activeName: "second",
      select_word: "",
      is_search: false,
      tableData: [
        {
          name: "校区名称",
          sub_name: "简称",
          subordinate: "上海市第一教育公司",
          phone: "123456789",
          isTeacher: "是",
          account: "78965322332"
        },
        {
          name: "校区名称",
          sub_name: "简称",
          subordinate: "上海市第二教育公司",
          phone: "123456789",
          isTeacher: "否",
          account: "78965322332"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    search() {
      this.is_search = true;
    },
    handleSelectionChange(val) {
     
    }
  }
};
</script >

<style scoped>
.staff {
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

.search_box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.input_item {
  display: flex;
  align-items: center;
}
.mr10 {
  margin-right: 10px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
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
</style>


