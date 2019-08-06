    <template>
  <div class="content_box1">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form_box">
      <el-form-item label="资产状态" prop="title">
        <div style="display:flex">
          <el-select v-model="order_search" placeholder="请选择" style="width:150px">
            <el-option v-for="item in orderSearch" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <el-input></el-input>
        </div>
      </el-form-item>
      <el-form-item label="课程名称：" prop="title">
        <el-input style="width:390px"></el-input>
      </el-form-item>
      <el-form-item label="时间搜索：" prop="title">
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
      <el-table-column label="买家（手机号码）" width="150">
        <template slot-scope="props">
          <div class="user_info">
            <img :src=" props.row.childLogo" alt>
            <div>
              <div>{{ props.row.childName }}</div>
              <!-- <div>{{ props.row.phone }}</div> -->
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="orderNumber" label="订单号" width="285"></el-table-column>
      <el-table-column prop="title" label="预约课程"></el-table-column>
      <el-table-column prop="time" label="首次打卡时间" width="310">
        <template slot-scope="props">
          <!-- <div>{{ props.row.ADDTIME}}</div> -->
          <div>{{ props.row.apptsStartTime}}~{{props.row.apptsEndTime}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="classroom" label=" 购买类型"></el-table-column>
      <el-table-column prop="payMoney" label="金额"></el-table-column>
      <el-table-column prop="classroom" label=" 是否完课" :formatter="stateFormat"></el-table-column>
      <el-table-column prop="classroom" label=" 到账时间"></el-table-column>
      <!-- <el-table-column label="操作" width="280" align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="listDetail(scope.$index, scope.row)"
          >查看详情</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <el-dialog title="购买用户" :visible.sync="dialogVisible" width="30%" :before-close="closeDialog">
      <el-form ref="dataDetail" label-width="80px">
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
          <span class="item_title">订单号：</span>
          <span>{{ dataDetail.orderNumber }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">下单时间：</span>
          <span>{{ dataDetail.ADDTIME }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">订单状态：</span>
          <span>{{ dataDetail.orderStatus==2?'支付成功':'代付款' }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">购买方式：</span>
          <span>{{ dataDetail.payType }}</span>
        </div>
        <div class="info_item">
          <span class="item_title">购买金额：</span>
          <span>{{ dataDetail.payMoney }}</span>
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
  name: "order",
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
      // dataList: [
      //   {
      //     class: "搜索就事论事极乐世界说了句睡懒觉三十六计睡懒觉",
      //     orderNum: "101232323",
      //     orderState:'待支付',
      //     orderMoney:'200',
      //     date: "2019-04-07",
      //     startTime: "14:00",
      //     endTime: "20:00",
      //     classroom: "404",
      //     name: "小孩名称",
      //     phone: "电话号码",
      //     img: require("@/assets/images/img2.jpg")
      //   }
      // ],
      dataList: [],
      dataDetail: [],
      form: {
        name: "小孩名称",
        phone: "电话号码",
        img: require("@/assets/images/img2.jpg")
      },
      ruleForm: {},
      rules: {},
      orgId: "",
      hotCourseId: "",
      startTime: "",
      endTime: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    stateFormat(row, column) {
      if (row.ifinish === 0) {
        return "未完成";
      } else if (row.orderStatus === 1) {
        return "已完成";
      }
    },
    getList() {
      this.$axios({
        method: "get",
        url:
          "/store/property/getPropertyList/?orgId=" +
          this.orgId +
          "&hotCourseId=" +
          this.hotCourseId +
          "&startTime=" +
          this.startTime +
          "&endTime=" +
          this.endTime,
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
      this.getListDetail(row.id);
    },

    getListDetail(id) {
      this.$axios({
        method: "get",
        url: "/store/order/getHotProductOrderInfo/" + id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.dataDetail = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
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
</style>

