<style lang="scss">
.current {
  .elrow {
    display: flex;
    flex-flow: nowrap row;
  }
  .elmt-2 {
    margin-top: 2rem;
  }
  .color {
    cursor: pointer;
    color: #409eff;
    font-size: 0.78rem;
  }
  // .elm-1 {
  //   margin: 0 2px;
  // }
  // .elm-2 {
  //   margin: 0 1rem;
  // }
  // .elwith {
  //   width: 100%;
  //   max-width: 100%;
  // }
  .table_border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  .el_pageselect {
    padding: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  .bd {
    border: 1px solid red;
  }
  .flex2 {
    flex: 2;
  }
  .flex3 {
    flex: 3;
  }
  .flex1 {
    flex: 1;
  }
  .flex4 {
    flex: 4;
  }
  .flex5 {
    flex: 5;
  }
  // .ws10 input {
  //   padding: 0 60px;
  //   margin-right: 5px;
  // }
  // .ws30 input {
  //   padding: 0 80px;
  //   margin-right: 5px;
  // }
  // .ws20 input {
  //   padding: 0 70px;
  //   margin-right: 5px;
  // }
  // .ws40 input {
  //   padding: 0 100px;
  //   margin-right: 5px;
  // }
  // .w70 input {
  //   width: 70%;
  //   margin-right: 5px;
  // }
  // .w80 input {
  //   width: 80%;
  //   margin-right: 5px;
  // }
  // .w90 input {
  //   width: 90%;
  //   margin-right: 5px;
  // }
  /* element UI css updata*/
  .el-select .el-select--large {
    width: 100%;
  }
  .c_red {
    color: orange;
  }
  .selectclass input {
    width: 100%;
  }
  .clearselectall {
    font-size: 0.6rem;
    color: #409eff;
    height: 40px;
    line-height: 35px;
    margin-left: 15px;
  }
  .clearpadding {
    margin-top: 2px;
    padding: 8px 12px !important;
    margin-left: 15px;
  }
  .maxdialogclass {
    min-width: 750px;
  }
  .mystyles {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 5px 2px;
    padding: 15px 10px;
  }
  .column_couse {
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px solid red; */
    /* justify-content: center; */
    align-items: center;
  }
  .actives input {
    width: 200px !important;
  }
  .table_border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #a0c6f0 !important;
  }
  .table_import{
     border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: rgb(169, 231, 169) !important;
  }
  .table_borders {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #cae1ff !important;
  }
  /* .coursdata{
            width:100px;
            min-width: 100px;

        } */
  /* .curricu td{
            width: auto !important;
        } */
  .font_red {
    color: red;
    position: relative;
    margin-left: 10px;
  }
  .elerts {
    display: none;
    width: 160px;
    min-width: 100px;
    height: 55px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px 25px 10px 25px;
    background-color: #e6eef8;
    position: absolute;
    z-index: 99;
    left: 20px;
    top:30px;
    text-indent: 4px;
    line-height: 16px;
    font-size: 12px;
    color: #707070;
  }
  .font_red:hover .elerts {
    display: inline-block;
  }
  .el-input {
    width: auto;
  }
  .pathover:hover{
    color: #409eff;
  }
}
</style>
<template>
  <!--  课程  -->
  <div class="content_box1 current">
    <!-- 筛选 -->
    <div class="mystyles">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div>
          <el-button size="medium" @click="btnnewclass" type="primary">新建课程</el-button>
        </div>
        <div class="elrow elmt-2 selectclass">
          <el-form-item label="课程名称" prop="techername">
            <el-input v-model="ruleForm.courseName" placeholder="请输入课程名称" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="所属门店" prop="department">
            <el-select
              class="ws30"
              v-model="ruleForm.orgId"
              value-key="id"
              placeholder="请选择"
              @change="changeCategory"
            >
              <el-option
                v-for="item in ruleForm.orgList"
                :label="item.name"
                :key="item.id"
                :value="item.orgId"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="课程类别" prop="department">
            <el-select
              v-model="ruleForm.courseType"
              value-key="id"
              placeholder="请选择"
              @change="changecourseType"
            >
              <el-option
                v-for="item in ruleForm.courseTypeList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="elrow changesselect">
          <!-- <el-form-item label="授课模式" prop="techername">
                        <el-select
                        size="large"
                        v-model="ruleForm.category"
                        value-key="id"
                        placeholder="请选择"
                        @change="changeCategory"
                        >
                        <el-option
                            v-for="item in ruleForm.categoryList"
                            :label="item.name"
                            :key="item.id"
                            :value="item.id"
                        ></el-option>
                        </el-select>
          </el-form-item>-->
          <el-form-item label="课程状态" prop="department">
            <el-select
              size="large"
              v-model="ruleForm.states"
              value-key="id"
              placeholder="请选择"
              @change="changeCategory"
            >
              <el-option
                v-for="item in ruleForm.stateList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="适合年级" prop="department">
            <el-select
              size="large"
              v-model="ruleForm.grade"
              value-key="id"
              placeholder="请选择"
              @change="changeCategory"
            >
              <el-option
                v-for="item in ruleForm.gradeList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <div class="elrow">
            <div>
              <el-button @click="searchcnt" class="clearpadding" type="primary" plain>筛选</el-button>
            </div>
            <div>
              <el-button class="clearpadding" @click="clearchoose" type="primary" plain>清除筛选条件</el-button>
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <!--管理-->
    <div class="mystyles">
      <el-table
        ref="multipleTable"
        :data="tablelist"
        @cell-mouse-enter="hovertablein"
        @cell-mouse-leave="hovertableout"
        @row-click="tableindex"
        @cell-click= "clickCell"
        header-row-class-name="headerclassname"
        :row-class-name="changetable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="课程名称" >
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.courseName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="课程类型" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <!--<el-popover trigger="hover" placement="top">
                                            <p>姓名: {{ scope.row.name }}</p>
                                            <p>住址: {{ scope.row.address }}</p>
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                            </div>
                            </el-popover>
            -->
            <div>
              <span>{{ scope.row.courseType }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="授课模式" tooltip-effect="dark" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.courseTypeName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="适合年级" tooltip-effect="dark" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.grade }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="开班数" tooltip-effect="dark" :show-overflow-tooltip="true" width="70">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.classNum  }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="关联线上销售" width="110">
          <template slot-scope="scope">
            <div>
              <span class="pathover">{{ scope.row.relatedpersoncount | isSell }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.status | isPayState }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="是否排课">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.iArrangeCourse | isSortCourse }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建人" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.founder }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <div>
              <span>{{ scope.row.cretetime }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="elrow">
              <el-button
                size="mini"
                type="primary"
                :disabled="scope.row.status==2?true:false"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <!-- <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">发布销售</el-button> -->
              <el-button
                size="mini"
                :disabled="scope.row.status==2?true:false"
                :type="scope.row.status==2?'info':'danger'"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="el_pageselect">
        <div>
          <el-button size="medium" @click="btnselectall(tablelist)" type="primary">全选</el-button>
          <el-button size="medium" :disabled="isputawayUp" @click="btnputaway(0)" type="primary">上架</el-button>
          <el-button
            size="medium"
            :disabled="isputawayDown"
            @click="btnputaway(1)"
            type="primary"
          >下架</el-button>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_count"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog
      :title="iscreate==true?'新建课程':'编辑课程'"
      :close-on-click-modal="false"
      custom-class="maxdialogclass"
      class="dialog_box"
      left
      :visible.sync="dialogFormVisible"
    >
      <el-form class="changesselect" :model="form" :rules="rules">
        <div class="column_couse">
          <el-form-item label="课程名称" :label-width="formLabelWidth" prop="courseName">
            <el-input v-model="form.courseName" placeholder="请输入教室名称" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="课程类别" :label-width="formLabelWidth" prop="department">
            <div class="elrow elwith">
              <el-select size="large" v-model="form.courseType" value-key="id" placeholder="请选择">
                <el-option
                  v-for="(item,index) in form.courseTypeList"
                  :label="item.name"
                  :key="index"
                  :value="item.id"
                ></el-option>
              </el-select>
              <!-- <div class='flex1 elm-2 c_red'><span @click="newcourse" class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div> -->
            </div>
          </el-form-item>
        </div>
        <div class="column_couse">
          <!-- <el-form-item label="课程类型" :label-width="formLabelWidth" prop="department">
                            <div class="elrow elwith actives">
                                <el-select :disabled="iscreate?false:true" size='large' v-model="form.category" value-key="id" placeholder="请选择"
                                    @change="newchangeCategory">
                                    <el-option v-for="item in form.categoryList" :label="item.name" :key="item.id" :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
          </el-form-item>-->
          <el-form-item label="课时数量" :label-width="formLabelWidth" :required="true">
            <div class="elrow">
              <el-input
                :disabled="iscreate?false:true"
                type="number"
                v-model.number="form.courseCount"
                placeholder="请输入总课时数量"
                auto-complete="off"
              ></el-input>
              <i class="iconfont icon-help font_red">
                <div class="elerts">相对于“老师”的总课时数</div>
              </i>
            </div>
          </el-form-item>
          <el-form-item label="适合年级" :label-width="formLabelWidth" prop="department">
            <div class="elrow elwith">
              <el-select
                size="large"
                v-model="form.grade"
                value-key="id"
                placeholder="请选择"
                @change="newchangeCategory"
              >
                <el-option
                  v-for="item in form.gradeList"
                  :label="item.name"
                  :key="item.id"
                  :value="item.id"
                ></el-option>
              </el-select>
              <!-- <div class='flex1 elm-2 c_red'><span @click="newcourse" class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div> -->
            </div>
          </el-form-item>
        </div>
        <div class="column_couse">
          <el-form-item label="课时时长" :label-width="formLabelWidth" :required="true">
            <div class="elrow">
              <el-input
                :disabled="iscreate?false:true"
                type="number"
                @blur="sumcourse"
                v-model.number="form.courseTime"
                placeholder="请输入每课时时间"
                auto-complete="off"
              ></el-input>
              <i class="iconfont icon-help font_red">
                <div class="elerts">每节课上课多少分钟？</div>
              </i>
            </div>
          </el-form-item>
          <el-form-item label="每次课时" :label-width="formLabelWidth">
            <div class="elrow">
              <el-input
                :disabled="iscreate?false:true"
                type="number"
                @blur="sumcourse"
                v-model.number="form.Number"
                placeholder="请输入课时数"
                auto-complete="off"
              ></el-input>
              <i class="iconfont icon-help font_red">
                <div class="elerts">相对于‘家长’来一次上多少课时数</div>
              </i>
            </div>
          </el-form-item>
        </div>
        <div class="column_couse">
          <el-form-item label="所属门店" :label-width="formLabelWidth" prop="department">
            <div class="elrow elwith">
              <el-select
                size="large"
                :disabled="iscreate?false:true"
                v-model="form.orgId"
                value-key="id"
                placeholder="请选择"
                @change="newchangeCategory"
              >
                <el-option
                  v-for="(item,index) in form.orgList"
                  :label="item.name"
                  :key="index"
                  :value="item.orgId"
                ></el-option>
              </el-select>
              <div class="flex1 elm-2 c_red">
                <span @click="newcourse(0)" class="elm-1 color">新增门店</span>|
                <span class="elm-1 color" @click="refresh">刷新</span>
              </div>
            </div>
          </el-form-item>
        </div>
        <el-form-item label="课程类型" :label-width="formLabelWidth" prop="galleryful">
          <template>
            <el-radio-group v-model="form.courseTypeId" @change="checkradios">
              <el-radio :label="1">班级</el-radio>
              <el-radio :label="2">一对一</el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
        <el-form-item label="课程次数" :label-width="formLabelWidth">
          <div class="elrow">
            <el-input
              :disabled="true"
              v-model="form.coursesum"
              placeholder="课程总次数"
              auto-complete="off"
            ></el-input>
            <i class="iconfont icon-help font_red">
              <div class="elerts">相对于‘家长’来一次上多少课时数</div>
            </i>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="createroom(false)">取 消</el-button>
        <el-button
          style="background:orange;border:1px solid orange;"
          type="primary"
          @click="createroom(true)"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 请求自定义数据
import {
  addCurriculum,
  getCourseList,
  getSelectRes,
  ideaCurriculum,
  getInfo,
  demo2,
  courseUp,
  courseDown
} from "@/api/demo";
export default {
  name: "curriculum",
  data() {
    return {
      isputawayUp: true,
      isputawayDown: true,
      // 分页
      currentPage4: 1,
      pagesize: 10,
      total_count: 80,
      // 控制
      dialogFormVisible: false,
      iscreate: true, //编辑 or 新建
      formLabelWidth: "120px",
      //表格数据
      tableData: [
        {
          id: 3,
          coursename: "课程名称",
          coursetype: "2",
          galleryful: "2",
          coursemodule: "面授",
          classNum: "20",
          grade: "一年级",
          relatedpersoncount: "是",
          coursestate: "已上线",
          founder: "创建人",
          cretetime: "创建时间",

          courseTypeId: 1 // 课程类型
        }
      ],
      // 当前表格数据
      tablelist: [
        {
          id: 3,
          courseName: "",
          courseType: 0, // 课程类别
          courseTypeList: [
            // 课程类别
          ],
          coursemodule: "", // 授课模式
          classNum: "", // 开班数
          grade: "", // 适合年级
          relatedpersoncount: "", // 关联线上销售
          coursestate: "", // 状态
          founder: "", // 创建人
          cretetime: "", // 创建时间
          coursesum: "", // 课程次数
          Number: "", // 每次课时
          courseTime: "", // 课时时长
          courseCount: "", // 课时数量
          courseTypeId: "" // 课程类型
        }
      ],
      // 筛选
      ruleForm: {
        states: 0, // 课程状态
        stateList: [
          { name: "默认", id: 0 },
          { name: "待开课", id: 1 },
          { name: "已开课", id: 2 },
          { name: "已结课", id: 3 }
        ], // 状态列表
        grade: 0, // 年级
        gradeList: [
          //年级列表
          { name: "请选择", id: 0 },
          { name: "幼儿园小班", id: 1 },
          { name: "幼儿园中班", id: 2 },
          { name: "幼儿园大班", id: 3 },
          { name: "一年级", id: 4 },
          { name: "二年级", id: 5 },
          { name: "三年级", id: 6 }
        ], //年级列表
        courseName: "",
        courseType: 0, // 课程类别
        courseTypeList: [
          // 课程类别
          // { name: '请选择', id: 0 },
          // {name:'小程序',id:1},
          // {name:'移动app',id:2},
          // {name:'h5开发',id:3},
          // {name:'web响应式开发',id:4},
          // {name:'公众号',id:5},
        ],
        orgList: [], // 门店列表
        techername: "",
        orgId: 0,
        orgList: [
          { name: "请选择", orgId: 0 },
          {
            name: "",
            orgId: 1
          },
          {
            name: "传智播客教育中心",
            orgId: 2
          },
          {
            name: "达内教育集团",
            orgId: 3
          }
        ]
      },
      // 对话框
      form: {
        courseName: "",
        coursesum: "", // 课程次数
        Number: "", // 每次课时
        courseTime: "", // 课时时长
        courseCount: "", // 课时数量
        courseTypeId: "", // 课程类型
        courseType: "", // 课程类别
        courseTypeList: [
          // 课程类别
          { name: "请选择", id: 0 },
          { name: "小程序", id: 1 },
          { name: "移动app", id: 2 },
          { name: "h5开发", id: 3 },
          { name: "web响应式开发", id: 4 },
          { name: "公众号", id: 5 }
        ],
        orgId: 0,
        orgList: [
          {
            name: "北大青鸟教育中心",
            orgId: 1
          },
          {
            name: "传智播客教育中心",
            orgId: 2
          },
          {
            name: "达内教育集团",
            orgId: 3
          }
        ],
        grade: 0, // 年级
        gradeList: [
          //年级列表
          { name: "请选择", id: 0 },
          { name: "幼儿园小班", id: 1 },
          { name: "幼儿园中班", id: 2 },
          { name: "幼儿园大班", id: 3 },
          { name: "一年级", id: 4 },
          { name: "二年级", id: 5 },
          { name: "三年级", id: 6 }
        ]
      },
      // 验证
      rules: {
        title: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { max: 50, message: "最多50字" }
        ],
        courseName: [
          { required: true, message: "请输入教室名称", trigger: "blur" }
        ],
        galleryful: [
          { required: true, message: "请输入最大容纳人数", trigger: "blur" }
        ],
        techername: [
          { required: true, message: "请输入教师名称", trigger: "blur" }
        ],
        department: [
          { required: true, message: "请输入所属门店", trigger: "blur" }
        ]
      },

      // table选项框
      tableselectlist: [],
      router_back: false,
      mycontent: "",
      router: ""
    };
  },
  created() {
    var params = {
      name: "杨辉"
    };
    this.selsectdata();
    // getInfo().then(res => {
    //   console.log("demo结果", res);
    // });

    // ideaCurriculum().then(res=>{
    //     console.log('列表结果',res)
    // })
    // demo2().then(res => {
    //   console.log("demo2结果", res);
    // });
  },
  activated() {
    this.selsectdata();
    let params = this.$route.params;
    if (params.hasOwnProperty("isnewcouse")) {
      console.log(params);
      this.dialogFormVisible = params.isnewcouse; // 控制显示弹框
      this.router_back = params.router_back; // 是否返回原页面
      this.mycontent = params.dialog_cnt; // 原内容
    } else {
      console.log("不是新建的");
    }
    if (params.hasOwnProperty("router")) {
      this.router = params.router;
    } else {
      console.log("路由不为空");
    }
  },
  // 局部过滤器的使用
  filters:{
    isPayState:(val)=>{
        if(val && val ==1){
          return '待开课'
        }else if(val && val == 2){
           return '已开课'
        }else if(val && val ==3){
            return '已结课'
        }
    },
    isSortCourse:(val)=>{

        if( val =='true'){
          return '已排课'
        }else if( val == 'false'){
           return '待排课'
        }
    }
  },
  methods: {
    // 点击单元格的部分内容
    clickCell(row, column, cell, event){
      console.log('单元格',row,column);
      if(column.label == "关联线上销售" && row.relatedpersoncount =='待售' && row.iArrangeCourse == 'true' ){
          // 跳转到线下销售
          this.$router.push({
            path:'goods_setup',
            query:{courseId:row.id}
          })
      }else{

      }
    },
    lieave() {
      if (this.form.courseName.trim() !== "") {
        // this.rules.classname[0].required=false;
      } else {
        // this.rules.classname[0].required=true;
      }
    },
    refresh() {
      this.selsectdata();
    },
    //查询教室
    selsectdata(myparams) {
      if (myparams == undefined) {
        myparams = "";
      }
      getCourseList(myparams).then(res => {
        console.log("info", res.result);
        if (res.errorCode == 0 && res.result !== undefined) {
          // 所属课程类别 赋值
          var puts = res.result;
          puts.courseSubject.unshift({ name: "请选择", id: 0 });
          puts.orgList.unshift({
            alias: "测试测试",
            logo: null,
            name: "请选择",
            orgId: 0,
            tel: null,
            type: 0
          });

          this.form.courseTypeList = puts.courseSubject;
          this.ruleForm.courseTypeList = puts.courseSubject;
          // 所属机构 赋值
          this.form.orgList = puts.orgList;
          this.ruleForm.orgList = puts.orgList;
          // 列表渲染

          let arr = JSON.parse(JSON.stringify(puts.list));
          let tableDatas = [];
          let gradeList = this.ruleForm.gradeList;
          // console.log(gradeList);
          arr.map(item => {
            let obj = {};
            obj.cretetime =
              item.addTime.split(" ")[0] +
              " " +
              item.addTime
                .split(" ")[1]
                .split(":")
                .splice(0, 2)
                .join(":"); // 创建时间
            obj.founder = item.addByStr; // 创建人
            obj.coursestate = item.statusName; // 状态
            obj.status = item.status;
            obj.grade = gradeList.find(i => item.grade === i.id).name; // 班级
            obj.courseName = item.name; // 姓名
            obj.classNum = item.classNum; // 班级数
            obj.courseTypeId = item.courseType; // 课程类别
            obj.courseTypeName = item.courseTypeName; // 课程类型
            obj.id = item.id;
            obj.iArrangeCourse = item.iArrangeCourse; // 是否排课
            obj.courseType = item.courseSubjectName; // 课程类别
            obj.courseTypeList = res.result.courseSubject;
            obj.relatedpersoncount = item.ishelf; //线上状态
            obj.coursesum = item.num; // 次数
            obj.Number = item.onceTime; // 每次课
            obj.courseTime = item.lessonTime; //
            obj.courseCount = item.lessonNum;
            obj.orgName = item.orgName;
            obj.orgId = item.orgId;
            obj.orgList = res.result.orgList;
            (obj.gradeList = [
              //年级列表
              { name: "幼儿园小班", id: 1 },
              { name: "幼儿园中班", id: 2 },
              { name: "幼儿园大班", id: 3 },
              { name: "一年级", id: 4 },
              { name: "二年级", id: 5 },
              { name: "三年级", id: 6 }
            ]),
              tableDatas.push(obj);
          });
          this.tableData = JSON.parse(JSON.stringify(tableDatas));
          this.tablelist = this.pagination(
            this.currentPage4,
            this.pagesize,
            tableDatas
          );
          // 总长度
          this.total_count = this.tableData.length;
        } else {
          this.$message("暂无数据");
        }
      });
    },
    // 清楚筛选条件;
    clearchoose() {
      this.ruleForm.courseName = "";
      this.ruleForm.courseType = 0;
      this.ruleForm.grade = 0;
      this.ruleForm.states = 0;
      this.ruleForm.orgId = 0;
    },
    //创建教室 // 编辑教室
    createroom(states) {
      if (!states) {
        console.log("取消");
        this.form.courseName = "";
        this.form.coursesum = "";
        this.form.courseTime = "";
        this.form.orgId = "";
        this.form.Number = "";
        this.form.courseCount = "";
        this.dialogFormVisible = false;
        return;
      }
      console.log("保存信息", this.form);
      // 过滤信息
      let {
        courseName,
        courseTypeId,
        courseType,
        coursesum,
        courseTime,
        grade,
        id,
        orgId,
        Number,
        courseCount
      } = this.form;
      if (courseName == undefined || courseName == "") {
        return this.$message({ type: "warning", message: "请输入课程名称" });
      }
      if (courseType == undefined || courseType == "") {
        return this.$message({ type: "warning", message: "请选择课程类别" });
      }
      if (courseTypeId == undefined || courseTypeId == "") {
        return this.$message({ type: "warning", message: "请选择课程类型" });
      }
      if (coursesum == undefined || coursesum == "") {
        return this.$message({ type: "warning", message: "请输入课程总次数" });
      }
      if (courseTime == undefined || courseTime == "") {
        return this.$message({
          type: "warning",
          message: "请输入每课时的时间"
        });
      }
      if (grade == undefined || grade == "") {
        return this.$message({ type: "warning", message: "请输入适合班级" });
      }
      if (orgId == undefined || orgId == "") {
        return this.$message({ type: "warning", message: "请选择所属机构" });
      }
      if (Number == undefined || Number == "") {
        return this.$message({
          type: "warning",
          message: "请输入每次课的课时数"
        });
      }
      if (courseCount == undefined || courseCount == "") {
        return this.$message({ type: "warning", message: "请输入总课时数量" });
      }

      if (this.iscreate) {
        // private int id;
        // private String name;
        // private String descr;
        // private Integer orgId;
        // private Integer courseSubjectId;
        // private Integer courseType;
        // private Integer grade;

        // private Integer lessonNum;
        // private String lessonTime;
        // private String onceTime;
        // private Integer num;

        // private Long addBy;
        // private String addByStr;
        // private Long updateBy;
        // private String updateByStr;
        let params = {
          name: courseName,
          courseSubjectId: courseType,
          num: coursesum,
          lessonTime: courseTime,
          grade,
          orgId,
          onceTime: Number,
          lessonNum: courseCount,
          courseType: courseTypeId
        };
        console.log("添加参数", params);
        this.$axios({
          method: "post",
          url: `/store/course/addCourse`,
          data: params,
          headers: {
            Authorization: sessionStorage.getItem("Authorization")
          }
        })
          .then(res => {
            if (res.data.errorCode == 0) {
              this.selsectdata();
              console.log("info", res.data);
              this.dialogFormVisible = false;
              this.$message({type:'success',message:"创建课程成功"});
              if (this.router_back) {
                this.$message({type:'success',message:"创建课程成功,即将返回"});
                let route = this.router;
                let params = {
                  mycontent: this.mycontent, // 带着内容
                  isnewcouse: true, // 是否打开新建框
                  router_back: false // 是否返回
                };
                let times = null;
                clearTimeout(times);
                times = setTimeout(() => {
                  this.$router.push({
                    name: route.from,
                    params
                  });
                }, 500);
              } else {
                this.$message({type:'success',message:"创建课程成功"});
                this.selsectdata();
              }
              // 赋值为空
              this.form.courseName = "";
              this.form.coursesum = "";
              this.form.courseTime = "";
              this.form.orgId = "";
              this.form.Number = "";
              this.form.courseCount = "";
            }
          })
          .catch(err => {
            this.$message("请求失败");
          });
      } else {
        let params = {
          name: courseName,
          courseSubjectId: courseType,
          num: coursesum,
          lessonTime: courseTime,
          grade,
          orgId,
          id,
          onceTime: Number,
          lessonNum: courseCount,
          courseType: courseTypeId
        };
        console.log("编辑参数", params);
        this.$axios({
          method: "put",
          url: `/store/course/updateCourse`,
          data: params,
          headers: {
            Authorization: sessionStorage.getItem("Authorization")
          }
        })
          .then(res => {
            if (res.data.errorCode == 0) {
              this.selsectdata();
              console.log("info", res.data);
              this.dialogFormVisible = false;
              this.$message("编辑教室成功");
              // 赋值为空
              this.form.courseName = "";
              this.form.coursesum = "";
              this.form.courseTime = "";
              this.form.orgId = "";
              this.form.Number = "";
              this.form.courseCount = "";
            } else {
              this.$message("请求失败");
            }
          })
          .catch(err => {});
      }
    },

    //  删除
    handleDelete(index, row) {
      console.log(index, row);
      var id = row.id;
      console.log("删除的id", id);
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$axios({
          method: "delete",
          url: `/store/course/delCourse/${id}`,
          data: JSON.stringify({ id }),
          headers: {
            Authorization: sessionStorage.getItem("Authorization")
          }
        })
          .then(res => {
            if (res.data.errorCode == 0) {
              this.selsectdata();
              console.log("info", res.data);
              this.$message("删除教室成功");
            } else {
              this.$message("请求失败");
            }
          })
          .catch(err => {});
      });
    },

    // 切换下拉选项
    changeCategory(e) {
      console.log(e);
    },
    // 搜索
    searchcnt() {
      var data = JSON.parse(JSON.stringify(this.ruleForm));
      console.log("搜索内容", data);
      let { courseName, courseType, grade, states, orgId } = data;

      if (courseName == null || courseName == undefined) {
        courseName = "";
      }
      if (courseType == null || courseType == undefined) {
        courseType = 0;
      }
      let params = {
        courseName,
        courseSubject: courseType,
        grade,
        status: states,
        orgId
      };
      console.log("搜索参数", params);
      this.selsectdata(params);
      // getCourseList(params).then(res=>{
      //   console.log(res)
      // })
      // this.$axios({
      //     method: "get",
      //     url: `/store/room/getRoomList?orgId=${orgId}&name=${techername}`,
      //     data: params,
      //     headers: {
      //         Authorization: sessionStorage.getItem("Authorization")
      //     }
      // }).then(res => {
      //     console.log('info', res.data);
      //     if (res.data.errorCode == 0) {
      //         let arr = res.data.result;
      //         if (arr) {
      //             arr.map(item => {
      //                 item.addTime = item.addTime.split(' ')[0];
      //             })
      //             for (let i = 0; i < 100; i++) {
      //                 arr.push(arr[i])
      //             }
      //             this.tableData = JSON.parse(JSON.stringify(arr))
      //             this.tablelist = this.pagination(this.currentPage4, this.pagesize, arr);
      //             this.total_count = arr.length;
      //         } else {
      //             return this.$message('没有该门店')
      //         }

      //     } else {
      //         this.$message('暂无数据');
      //     }

      // })
    },
    changecourseType(e) {
      console.log(e);
    },
    // 单选
    checkradios(e) {
      console.log("单选为", e);
      this.form.courseTypeId = e;
    },
    // 改变表格
    changetable(e) {
      // console.log('高亮显示',e);
      if (e.rowIndex % 2 == 0) {
        if(e.row.iArrangeCourse == 'true'){
          return "table_import";
        }else{
           return "table_borders";
        }
      } else {
         if(e.row.iArrangeCourse == 'true'){
          return "table_import";
        }else{
           return "table_border";
        }
       
      }
    },
    // 计算
    sumcourse() {
      console.log("失去焦点");
      // coursesum:'',   // 课程次数
      //     Number:'',      // 每次课时
      //     courseTime:'',  // 课时时长
      //     courseCount:'', // 课时数量
      if (this.form.courseCount == "") {
        return this.$message({ type: "error", message: "请输入课时数量" });
      } else if (this.form.Number == "") {
        return this.$message({ type: "error", message: "请输入每次课时" });
      } else {
        this.form.coursesum = Math.floor(
          this.form.courseCount / this.form.Number
        );
      }
    },
    // 新建其他
    newcourse(i) {
      // 跳转
      if (i === 0) {
        this.$router.push({
          name: "register",
          params: ""
        });
      }
    },
    hovertablein(row, column, cell, event) {
      // console.log(row, column, cell, event)
    },
    hovertableout(row, column, cell, event) {
      // console.log(row, column, cell, event)
    },
    // 新建课程
    btnnewclass() {
      this.dialogFormVisible = true;
      this.iscreate = true;
    },
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
      let arr = JSON.parse(JSON.stringify(this.tablelist));
      if (arr) {
        // 打开新建框
        this.dialogFormVisible = true;
        this.iscreate = false; //编辑教室
        // 赋值
        this.form = arr[index];
        console.log("编辑", this.form);
      }
    },
    // 每页显示几天数据
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      var a = JSON.parse(JSON.stringify(this.tableData));
      this.tablelist = this.pagination(this.currentPage4, this.pagesize, a);
    },
    // 当前第几页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      var a = JSON.parse(JSON.stringify(this.tableData));
      var b = this.pagination(this.currentPage4, this.pagesize, a);
      console.log(b);
      this.tablelist = b;
    },
    // 计算分页
    pagination(pageNo, pageSize, array) {
      // console.log(pageNo, pageSize, array);
      var offset = (pageNo - 1) * pageSize;
      return offset + pageSize >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + pageSize);
    },
    // 点击哪一行
    tableindex(row, e) {
      console.log(e);
      // this.tb_idnex=e.index;
    },
    // 选择教师名称
    changeCategory(e) {},
    // 下拉选择内容
    newchangeCategory(e) {},
    // table单选框
    handleSelectionChange(e) {
      console.log("勾选", e);
      this.tableselectlist = e;
      if (this.tableselectlist.length == 0) {
        this.isputawayUp = true;
        this.isputawayDown = true;
      } else {
        this.isputawayUp = false;
        this.isputawayDown = false;
      }
    },
    // 全选
    btnselectall(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 上架/下架
    btnputaway(a) {
      if (this.tableselectlist.length == 0) {
        this.isputawayUp = true;
        this.isputawayDown = true;
      } else {
        this.isputawayUp = false;
        this.isputawayDown = false;
      }
      let arr = this.tableselectlist;
      if (a == 0) {
        let arrs = [];
        let sta = arr.filter(item => item.status == 1);
        console.log("有几个呢", sta);
        if (sta.length == 0) {
          this.isputaway = true;
          this.$message({ type: "warning", message: "该产品已经上架" });
          return;
        }
        sta.map(item => {
          if (item.id) arrs.push(item.id);
        });
        var params = { ids: arrs };
        courseUp(params).then(res => {
          if (res.errorCode == 0) {
            this.selsectdata();
            this.$message({ type: "success", message: "上架成功" });
          } else {
            this.$message({ type: "warning", message: "上架失败" });
          }
        });
        // this.isputaway=true
      } else if (a == 1) {
        let arrs = [];
        let sta = arr.filter(item => item.status == 2);
        console.log("有几个呢", sta);
        if (sta.length == 0) {
          (this.isputawayDown = true),
            this.$message({ type: "warning", message: "该产品已经下架" });
          return;
        }
        sta.map(item => {
          if (item.id) arrs.push(item.id);
        });
        var params = { ids: arrs };
        courseDown(params).then(res => {
          if (res.errorCode == 0) {
            (this.isputawayDown = true), this.selsectdata();
            this.$message({ type: "success", message: "下架成功" });
          } else {
            this.$message({ type: "warning", message: "下架失败" });
          }
        });
      }
    }
  }
};
</script>