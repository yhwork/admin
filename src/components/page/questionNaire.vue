<template>
    <div class="content_box1">
          <div class="handle-box">
        <el-button type="primary" class="handle-del" @click="campusSetup">新建问卷</el-button>
      </div>
      <el-table :data="campusList" class="table">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="sub-table-expand">
              <el-form-item label="教师部"></el-form-item>
              <el-form-item label="行政部"></el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="问卷名称名称" width="300"></el-table-column>
        <el-table-column prop="alias" label="状态"></el-table-column>
        <el-table-column prop="address" label="创建人" width="300"></el-table-column>
        <el-table-column prop="tel" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="340" align="center">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-plus" @click="campusSetup">预览/统计</el-button>
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
    </div>
</template>

<script>
export default {
    name:'questionnaire'
}
</script>

