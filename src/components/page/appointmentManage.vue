<template>
  <div class="content_box1">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form_box">
      <el-form-item label="课程名称：" prop="">
        <el-select v-model="endTime" placeholder="请选择" style="width:400px">
          <el-option v-for="item in endTimeArray" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约门店：" prop="">
        <el-select v-model="endTime" placeholder="请选择" style="width:400px">
          <el-option v-for="item in endTimeArray" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约教师：" prop="">
        <el-select v-model="endTime" placeholder="请选择" style="width:300px">
          <el-option v-for="item in endTimeArray" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间：" prop="">
         <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd"
            @change="changeStartTime"
          ></el-date-picker>
          <span>至</span>
          <el-date-picker
            v-model="endTime"
            type="date"
            placeholder="选择结束时间"
            value-format="yyyy-MM-dd"
            @change="changeEndTime"
          ></el-date-picker>
      </el-form-item>

      <el-form-item label="手机号码：" prop="title">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">已预约（1）</el-menu-item>
      <el-menu-item index="2">已打卡（1）</el-menu-item>
      <el-menu-item index="3">已取消（1）</el-menu-item>
    </el-menu>

    <el-table
      ref="multipleTable"
      :data="dataList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column label="学员（手机号码）">
        <template slot-scope="props">
          <div class="user_info">
            <!-- <img :src="props.row.img" alt> -->
            <div>
              <div>{{ props.row.childName }}</div>
              <!-- <div>{{ props.row.phone }}</div> -->
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="courseName" label="预约课程"></el-table-column>

      <el-table-column prop="teacherName" label="预约教师"></el-table-column>
      <el-table-column prop="time" label="预约时间">
        <template slot-scope="props">
          <!-- <div>{{ props.row.date}}</div> -->
          <div>{{ props.row.apptsStartTime}}~{{props.row.apptsEndTime}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="roomName" label="教室"></el-table-column>
      <el-table-column prop="verifyCode" label="验证码"></el-table-column>
      <el-table-column prop="surplusNumber" label="剩余次数"></el-table-column>
      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="listDetail(scope.$index, scope.row)"
          >查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="预约用户" :visible.sync="dialogVisible" width="30%" :before-close="closeDialog">
      <el-form ref="dataDetail"  label-width="80px">
        <div class="info_item">
          <div class="user_info">
            <!-- <img :src="form.img" alt> -->
            <div>
              <div>{{ dataDetail.childName }}</div>
              <!-- <div style="margin-top:8px;">{{ form.phone }}</div> -->
            </div>
          </div>
        </div>
        <div class="info_item">
          <span class="item_title">预约课程：</span>
          <span>{{ dataDetail.name }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约门店：</span>
          <span>{{ dataDetail.orgName }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约日期：</span>
          <span>{{ dataDetail.apptsStartTime }} ~ {{ dataDetail.apptsEndTime }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约课程：</span>
          <span>{{ dataDetail.name }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约时间：</span>
          <span>{{ dataDetail.name }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约教师：</span>
          <span>{{ dataDetail.teacherName }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约教室：</span>
          <span>{{ dataDetail.roomName }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">当前状态：</span>
          <span>{{ dataDetail.name }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">验证码：</span>
          <input v-model="dataDetail.name">
        </div>
        <div class="info_item">
          <span class="item_title">剩余次数：</span>
          <span>{{ dataDetail.name }}</span>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">返 回</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "appointment",
  data() {
    return {
      activeIndex: "1",
      dataList:[],
      dataDetail:[],
      value6: "",
      endTime: "",
      endTimeArray: [],
      dialogVisible: false,
      ruleForm: {},
      rules: {},
      orgId:'',
      hotCourseId:'',
      startTime:'',
      endTime:'',
    };
  },
  created(){
    this.getList()
  },
  methods: {
     getList() {
      this.$axios({
        method: "get",
        url: "/store/appointment/getHotCourseAppointmentList?orgId=" + this.orgId+'&hotCourseId='+this.hotCourseId+"&startTime="+this.startTime+'&endTime='+this.endTime,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log(res)
          this.dataList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    listDetail(index, row) {
      this.dialogVisible = true;
      this.getListDetail(row.id)
    },
     getListDetail(id){
      this.$axios({
        method: "get",
        url: "/store/appointment/getHotCourseAppointmentInfo/" + id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.dataDetail = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    changeStartTime(e){
      this.startTime=e
      // if(this.endTime!==''){
        this.getList()
      // }else{
      //   this.$message("请选择结束日期")
      // }
    },
    changeEndTime(e){
      this.endTime=e
      //  if(this.startTime!==''){
        this.getList()
      // }else{
      //   this.$message("请选择开始日期")
      // }
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelectionChange() {}
  }
};
</script>   

<style scoped>
.form_box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.user_info {
  display: flex;
  align-items: center;
}
.user_info img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.info_item {
  border-bottom: 1px dashed #ccc;
  padding: 10px 0;
}
.item_title{
  min-width:70px;
  display: inline-block;
  text-align: right;
}
</style>

