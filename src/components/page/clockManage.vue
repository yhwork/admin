    <template>
  <div class="content_box1">
     <div style="display:flex;margin-bottom:20px;margin-left:18px;">
          <el-input placeholder="输入6位数字验证码" maxlength="6" style="width:200px;margin-right:10px;"></el-input>
          <el-button type="primary">确认</el-button>
        </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form_box">
      <el-form-item label="订单搜索：" prop="title">
        <div style="display:flex">
          <el-select v-model="order_search" placeholder="请选择" style="width:150px;margin-right:10px">
            <el-option v-for="item in orderSearch" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <el-input></el-input>
        </div>
      </el-form-item>
      <el-form-item label="课程名称：" prop="title">
        <el-input style="width:390px"></el-input>
      </el-form-item>
      <el-form-item label="下单时间：" prop="title">
        <div>
          <el-date-picker
            v-model="saleStartTime"
            type="date"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd"
            @change="changeSaleStartTime"
            :disabled="time_state"
          ></el-date-picker>
          <span>至</span>
          <el-date-picker
            v-model="saleEndTime"
            type="date"
            placeholder="选择结束时间"
            :disabled="time_state"
            value-format="yyyy-MM-dd"
            @change="changeSaleEndTime"
          ></el-date-picker>
          <el-tag type="info">今</el-tag>
          <el-tag type="info">昨</el-tag>
          <el-tag type="info">近7天</el-tag>
          <el-tag type="info">近30天</el-tag>
        </div>
      </el-form-item>
      <el-form-item label="购买方式：" prop="buy_way">
        <el-select v-model="buy_way" placeholder="请选择" style="width:300px">
          <el-option v-for="item in buyWay" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态：" prop="order_state">
        <el-select v-model="order_state" placeholder="请选择" style="width:300px">
          <el-option v-for="item in orderState" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单涞源：" prop="order_source">
        <el-select v-model="order_source" placeholder="请选择" style="width:200px">
          <el-option v-for="item in orderSource" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="购买类型：" prop="buy_type">
        <el-select v-model="buy_type" placeholder="请选择" style="width:300px">
          <el-option v-for="item in buyType" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">待付款</el-menu-item>
      <el-menu-item index="3">待预约</el-menu-item>
      <el-menu-item index="4">待打卡</el-menu-item>
      <el-menu-item index="5">拼团</el-menu-item>
    </el-menu>

    <el-table
      ref="multipleTable"
      :data="dataList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" :disable="isdisable"></el-table-column>
      <el-table-column label="买家（手机号码）">
        <template slot-scope="props">
          <div class="user_info">
            <!-- <img :src=" props.row.img" alt> -->
            <div>
              <div>{{ props.row.childName }}</div>
              <!-- <div>{{ props.row.phone }}</div> -->
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="courseName" label="预约课程"></el-table-column>

      <el-table-column prop="time" label="预约时间">
        <template slot-scope="props">
          <!-- <div>{{ props.row.date}}</div> -->
          <div>{{ props.row.apptsStartTime}}~{{props.row.apptsEndTime}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="teacherName" label="预约教师"></el-table-column>
      <el-table-column prop="roomName" label="教室"></el-table-column>
      <el-table-column prop="apptsCode" label="验证码"></el-table-column>
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

    <div class="bottom_box">
     <el-button @click="toggleSelection(dataList)">全选</el-button>
      <el-button >归档</el-button><div class="el-icon-question" @click="showInfo"></div>
    </div>
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
          <span class="item_title">课程名称：</span>
          <span>{{ dataDetail.title }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约课程：</span>
          <!-- <span>{{ dataDetail.orderNumber }}</span> -->
        </div>
        <div class="info_item">
          <span class="item_title">预约门店：</span>
          <span>{{ dataDetail.orgName }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">预约日期：</span>
          <!-- <span>{{ dataDetail.apptsStartTime}}~{{ dataDetail.apptsEndTime}}}</span> -->
        </div>
        <div class="info_item">
          <span class="item_title">预约时间：</span>
            <span>{{ dataDetail.apptsStartTime}}~{{ dataDetail.apptsEndTime}}</span>
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
          <!-- <span>{{ dataDetail.orderStatus==2?'支付成功':'代付款' }}</span> -->
        </div>
         <div class="info_item">
          <span class="item_title">验证码：</span>
          <span>{{ dataDetail.apptsCode }}</span>
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
export default {
  name: "course_table",
  data() {
    return {
      activeIndex: "1",
      dataList: [],
      endTime: "",
      endTimeArray: [],
      order_state: "",
      order_source: "",
      order_search: "",
      buy_type: "",
      buy_way: "",
      orderTime: "",
      dialogVisible: false,
      orderState: ["已付款", "待付款", "待分享", "待预约"],
      orderSource: ["小程序", "公众账号"],
      buyType: [" 线上课程", "线下课程"],
      buyWay: ["正常", "团购"],
      orderSearch: ["订单号", "手机号"],
      dataList: [
        // {
        //   class: "搜索就事论事极乐世界说了句睡懒觉三十六计睡懒觉",
        //   orderNum: "101232323",
        //   orderState: "待支付",
        //   orderMoney: "200",
        //   date: "2019-04-07",
        //   startTime: "14:00",
        //   endTime: "20:00",
        //   classroom: "404",
        //   name: "小孩名称",
        //   phone: "电话号码",
        //   img: require("@/assets/images/img2.jpg")
        // }
      ],
      dataDetail: {
        // name: "小孩名称",
        // phone: "电话号码",
        // img: require("@/assets/images/img2.jpg")
      },
      ruleForm: {},
      rules: {},
      orgId:'',
      orderStatus:'',
      startTime:'',
      endTime:'',
    };
  },
    created(){
    this.getList()
  },
  methods: {

     stateFormat(row, column) {
      if (row.orderStatus === 1) {
        return "待付款";
      } else if (row.orderStatus === 2) {
        return "支付成功";
      }
    },
    getList() {
      this.$axios({
        method: "get",
        url: "/store/signin/getHotProductSigninList/?orgId=" + this.orgId+'&orderStatus='+this.orderStatus+"&startTime="+this.startTime+'&endTime='+this.endTime,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
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
        url: "/store/signin/getHotProductSigninInfo/" + id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.dataDetail = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    showInfo(){
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '点击归档则该数据同一归结到预约中 '),
            h('span', { style: 'color: red' }, '“已打卡”'),
            h('span', null, '目录下，便于管理和查看 '),
          ])
        });
    },
 //全选,取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
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
.item_title {
  min-width: 70px;
  display: inline-block;
  text-align: right;
}
.bottom_box{
 display: flex;
 align-items: center;
 margin-top: 20px;
}
.el-icon-question{
  font-size: 25px;
  color:lightgray;
  margin-left: 10px;
}
</style>

