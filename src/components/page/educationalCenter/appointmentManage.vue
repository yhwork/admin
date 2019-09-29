<template>
  <div class="content_box1">
    <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="form_box">
      <el-form-item label="课程名称：">
        <el-select v-model="ruleForm.hotCourseId" placeholder="请选择" style="width:400px">
          <el-option v-for="(item,index) in ruleForm.courseList" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约门店：">
        <el-select v-model="ruleForm.orgId" placeholder="请选择" style="width:400px">
          <el-option v-for="(item,index) in ruleForm.orgList" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约教师：">
        <el-select v-model="ruleForm.teacherId" placeholder="请选择" style="width:300px">
          <el-option v-for="(item,index) in ruleForm.teacherList" :key="index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间：" >
         <el-date-picker
            v-model="ruleForm.startTime"
            type="date"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd"
            @change="changeStartTime"
          ></el-date-picker>
          <span>至</span>
          <el-date-picker
            v-model="ruleForm.endTime"
            type="date"
            placeholder="选择结束时间"
            value-format="yyyy-MM-dd"
            @change="changeEndTime"
          ></el-date-picker>
      </el-form-item>

      <!--<el-form-item label="手机号码：">
        <el-input placeholder="请输入手机号" type="number" maxlength="11" v-model.number="ruleForm.phone" ></el-input>
      </el-form-item>   -->
       <div class="elrow">
                            <div class='clearselectall'>
                                <el-button class="clearpadding" icon="el-icon-search" @click='selsectdata(0)' type="primary" plain>筛选</el-button>
                            </div>
                            <div class='clearselectall'>
                                <el-button @click="selsectdata(1)" class="clearpadding" type="primary" plain>清除筛选条件
                                </el-button>
                            </div>
                        </div>
    </el-form>
                           
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
     >
      <el-menu-item index="0">已预约</el-menu-item>
      <el-menu-item index="1">已打卡</el-menu-item>
      <el-menu-item index="2">已取消</el-menu-item>
    </el-menu>

    <el-table :data="tableList" header-row-class-name="headerclassname"  style="width: 100%" 
      :row-class-name="changetable"
     >
      <el-table-column label="学员（手机号码）">
        <template slot-scope="scope">
          <div class="user_info">
              <div>{{ scope.row.childName }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="courseName" label="预约课程">
      </el-table-column>
      <el-table-column prop="teacherName" label="预约教师"></el-table-column>
      <el-table-column prop="time" label="预约时间" width='180'>
        <template slot-scope="scope">
          <div> <p> {{ scope.row.apptsStartTime}} </p>
         <p> {{scope.row.apptsEndTime}}</p></div>
        </template>
      </el-table-column>
      <el-table-column prop="roomName" label="教室"></el-table-column>
      <el-table-column prop="apptsCode" label="验证码"></el-table-column>
      <el-table-column prop="surplusNumber" label="剩余次数"></el-table-column>

      <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="listDetail( scope.row)"
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
          <span>{{ dataDetail.courseName }}</span>
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
          <span class="item_title">预约时间：</span>
          <span>{{ dataDetail.apptsStartTime }}</span>
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
          <span>{{ dataDetail.ifinish }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">验证码：</span>
          <span  >{{dataDetail.apptsCode}}</span>
        </div>
        <div class="info_item">
          <span class="item_title">剩余次数：</span>
          <span>{{ dataDetail.surplusNum }}</span>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">返 回</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
    import {getHotCourseAppointmentList,getHotCourseAppointmentInfo} from '@/api/demo'
export default {
  name: "appointment",
  data() {
    return {
      activeIndex: "1",
      tableList:[],
      dataDetail:[],
      endTimeArray: [],
      dialogVisible: false,
      ifinish:0,
      ruleForm: {
        orgId:0,
        hotCourseId:0,
        teacherId:0,
        startTime:'',
        endTime:'',
        phone:'',
        courseList:[{name:'111',id:0},{name:'5222',id:2}],
        orgList:[],
        teacherList:[]
      },
      rules: {},
    };
  },
  created(){
    this.getList()
  },
  methods: {
      selsectdata(args){
        if(args == 0){
          let {orgId,hotCourseId,teacherId,startTime,endTime} = this.ruleForm;
          let params = {orgId,hotCourseId,teacherId,startTime,endTime,ifinish:this.ifinish};
          this.getList(params)
        }else{
          // 清楚刷选
        }
      },
      // 改变表格
      changetable(e) {
          if (e.rowIndex % 2 == 0) {
              return "table_borders"

          } else {
              return "table_border"
          }
      },
     getList(args) {
       var params={};
       if(args){
          params = args
          console.log('刷选',params)
       }else{
          params = {orgId:0,hotCourseId:0,teacherId:0,startTime:'',endTime:'',teacherId:0,ifinish:0}
       }

       getHotCourseAppointmentList(params).then(res => {
              console.log(res);
              if(res.errorCode == 0){
                let data = res.result;
                  this.ruleForm.courseList = data.courseList;
                  console.log(data.courseList)
                  this.ruleForm.teacherList = data.teacherList;
                  this.ruleForm.orgList = data.orgList;
                  // 初始化
                  this.ruleForm.courseList.unshift({name:'请选择',id:0});
                  this.ruleForm.teacherList.unshift({name:'请选择',id:0});
                  this.ruleForm.orgList.unshift({name:'请选择',id:0})
                  // 列表

                  // apptsEndTime: "2019-08-31 15:33:22"
                  // apptsStartTime: "2019-08-31 15:33:20"
                  // childId: 100064
                  // childName: "小豆包"
                  // courseName: "体验课"
                  // id: 8
                  // roomName: "222"
                  // surplusNumber: 20
                  // teacherName: "覃老师1"
                  this.tableList= data.list;
              }
              this.dataList = res.result;
            })
            .catch(error => {
              console.log("error", error);
            });
    },
    listDetail(row) {
      this.dialogVisible = true;
      console.log(row.id)
      getHotCourseAppointmentInfo({id:row.id}).then(res=>{
        if(res.errorCode ==  0){
          console.log(res);
          this.dataDetail = res.result;
        }
      })
    },
    changeStartTime(e){
      this.ruleForm.startTime=e
      // if(this.endTime!==''){
        // this.getList()
      // }else{
      //   this.$message("请选择结束日期")
      // }
    },
    changeEndTime(e){
      this.ruleForm.endTime=e
      //  if(this.startTime!==''){
        // this.getList()
      // }else{
      //   this.$message("请选择开始日期")
      // }
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    
    handleSelect(key, keyPath) {
        let {orgId,hotCourseId,teacherId,startTime,endTime} = this.ruleForm;
        this.ifinish= parseInt(key);
        let params = {orgId,hotCourseId,teacherId,startTime,endTime,ifinish:this.ifinish};
      this.getList(params);
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
    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #A0C6F0 !important;
    }

    .table_borders {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #CAE1FF !important;
    }
.user_info {
  display: flex;
  align-items: center;
}
    .clearselectall {
        font-size: 0.6rem;
        color: #409EFF;
        height: 40px;
        line-height: 35px;
        margin-left: 15px;
    }
    .elrow {
        display: flex;
        flex-flow: nowrap row;
    }
    
    .clearpadding {
        margin-top: 2px;
        padding: 8px 12px !important;
        margin-left: 15px;
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

