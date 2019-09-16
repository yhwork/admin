<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      <el-breadcrumb-item>活动爆品</el-breadcrumb-item>
      <el-breadcrumb-item v-if="edit_id">编辑爆品</el-breadcrumb-item>
      <el-breadcrumb-item v-else >新建爆品</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div>
          <div class="title">基本信息</div>
          <el-form-item label="产品名称：" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请输入产品名称" style="width:500px;"></el-input>
          </el-form-item>
          <el-form-item label="产品分类：" prop="category">
            <el-select
              v-model="ruleForm.category"
              value-key="id"
              placeholder="请选择"
              @change="changeCategory"
            >
              <el-option
                v-for="item in categoryList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="活动类型：" prop="istay">
            <el-radio-group v-model="ruleForm.istay" @change="changeStay">
              <el-radio :label="1">住宿</el-radio>
              <el-radio :label="2">走读</el-radio>
            </el-radio-group>
          </el-form-item>-->
          <!-- <div v-if="course_type">
            <el-form-item label="报名类型 ：" prop="ibuyTime">
              <el-radio-group v-model="ruleForm.ibuyTime" @change="changeStayTime">
                <el-radio :label="1">固定报名</el-radio>
                <el-radio :label="2">循环报名</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>-->
          <el-form-item label="产品图片：" prop="imgVideo">
            <el-upload
               :action="url_root + img_url"
              multiple
              accept="image/png, image/jpeg"
              list-type="picture-card"
              :limit="6"
              :headers="headers"
              :on-success="uploadImg"
              :on-preview="previewImg"
              :on-remove="removeImg"
              :show-file-list="true"
              :file-list="imgList"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
            <div class="hint_info">
              建议尺寸：750 x 420 像素，你可以拖拽图片调整图片顺序，最多传6张
              <span class="hint_info2" @click="showImg(1)">查看示例</span>
              <div class="img_box" v-if="img_state1">
                <div class="el-icon-error close_icon" @click="closeImg(1)"></div>
                <div class="symbol_icon"></div>
                <img src="@/assets/images/banner.png" alt />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="产品标签：" prop="lable">
            <el-select
              style="width:800px;"
              v-model="labelArray"
              multiple
              filterable
              allow-create
              default-first-option
              @change="changeLabel"
              placeholder="请设置章标签，可自定义"
            >
              <el-option
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <div class="hint_info hint_img">
              可以输入如：5-15岁、初级钢琴基础、一对一等、显示在线产品下一行。
              <span class="hint_info2" @click="showImg(2)">查看示例</span>
              <div class="img_box" v-if="img_state2">
                <div class="el-icon-error close_icon" @click="closeImg(2)"></div>
                <div class="symbol_icon"></div>
                <img src="@/assets/images/demo.png" alt />
              </div>
            </div>
          </el-form-item>
          <el-form-item label="产品卖点：" prop="subtitle">
            <el-input
              v-model="ruleForm.subtitle"
              placeholder="请输入产品卖点"
              maxlength="60"
              style="width:500px;"
            ></el-input>
            <div class="hint_info">
              在课程详情页标题下面展示卖点信息，最多60字
              <span class="hint_info2" @click="showImg(3)">查看示例</span>
              <div class="img_box" v-if="img_state3">
                <div class="el-icon-error close_icon" @click="closeImg(3)"></div>
                <div class="symbol_icon"></div>
                <img src="@/assets/images/info.png" alt />
              </div>
            </div>
          </el-form-item>
        </div>
        <div>
          <div class="title">价格及售卖信息</div>
          <!-- 点击添加增加日期 -->

          <el-form-item label="开课日期：" :required="true">
            <!-- 日期 -->
            <div class="playdate_all">
              <div class="date_all">
                <div class="data_items" v-for="(item, index) in activeityDate" :key="index">
                  <el-date-picker
                    v-model="activeityDate[index].startDate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="开始日期"
                    :picker-options="pickerOptions0"
                    :focus="getindex(index)"
                    @change="changeCourseStartTime"
                  ></el-date-picker>
                  <!-- <span v-if="!course_type"> -->
                  <span class="paddingall">至</span>
                  <el-date-picker
                    v-model="activeityDate[index].endDate"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="结束日期"
                    :picker-options="pickerOptions0"
                    @change="changeCourseEndTime"
                  ></el-date-picker>
                  <div class="plyadeletetime">
                   <i class="el-icon-delete deletecolor" 
                      @click="deletedatatimes(index)"
                      v-if=" index == 0?false:true"
                      icon="el-icon-delete"></i>
                  </div>

                </div>
              </div> 
              <!-- <el-button type="primary" disabled>主要按钮</el-button> -->
              <div class="playbtnaddtime">
                <el-button class="addclasstime" type="primary" @click="addatatimes" icon="el-icon-circle-plus-outline">新增日期</el-button>
              </div>
            </div>

            <!-- 控制 -->

            <!-- </span> -->
          </el-form-item>
          <!-- <div v-if="course_type"> -->
          <el-form-item label="次数：" prop="count">
            <el-input v-model="ruleForm.count" placeholder="输入名额" style="width:220px;"></el-input>
          </el-form-item>
          <el-form-item label="重复：">
            <div style="display: flex;align-items: flex-start;">
              <el-checkbox-group v-model="weekState" @change="changeWeek">
                <el-checkbox
                  v-for="item in weekArray"
                  :label="item"
                  :key="item"
                  :disabled="item.state"
                >{{item}}</el-checkbox>
              </el-checkbox-group>
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="changeWeekAll"
                style="margin-left:20px;"
              >全选</el-checkbox>
            </div>
          </el-form-item>
          <!-- </div> -->
          <el-form-item label="活动时间：" prop="stime">
            <!-- <el-time-picker value-format="HH:mm:ss" v-model="ruleForm.stime" placeholder="开始时间"></el-time-picker> -->
            <el-time-select placeholder="开始时间" v-model="ruleForm.stime" :picker-options="{start: '06:30', step: '00:15', end: '22:30' }"></el-time-select>至
            <el-time-select placeholder="结束时间" v-model="ruleForm.etime" :picker-options="{ start: '06:30', step: '00:15', end: '22:30', minTime: ruleForm.stime  }"></el-time-select>
          </el-form-item>
          <!-- <el-form-item label="结束时间：" prop="etime"> -->
            <!-- <el-time-picker value-format="HH:mm:ss" v-model="ruleForm.etime" placeholder="结束时间"></el-time-picker> -->
            
          <!-- </el-form-item> -->


          <el-form-item label="划线价格：" prop="origPrice">
            <el-input
              v-model="ruleForm.origPrice"
              type="number"
              placeholder="请输入划线价格"
              style="width:220px"
            ></el-input>
          </el-form-item>
          <el-form-item label="实际价格：" prop="disPrice">
            <el-input
              v-model="ruleForm.disPrice"
              type="number"
              placeholder="请输入实际价格"
              style="width:220px"
            ></el-input>
          </el-form-item>

          <el-form-item label="活动地点：" prop="address" v-if="course_type">
            <el-input v-model="ruleForm.address" placeholder="活动地点" style="width:500px;"></el-input>
          </el-form-item>

          <el-form-item label="是否拼团：">
            <el-radio-group v-model="igroup" @change="changeAssemble">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
            <div v-if="assemble_state">
              <el-form-item label="拼团价格：" prop="groupPrice" style="margin-bottom:20px">
                <div class="info_box">
                  <el-input v-model="ruleForm.groupPrice" type="number" placeholder="请输入拼团价格"></el-input>
                </div>
              </el-form-item>
              <el-form-item label="拼团人数：" prop="memberNum" style="margin-bottom:20px">
                <div class="info_box">
                  <el-input v-model="ruleForm.memberNum" type="number" placeholder="请输入拼团人数"></el-input>
                  <span>人</span>
                </div>
              </el-form-item>

              <!-- 开课日期 -->
              <el-form-item label="拼团日期：" :required="true" style="margin-bottom:20px">
                <div class="info_box">
                  <el-date-picker
                    v-model="groupStartTime"
                    :picker-options="pickerOptions0"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="开始日期"
                    @change="changeGroupStartTime"
                  ></el-date-picker>
                  <span>至</span>
                  <el-date-picker
                    v-model="groupEndTime"
                    :picker-options="pickerOptions0"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="结束日期"
                    @change="changeGroupEndTime"
                  ></el-date-picker>
                </div>
              </el-form-item>
              
            </div>
          </el-form-item>
          <el-form-item label="课程详情：" :required="true">
            <UEditor :config="config" ref="ueditor"></UEditor>
          </el-form-item>
          <!-- <el-form-item label="开售时间：" :required="true">
            <el-radio-group v-model="saleTime" @change="changeSaleTime">
              <el-radio :label="0">立即开售</el-radio>
              <div>
                <el-radio :label="1">定时开售，设置开售时间</el-radio>
                <el-date-picker
                  v-model="saleStartTime"
                  type="datetime"
                  placeholder="选择开始时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  @change="changeSaleStartTime"
                  :disabled="time_state"
                ></el-date-picker>
                <span style="margin-left:120px;color:red">至</span>
                <el-date-picker
                  v-model="saleEndTime"
                  type="datetime"
                  placeholder="选择结束时间"
                  :disabled="time_state"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  @change="changeSaleEndTime"
                  style="margin-left:20px"
                ></el-date-picker>
              </div>
              <el-radio :label="2">暂不开售，存为草稿</el-radio>
            </el-radio-group>
          </el-form-item>-->
        </div>

        <div class="bottom_box">
          <el-button style="margin-top: 12px;" @click="goList">取消</el-button>
          <el-button style="margin-top: 12px;" @click="submitForm('ruleForm')">保存</el-button>
          <el-button style="margin-top: 12px;" @click="showMask">预览</el-button>
        </div>

        <div class="mask_box" v-if="view_state" @click="cancleMask">
          <div class="device-ios">
            <div class="banner_top"></div>
            <div class="device-inner">
              <!-- <img src="@/assets/images/img2.jpg" alt> -->
              <el-carousel height="190px">
                <el-carousel-item v-for="item in this.ruleForm.imgVideo" :key="item">
                  <!-- <h3>{{ item }}</h3> -->
                  <img :src="item" alt />
                </el-carousel-item>
              </el-carousel>
              <div class="popup_banner">
                <div class="goods_title">{{ruleForm.title}}</div>
                <div class="goods_info">{{ruleForm.subtitle}}</div>
                <div class="lable_box">
                  <div class="label_item" v-for="item in ruleForm.lable" :key="">{{item}}</div>
                </div>
                <div>
                  <span class="o_price">¥{{ruleForm.disPrice}}</span>
                  <span>|</span>
                  <span class="d_price">门市价¥{{ruleForm.origPrice}}</span>
                  <span class="label_info">随时退</span>
                  <!-- <span class="label_info">过期退</span> -->
                </div>
              </div>
              <div>
                <div class="popup_title">购买须知</div>
                <div class="popup_box">
                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>{{ruleForm.courseNum}}次课，每次课{{ruleForm.courseTime}}分钟</span>
                  </div>
                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>适合2～5岁儿童</span>
                  </div>
                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>发码日期：预约即发码（系统发码）</span>
                  </div>

                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>预约方式：“待预约”订单在线预约</span>
                  </div>
                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>有限期限: {{courseStartTime}} ～ {{courseEndTime}}</span>
                  </div>
                  <div class="popup_item">
                    <span class="el-icon-bell"></span>
                    <span>单人购买无无上限</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="popup_title">详细信息</div>
                <div class="popup_box" style="padding:8px" v-html="editor_content"></div>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import TinymceEditor from "./tinymce-editor";
