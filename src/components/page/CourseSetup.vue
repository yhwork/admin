<template>
  <div class="course">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/'}">校区</el-breadcrumb-item>
      <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      <el-breadcrumb-item>新建校区</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="item_list">
            <div class="list_title">课程基础信息</div>
            <div class="item_info">
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">课程类别</span>
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
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">科目</span>
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
                <el-button type="primary" style="margin-left:20px;">新建科目</el-button>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">年级</span>
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
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">年龄</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">课程名称</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">授课模式</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">班课</el-radio>
                  <el-radio v-model="radio" label="2">一对一</el-radio>
                </template>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">收费模式</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">按课时</el-radio>
                  <el-radio v-model="radio" label="2">按时间</el-radio>
                  <el-radio v-model="radio" label="3">按期</el-radio>
                </template>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">开课校区</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">全部校区</el-radio>
                  <el-radio v-model="radio" label="2">指定校区</el-radio>
                </template>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="item_list">
            <div class="list_title">定价标准</div>
            <div class="table_box">
              <el-row class="table_item" type="flex" align="middle">
                <el-col :span="5">
                  <div class="table_title">校区</div>
                </el-col>
                <el-col :span="19">
                  <div class="table_content">定价标准</div>
                </el-col>
              </el-row>
              <el-row class="table_item" type="flex" align="middle">
                <el-col :span="5">
                  <div class="table_title">校区</div>
                </el-col>
                <el-col :span="19">
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元</span>
                  </div>
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元</span>
                  </div>
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元/期</span>
                  </div>
                </el-col>
              </el-row>
              <el-row class="table_item">
                <el-col :span="5">
                  <div class="table_title">
                    <span>指定校区</span>
                    <div>
                      <el-checkbox>上海迪斯尼徐汇校区</el-checkbox>
                    </div>
                    <div>
                      <el-checkbox>上海迪斯尼徐汇校区</el-checkbox>
                    </div>
                  </div>
                </el-col>
                <el-col :span="19">
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元</span>
                  </div>
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元</span>
                  </div>
                  <div class="table_content">
                    <span>按课时：</span>
                    <el-input type="text"></el-input>
                    <span>课时</span>
                    <span>=</span>
                    <el-input type="text"></el-input>
                    <span>元/期</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="btn_box1">
            <el-button>取消</el-button>
            <el-button type="primary">保存</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "course_setup",
  data() {
    return {
      checked: true,
      radio: 1
    };
  }
};
</script>

<style scoped>
.course {
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

.item_list {
  border: 1px solid #dded;
  border-radius: 8px;
  min-height: 400px;
}
.list_title {
  padding: 10px;
  border-bottom: 1px solid #dded;
}
.item_info {
  padding: 10px;
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
.input_symbol2 {
  color: #fff;
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

.table_item {
  border-bottom: 1px solid #ddd;
}

.table_content {
  border-left: 1px solid #ddd;
  padding: 10px;
  display: flex;
  align-items: center;
}
.table_content span {
  margin-right: 10px;
}
.table_content .el-input {
  width: 180px;
  margin-right: 10px;
}
.table_content .el-select {
  margin-right: 10px;
}
.table_title {
  padding: 10px;
}
.table_title div {
  margin-top: 8px;
}
.item_title {
  display: inline-block;
  width: 90px;
}
.btn_box1 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn_box1 .el-button {
  width: 100px;
  margin-left: 50px;
}
</style>