import UE from "@/components/page/UE.vue";
import UEditor from "@/components/page/ueditor.vue";
import URL  from '@/api/config';
export default {
  components: {
    UEditor
  },
  name: "active_setup",
  inject: ["reload"],
  data() {
    return {
      url_root:'',
      // img_url:'/store/file/img/upload',   // 代理配置
      img_url:'/file/img/upload',
      config: {
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent: "请输入内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent: true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: 900,
        initialFrameHeight: 400,
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/ueditor/"
      },
      CourseTimecount: [{ id: 0 }],    // 上课时间
      activeityDate:[{startDate:'',endDate:''}],
      //今天之前不可选
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      temp: [],
      Video: "",
      index: "",
      categoryList: [],
      igroup: 1,
      time_state: true,
      time_state1: true,
      assemble_state: true,
      view_state: false,
      course_type: false,   // 活动地点
      img_state1: false,
      img_state2: false,
      img_state3: false,
      startTime: "",
      endTime: "",
      saleTime: 0,
      shelfDownTime: "",
      dateRange: [new Date(2019, 4, 1), new Date(2019, 4, 30)],
      checkAll: false,
      weekState: ["星期一"],
      week: "",
      weekArray: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ],
      isIndeterminate: true,
      activeName: "first",
      dialogImageUrl: "",
      dialogVisible: false,
      iShelf: 1,
      imageUrl: "",
      imgList: [],
      activeIndex: "1",
      activeName: "first",
      disabled: true,
      value: "",
      options5: [
        {
          value: "初级基础",
          label: "初级基础"
        }
      ],
      ie:1,
      labelArray: [],
      classStartTime: "",
      classStartTime1: "",
      classEndTime: "",
      courseStartTime: "",
      courseEndTime: "",
      groupTimeArray: [],
      groupStartTime: "",
      groupEndTime: "",
      saleStartTime: "",
      saleEndTime: "",
      edit_id: "", // 编辑id
      courseId: "",
      filterDate: [],
      tempFilterDate: [],
      editor_content: "",
      tempCourseTime: [],
      frequency: [],
      startDate: "",    // 起始时间
      startDatelist:[],
      endDate: "",
      endDatelist:[],
      ruleForm: {
        title: "",
        category: "",
        subtitle: "",
        origPrice: "",
        disPrice: "",
        count: "",
        groupPrice: "",
        memberNum: "",
        lable: [],
        imgVideo: [],
        tempImgVideo: [],
        limit: 1,
        videoCount: "",
        effectiveTime: "",
        description: "",
        imgList: "",
        istay: 1,
        ibuyTime: 1,
        count: "",

        address: "",
        stime: "",
        etime: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { max: 50, message: "最多50字" }
        ],
        imgVideo: [{ required: true, message: "请上传图片", trigger: "blur" }],
        count: [{ required: true, message: "请输入名额", trigger: "blur" }],
        limit: [{ required: true, message: "请输入限购人数", trigger: "blur" }],
        istay: [{ required: true, message: "选择活动类型", trigger: "blur" }],
        ibuyTime: [
          { required: true, message: "选择报名类型", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择产品分类", trigger: "blur" }
        ],
        stime: [{ required: true, message: "请输入开始时间", trigger: "blur" }],
        etime: [{ required: true, message: "请输入结束时间", trigger: "blur" }],
        origPrice: [
          { required: true, message: "请输入产品原价", trigger: "blur" }
        ],
        disPrice: [
          { required: true, message: "请输入产品优惠价格", trigger: "blur" }
        ],
        groupPrice: [
          { required: true, message: "请输入拼团价格", trigger: "blur" }
        ],
        memberNum: [
          { required: true, message: "请输入拼团人数", trigger: "blur" }
        ]
      }
    };
  },
   activated() {
    console.log('url',URL.root);
    this.url_root = URL.root;
  },
  created() {
    this.edit_id = this.$route.query.id ? this.$route.query.id : "";
     console.log('编辑',this.edit_id)
    if (this.edit_id != "") {
      this.getEditInfo();   // 获取信息
    } else {
       this.course_type = true;   // 活动地址
      this.getOrgList();
    }
    this.getCategory();
  },

  watch: {
    $route(to, from) {
      this.edit_id = this.$route.query.id ? this.$route.query.id : "";
      if (this.edit_id != "") {
        this.getEditInfo();
      }
    }
  },
  methods: {
    //获取文档内容
    getContent: function() {
      let content = this.$refs.ueditor.getUEContent();
      alert(content);
    },
    //设置
    setContent(txt) {
      console.log(UE);
      this.$refs.ueditor.setContent(txt);
    },
    // 增加日期
    addatatimes(){
      // 先判断当前时间填写情况
      var val = this.activeityDate;
      var i = val.length;

      if(i==0){
        return  this.$message('请先输入正确日期');
      }else{
        // 判断第一次的值为多少
        for(var s=0;s<val.length;s++){
          if(s+1 == i){
            if(val[s].startDate== "" || val[s].endDate == "" || val[s].startDate== null || val[s].endDate == null ){
              return this.$message('请输入当前日期')
            }else{
              var listtime = this.activeityDate;
              // var arr2 =[]
              // listtime.map((item,i)=>{
              //   var obj= {};
              //   obj.startDate=item.startDate;
              //   obj.endDate=item.endDate;
              //   arr2[i]=obj
              // })
              var arr= JSON.parse(JSON.stringify(listtime))   // 拷贝
              arr.push({
                startDate:"",
                endDate:"",
              })
              // arr[s+1]={ 
              //   startDate:"",
              //   endDate:"",
              // }
              // if(arr.length<=3){
                this.activeityDate = arr;
                  console.log('一次时间',this.activeityDate)
              // }else{
                //  console.log('一次时间',this.activeityDate)
                //  return this.$message('超出限制日期');
              // }
            }
          }
        }
      }

    },
    deletedatatimes(i){
      // var listtime = this.CourseTimecount;
      // var [ ...arr2 ] = listtime
      // arr2.splice(i,1)

      this.$confirm('此操作将永久删除该日期, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          console.log(i)
         this.activeityDate.splice(i,1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     

    },
    getindex(e){
      console.log(e)
      this.ie=e;
    },
    // 上课开始时间
    changeCourseStartTime(e) {
      var i = this.ie
      this.startDate = e;
      var obj = {
        startDate:e,
        endDate:this.endDate
      }
      this.activeityDate[i].startDate= e;
 
    },
    // 上课结束时间
    changeCourseEndTime(e) {
      this.endDate = e;
      var i= this.ie
      var obj = {
        startDate:this.startDate,
        endDate:e
      }
      this.activeityDate[i].endDate= e;

    },
    //获取分类
    getCategory() {
      this.$axios({
        method: "get",
        url: "/store/org/getHotActivitySubList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.categoryList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    // 切换分类
    changeCategory(e) {
      this.ruleForm.category = e;
    },

    //获取门店
    getOrgList() {
      this.$axios({
        method: "get",
        url: "/store/org/getOrgListByOrgid",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          var arr3 = [];
          var temp = res.data.result;

          temp.forEach(function(item, index) {
            arr3.push({
              orgName: temp[index].name,
              id: temp[index].id,
              iedit: "false",
              orgId: sessionStorage.getItem("orgId")
            });
          });
          this.orglist = arr3;
          for (var i in this.orglist) {
            this.orglist[i].courseTime = [];
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //示例图片
    showImg(e) {
      if (e == 1) {
        this.img_state1 = true;
      } else if (e == 2) {
        this.img_state2 = true;
      } else {
        this.img_state3 = true;
      }
    },
    closeImg(e) {
      if (e == 1) {
        this.img_state1 = false;
      } else if (e == 2) {
        this.img_state2 = false;
      } else {
        this.img_state3 = false;
      }
    },

    //上传图片
    uploadImg(response, file, fileList) {
      var temp = fileList;
      var tempArray = {}; //创建一个空对象
      for (var i = 0; i < temp.length; i++) {
        tempArray[i] = temp[i].response.result;
      }
      this.ruleForm.imgVideo = tempArray;
    },

    previewImg(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    removeImg(file, fileList) {
      this.ruleForm.imgVideo = fileList;
    },

    //添加标签
    changeLabel(e) {
      var temp = this.labelArray;
      var tempArray = {}; //创建一个空对象
      for (var i = 0; i < temp.length; i++) {
        tempArray[i] = temp[i];
      }
      this.ruleForm.lable = tempArray;
    },

    showMask() {
      this.view_state = true;
      this.editor_content = this.$refs.ueditor.getUEContent();
    },

    cancleMask() {
      this.view_state = false;
    },

    //各类状态
    changeAssemble(e) {
      this.assemble_state = !this.assemble_state;
      if (this.assemble_state) {
        this.igroup = 1;
      } else {
        this.igroup = 0;
      }
    },

    //下架时间
    shelfDown() {
      this.time_state1 = !this.time_state1;
    },
    // 切换活动
    changeStay(e) {
      this.course_type = !this.course_type;
    },
    changeStayTime(e) {
      this.ruleForm.ibuyTime = e;
    },

    // changeActiveStartTime(e) {
    //   this.stime = e;
    // },
    // changeActiveEndTime(e) {
    //   this.ruletime = e;
    // },
    changeGroupTime(e) {
      this.groupTimeArray = e;
    },
    changeGroupStartTime(e) {
      this.groupStartTime = e;
    },
    changeGroupEndTime(e) {
      this.groupEndTime = e;
    },
    changeSaleTime(e) {
      this.saleTime = e;
      if (e == 1) {
        this.time_state = false;
      } else {
        this.time_state = true;
      }
    },

    changeSaleStartTime(e) {
      this.saleStartTime = e;
    },
    changeSaleEndTime(e) {
      this.saleEndTime = e;
    },

    //设置重复
    changeWeekAll(val) {
      this.weekState = val ? this.weekArray : [];
      this.isIndeterminate = false;
      this.frequency = [];
      if (val) {
        this.frequency.push(1);
      } else {
        this.frequency = [];
      }
    },

    //设置重复星期
    changeWeek(array) {
      this.frequency = [];
      array.forEach(item => {
        if (array.length < 7) {
          switch (item) {
            case "星期一":
              this.frequency.push(2);
              break;
            case "星期二":
              this.frequency.push(3);
              break;
            case "星期三":
              this.frequency.push(4);
              break;
            case "星期四":
              this.frequency.push(5);
              break;
            case "星期五":
              this.frequency.push(6);
              break;
            case "星期六":
              this.frequency.push(7);
              break;
            case "星期日":
              this.frequency.push(8);
              break;
          }
        } else {
          this.frequency = [];
          this.frequency.push(1);
        }
      });
    },

    goList() {
      this.$router.go(-1);
    },
// 请求编辑信息
    getEditInfo() {
      this.$axios({
        method: "get",
        url: "/store/activity/getActivityProductInfo/" + this.edit_id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {

        // activityId: 17
        // address: ""
        // count: 4
        // descr: "<p style="text-align: center;"><img src="https://qa.oss.iforbao.com/store/63/201907051104334546.jpg?Expires=4715924673&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=rOiQc36DGNgeh6dn4ONFesspd68%3D" title="" alt="乐工坊长图.jpg"/></p>"
        // disPrice: 1050
        // etime: "16:30:00"
        // frequency: "[2,3,4,5,6]"
        // groupEndTime: null
        // groupPrice: null
        // groupStartTime: null
        // ibuyTime: 1
        // id: 162
        // igroup: 0
        // imgVideo: "{"0":"https://qa.oss.iforbao.com/store/63/201907051050497299.png?Expires=4715923849&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=V2vuVYT7REAGa4JvqE49Y37E%2ByA%3D","1":"https://qa.oss.iforbao.com/store/63/201907051050494372.jpg?Expires=4715923849&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=6aUnWZKkrUpTkgq9s4Ika2qq4Ug%3D","2":"https://qa.oss.iforbao.com/store/63/201907051050491393.jpg?Expires=4715923849&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=YtTTNp9ETd%2BXeQR3AtCcQkb8lz0%3D","3":"https://qa.oss.iforbao.com/store/63/201907051050497500.png?Expires=4715923849&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=EOhO4gQ80Y6I97K2bxnxWxpebWc%3D","4":"https://qa.oss.iforbao.com/store/63/201907051050499978.png?Expires=4715923849&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=1aHNFhtyCqBC0%2BaHB%2FF6V1x%2BZQo%3D"}"
        // istay: 0     // 是否住宿
        // lable: "["小班制教学","幼小衔接","少儿编程","暑假托班","STEM"]"
        // memberNum: 0
        // origPrice: 1500
        // activeityDate:[{starDate:'',endDate:''},{}]
        // stime: "08:30:00"
        // subjectId: 6
        // subtitle: "少儿编程/科学实验/综合幼小衔接特色课/让孩子一个暑假拥有多重收获 "
        // surplusCount: 0
        // title: "STEM机器人暑假班 适合4-6岁 小班制授课"


         
        // activeity      活动
        // activeityDate  活动日期
        // product        商品信息
          console.log("info", res.data.result);
          var result = res.data.result;




          if(res.data.errorCode == "1") {
            this.$message(res.data.errorMessage);
          } else if(res.data.errorCode == 0){
            if(result == null){
              return this.$message("没有该活动信息");
            }

            // 活动信息
                /**   activity
                  address: "活动地点"
                  descr: "<p><img src="https://qa.oss.iforbao.com/store/63/201907240558196678.jpg?Expires=4717547899&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=yvjtKh%2FBnO8BTESHiA9%2F%2FsSnRsQ%3D" title="" alt="img2.jpg"/></p>"
                  endDate: "2019-07-26"
                  endTime: "14:57:34"
                  frequency: "[]"
                  id: 25
                  istay: 0
                  name: "产品名称"
                  startDate: "2019-07-25"
                  startTime: "13:57:33"
                */
              this.ruleForm.address = result.activity.address;
              //设置富文本
              var atime = null
              atime= setTimeout(() => {
                  console.log('内容',result.descr)
                  this.$refs.ueditor.setContent(result.activity.descr);
                  atime =null
              }, 1800);

              this.frequency = JSON.parse(result.activity.frequency);
              // 活动地点
              if (result.activity.istay == 0 || result.activity.istay == 1  ||result.activity.istay == 3 ) {
                this.course_type = true;    
                var array = JSON.parse(result.activity.frequency);    // 重复周期
                array.forEach(item => {
                  switch (item) {
                    case 2:
                      this.weekState.push("星期一");
                      break;
                    case 3:
                      this.weekState.push("星期二");
                      break;
                    case 4:
                      this.weekState.push("星期三");
                      break;
                    case 5:
                      this.weekState.push("星期四");
                      break;
                    case 6:
                      this.weekState.push("星期五");
                      break;
                    case 7:
                      this.weekState.push("星期六");
                      break;
                    case 8:
                      this.weekState.push("星期日");
                      break;
                  }
                });
              }
              // 活动时间
              this.ruleForm.stime = result.activity.startTime;
              this.ruleForm.etime = result.activity.endTime;
          // 活动时间范围
              /**  activityDate
                address: "活动地点"
                descr: "<p><img src="https://qa.oss.iforbao.com/store/63/201907240558196678.jpg?Expires=4717547899&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=yvjtKh%2FBnO8BTESHiA9%2F%2FsSnRsQ%3D" title="" alt="img2.jpg"/></p>"
                endDate: "2019-07-26"
                endTime: "14:57:34"
                frequency: "[]"
                id: 25
                istay: 0
                name: "产品名称"
                startDate: "2019-07-25"
                startTime: "13:57:33"
               */
              var activeityDate = [];
              result.activityDate.map((item,i)=>{
                  if(item){
                    activeityDate[i]={
                        startDate:item.startDate,
                        endDate:item.endDate
                    }
                  }
              })
              this.activeityDate=activeityDate
          // 产品信息
            /**   product
              count: 10
              descr: "<p><img src="https://qa.oss.iforbao.com/store/63/201907240558196678.jpg?Expires=4717547899&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=yvjtKh%2FBnO8BTESHiA9%2F%2FsSnRsQ%3D" title="" alt="img2.jpg"/></p>"
              disPrice: 300
              groupEndTime: null
              groupPrice: null
              groupStartTime: null
              id: 187
              igroup: 0
              imgVideo: "{"0":"https://qa.oss.iforbao.com/store/63/201907240556533416.png?Expires=4717547813&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=Tuec0T%2BmxCSNmO0bKc%2B7LG2TP%2FM%3D"}"
              lable: "{"0":"标签"}"
              memberNum: 0
              origPrice: 500
              subjectId: 33
              subtitle: "产品卖点"
              surplusCount: 0
              title: "产品名称"
             */
           
            //重组图片
            this.ruleForm.imgVideo = JSON.parse(result.product.imgVideo);
            var temp = Object.values(JSON.parse(result.product.imgVideo));
            this.tempImgVideo = result.product.imgVideo;
            if (temp.length > 0) {
              for (let t = 0; t < temp.length; t++) {
                this.imgList.push({
                  name: "",
                  url: temp[t],
                  response: { result: temp[t] }
                });
              }
            }
            //重组标签
            var tempLabel = Object.values(JSON.parse(result.product.lable));
            this.labelArray = tempLabel;
            this.ruleForm.lable = tempLabel;
            //设置拼团状态
            if (result.product.igroup == 0) {
              this.assemble_state = false;
              this.igroup = 0;
            }
            // 产品名称
            this.ruleForm.title = result.product.title;
            // 标识价格
            this.ruleForm.origPrice = result.product.origPrice;
            this.ruleForm.disPrice =  result.product.disPrice;
            this.ruleForm.category = result.product.subjectId;
            // 卖点
            this.ruleForm.subtitle = result.product.subtitle;
            this.groupStartTime =result.product.groupEndTime;
            this.groupEndTime = result.product.groupStartTime;
            this.ruleForm.groupPrice = result.product.groupPrice;
            this.ruleForm.memberNum = result.product.memberNum;
            this.ruleForm.count = result.product.count;


            // this.courseId = res.data.result.activityId;
            // this.ruleForm.courseNum = result.num;
            // this.ruleForm.courseTime = res.data.result.time;
            // this.ruleForm.ibuyTime = res.data.result.ibuyTime;
            
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    },
  // 提交保存
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("valid", valid, this.ruleForm);
        let content = this.$refs.ueditor.getUEContent();
        if(this.startDatelist.length != this.endDatelist.length){
          return this.$message('请确认开课日期是否正确')
        }
        if (this.edit_id != "") {
          if (this.ruleForm.imgVideo == "") {
            var temp_img = this.tempImgVideo;
          } else {
            var temp_img = JSON.stringify(this.ruleForm.imgVideo);
          }
        } else {
          var temp_img = JSON.stringify(this.ruleForm.imgVideo);
        }

        if (this.assemble_state) {
          this.igroup = 1;
        } else {
          this.igroup = 0;
        }

        var params = {
          id: parseInt(this.edit_id),
          activityId: this.courseId,
          title: this.ruleForm.title,
          subjectId: this.ruleForm.category,
          imgVideo: temp_img,
          lable: JSON.stringify(this.ruleForm.lable),
          subtitle: this.ruleForm.subtitle,
          // istay: this.ruleForm.istay,
          ibuyTime: this.ruleForm.ibuyTime,
          frequency: JSON.stringify(this.frequency),
          address: this.ruleForm.address,
          // startDate: this.startDatelist,       // 更改信息  为列表
          // endDate: this.endDatelist,           // 更改信息  为列表
          activityDate: this.activeityDate,    // 活动日期
          stime: this.ruleForm.stime,
          etime: this.ruleForm.etime,
          origPrice: this.ruleForm.origPrice,
          disPrice: this.ruleForm.disPrice,
          igroup: this.igroup,
          groupPrice: this.ruleForm.groupPrice,
          groupStartTime: this.groupStartTime ? this.groupStartTime : null,
          groupEndTime: this.groupEndTime ? this.groupEndTime : null,
          count: this.ruleForm.count,
          surplusCount: this.ruleForm.courseTime,
          descr: content,
          startTime: this.saleStartTime ? this.saleStartTime : null,
          endTime: this.saleEndTime ? this.saleEndTime : null,
          memberNum: this.ruleForm.memberNum,
          ishelf: this.iShelf
        };
        console.log('参数',params)
        if (valid) {
          if (this.edit_id != "") {
            this.$axios({
              method: "post",
              url: "/store/activity/updateActivityProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                if (res.data.errorCode == 0) {
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                    this.$router.go(-1);
                } else {
                   this.$message({
                      message: res.data.errorMessage,
                  type: 'warning'});
                }
              })
              .catch(error => {
                console.log("error", error);
              });
          } else {
            this.$axios({
              method: "post",
              url: "/store/activity/addActivityProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                if (res.data.errorCode == 0) {
                  this.$router.push("/activity");
                }else{
                  this.$message(res.data.errorMessage);
                }
              })
              .catch(error => {
                console.log("error", error);
              });
          }
        } else {
          if (this.ruleForm.title == "") {
            this.$message.error("请输入产品名称");
          } else if (this.ruleForm.category == "") {
            this.$message.error("请选择产品分类");
          } else if (this.ruleForm.imgVideo == "") {
            this.$message.error("请上传图片");
          } else if (this.ruleForm.courseNum == "") {
            this.$message.error("请输入课节数");
          } else if (this.ruleForm.courseTime == "") {
            this.$message.error("请输入课程时长");
          } else if (this.ruleForm.origPrice == "") {
            this.$message.error("请输入产品原价");
          } else if (this.ruleForm.disPrice == "") {
            this.$message.error("请输入产品优惠价格");
          } else if (this.ruleForm.count == "") {
            this.$message.error("请输入名额");
          } else if (this.ruleForm.courseStartTime == "") {
            this.$message.error("请设置开课日期");
          } else if (this.ruleForm.groupPrice == "") {
            this.$message.error("请输入拼团价格");
          } else if (this.ruleForm.memberNum == "") {
            this.$message.error("请输入拼团人数");
          }
        }
      });
    }
  }
};
</script >

<style scoped>
.dialog_box >>> .el-dialog {
  width: 65% !important;
}
.paddingall{
  margin:  0 5px;
}
.playdate_all {
  display: flex;
  flex-flow: row nowrap;
}
.deletecolor{
  color: rgb(216, 56, 56);
}
.addclasstime{
  position: relative;
  left: -25px;
  top:15px;
}
.playbtnaddtime {
  flex: 2;
  
}
.date_all {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
}
.data_items{
  display: flex;
  margin: 15px 15px 15px 0;
}

.plyadeletetime {
  margin:0 15px;
}
.el-dialog__header {
  background: #242f42 !important;
}
.el-dialog__title {
  color: #fff;
}
.campus_title {
  padding: 15px 25px;
  color: #e51c23;
}
.transfer_box {
  padding: 0 20px 20px 0;
}
.mask_box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 300px;
  z-index: 9999;
}
.date_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date_info .el-input {
  width: 150px !important;
  margin-right: 10px;
}
.date_box {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
/**日历样式控制 */
.el-date-editor.el-input{
  width: 140px;
}
.date_box .el-input {
  margin: 0;
}
.el-dialog__body .el-form-item >>> .el-form-item__label {
  width: 125px !important;
}

.el-upload-list .el-upload-list__item {
  width: 200px !important;
}
.campus {
  padding: 20px 15px;
  box-sizing: border-box;
}
.title {
  margin-bottom: 20px;
  background: #f5f4f4;
  padding: 8px;
}
.el-menu-item,
.el-submenu__title {
  height: 20px;
  line-height: 20px;
  padding-bottom: 30px;
}
.input_item {
  height: 50px;
  display: flex;
  align-items: center;
}
.symbol_box {
  min-width: 140px;
}
.input_symbol {
  color: #e51c23;
  color: 18px;
}
.input_symbol2 {
  color: #fff;
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
.list_title {
  color: orange;
  margin: 5px 0;
}
.rule_title {
  display: flex;
  justify-content: space-around;
  background: #ccc;
  padding: 0 10px;
  border: 1px solid #ccc;
}

.rule_title div {
  width: 20%;
  margin-right: 10px;
}

.rule_box {
  border: 1px solid #ccc;
  padding-bottom: 10px;
}

.rule_content {
  display: flex;
  justify-content: space-around;
  padding: 10px;
}

.rule_content >>> .el-form-item {
  width: 20%;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.rule_content .el-form-item .el-input {
  font-size: 12px;
  max-width: 65%;
}

.el-table >>> td,
.el-table >>> th {
  padding: 0 !important;
  padding: 0;
}
.info_box {
  display: flex;
  align-items: center;
}
.info_box .el-input {
  width: 20%;
  margin: 0 10px;
}
.expand_box {
  padding-left: 59px;
}
.expand_box .el-form-item {
  margin-right: 50px;
}
.bottom_box {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto;
}
.upload_box {
  width: 300px;
  border: 1px dashed #ddd;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
}
.upload_box1 {
  width: 200px;
  height: 150px;
  border-radius: 8px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #999;
}
.hint_info {
  font-size: 14px;
  color: #aaa;
}
.hint_info2 {
  color: #2f6992;
  cursor: pointer;
}
.store_box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.device-ios {
  width: 380px;
  height: 730px;
  background: #111;
  border-radius: 50px;
  box-shadow: 0px 0px 0px 2px #aaa;
  padding: 20px 15px;
  position: relative;
  margin-right: 80px;
}

.device-ios:before {
  content: "";
  width: 50px;
  height: 5px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #17181a;
  top: 27px;
  z-index: 110;
}

.banner_top {
  width: 150px;
  height: 20px;
  background: #000;
  border-radius: 0 0 15px 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.device-inner {
  background-color: #fff;
  height: 100%;
  border-radius: 30px;
  padding: 20px 0px 5px 0px;
  box-sizing: border-box;
  overflow: scroll;
}
.device-inner img {
  width: 100%;
  height: 220px;
}
.popup_title {
  background: #ddd;
  padding: 4px 5px;
  margin: 4px 0;
}
.popup_item {
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  padding: 4px;
  line-height: 18px;
}
.goods_title {
  font-size: 18px;
}
.goods_info {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
}
.lable_box {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.label_item {
  display: inline-block;
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 4px;
  margin-right: 8px;
}
.o_price {
  font-size: 18px;
  font-weight: bold;
  color: #e51c23;
}
.d_price {
  text-decoration-line: line-through;
  color: #aaa;
  font-size: 14px;
}
.label_info {
  font-size: 12px;
  padding: 0 5px;
  background: #ddd;
  color: darkorange;
  margin-left: 10px;
  border-radius: 4px;
}
.popup_banner {
  padding: 5px;
}

.hint_img {
  position: relative;
}
.img_box {
  width: 300px;
  height: 400px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30%;
  top: -10px;
  z-index: 100;
}
.close_icon {
  color: #409eff;
  font-size: 25px;
  position: absolute;
  right: -10px;
  top: -10px;
}
.img_box > img {
  width: 100%;
  height: 100%;
}
.symbol_icon {
  transform: translateX(-50%) rotate(45deg);
  top: 14px;
  position: absolute;
  z-index: 1;
  width: 6px;
  height: 6px;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  left: 0;
  top: 20px;
}
.week_content span {
  margin-right: 10px;
}
.time_item {
  line-height: 20px;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
}
</style>


