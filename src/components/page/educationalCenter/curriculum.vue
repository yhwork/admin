<style>
        .elrow{
            display:flex;
            flex-flow:nowrap row;
        }
        .elmt-2{
            margin-top:2rem;
        }
    .color {
        cursor: pointer;
        color: #409EFF;
        font-size: 0.78rem;
    }
        .elm-1{
            margin:0 2px;
        }
        .elm-2{
            margin:0 1rem;
        }
        .elwith{
            width: 100%;
            max-width: 100%;
        }
        .table_border{
            border-bottom:1px solid rgba(0,0,0,.5);
        }
        .el_pageselect{
            padding:1rem 1rem 0 1rem;
            display: flex;
            justify-content: space-between;
        }
        .bd{
            border: 1px solid red;
        }
        .flex2{
            flex:2;
        }
        .flex3{
            flex:3;
        }
        .flex1{
            flex:1;
        }
        .flex4{
            flex:4;
        }
        .flex5{
            flex:5;
        }
        .ws10 input{
            padding:0 60px;
            margin-right:5px;
        }
        .ws30 input{
            padding:0 80px;
            margin-right:5px;
        }
        .ws20 input{
           padding:0 70px;
            margin-right:5px;
        }
        .ws40 input{
             padding:0 100px;
            margin-right:5px;
        }
        .w70 input{
            width:70%;
            margin-right:5px;
        }
        .w80 input{
            width:80%;
            margin-right:5px;
        }
        .w90 input{
            width:90%;
            margin-right:5px;
        }
        /* element UI css updata*/
        .el-select .el-select--large{
            width:100%;
        }
        .c_red{
            color:orange;
        }
        .selectclass input{
            width:100%
        }
        .clearselectall{
            font-size:0.6rem;
            color:#409EFF;
            height:40px;
            line-height:35px;
            margin-left:15px;
        }
        .clearpadding{
            margin-top:2px;
            padding:8px 12px !important;
            margin-left:15px;
        }
        .maxdialogclass{
            min-width: 750px;
        }
        .mystyles{
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 10px;
            margin: 5px 2px;
            padding: 15px 10px;
        }
        .column_couse{
            display: flex;
            flex-flow: row nowrap;
            /* border: 1px solid red; */
            /* justify-content: center; */
            align-items: center;
        }
        .actives input{
            width:200px !important
        }
        .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color:#A0C6F0 !important;
        }
        .table_borders{
            border-bottom: 1px solid rgba(0, 0, 0, .5);
            background-color:#CAE1FF !important;
        }
        /* .coursdata{
            width:100px;
            min-width: 100px;

        } */
        /* .curricu td{
            width: auto !important;
        } */
</style>
<template>
<!--  课程  -->
    <div class="content_box1">
        <!-- 筛选 -->
        <div class="mystyles">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <div><el-button size='medium' @click="btnnewclass" type="primary">新建课程</el-button></div>
                <div class='elrow elmt-2 selectclass'>
                   
                    <el-form-item label="课程名称" prop="techername">
                        <!-- <el-select
                        class="ws20"
                        v-model="ruleForm.couseName"
                        value-key="id"
                        placeholder="请选择"
                        @change="changeCategory"
                        >
                        <el-option
                            v-for="item in ruleForm.couseList"
                            :label="item.name"
                            :key="item.id"
                            :value="item.id"
                        ></el-option>
                        </el-select> -->
                         <el-input v-model="form.courseName" placeholder="请输入课程名称" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="所属门店" prop="department">
                        <el-select
                         class="ws30"
                        v-model="ruleForm.orgName"
                        value-key="id"
                        placeholder="请选择"
                        @change="changeCategory"
                        >
                        <el-option
                            v-for="item in ruleForm.orgList"
                            :label="item.name"
                            :key="item.id"
                            :value="item.id"
                        ></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="课程类型" prop="department">
                        <el-select
                        v-model="ruleForm.couseType"
                        value-key="id"
                        placeholder="请选择"
                        @change="changeCategory"
                        >
                        <el-option
                            v-for="item in ruleForm.subject"
                            :label="item.name"
                            :key="item.id"
                            :value="item.id"
                        ></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class='elrow changesselect'>
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
                    </el-form-item> -->
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
                      <div><el-button class="clearpadding" type="primary"  plain>筛选</el-button></div>
                      <div><el-button class="clearpadding" type="primary"  plain>清除筛选条件</el-button></div>
                    </div>
                </div>
            </el-form>
        </div>
            <!--管理-->
        <div class="mystyles">
            <el-table ref='multipleTable' :data="tablelist"  @cell-mouse-enter="hovertablein"
                    @cell-mouse-leave="hovertableout" @row-click='tableindex' header-row-class-name="headerclassname"
                    :row-class-name="changetable"  @selection-change="handleSelectionChange"> 
                <el-table-column
                    type="selection"
                   >
                    </el-table-column>
                <el-table-column   label="课程名称" :show-overflow-tooltip="true" width="100" >
                    <template slot-scope="scope">
                        <!-- <i class="el-icon-time"></i> -->
                        <!--  <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                        <div>
                            <span >{{ scope.row.coursename }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column  label="课程类型" :show-overflow-tooltip="true" width="80" >
                    <template slot-scope="scope">
                        <!--<el-popover trigger="hover" placement="top">
                                            <p>姓名: {{ scope.row.name }}</p>
                                            <p>住址: {{ scope.row.address }}</p>
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                            </div>
                            </el-popover>
                        -->
                        <div >
                            <span >{{ scope.row.coursetype }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="授课模式" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.coursemodule }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="适合年级" :show-overflow-tooltip="true" >
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.scopegrade }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="开班数" :show-overflow-tooltip="true" width="70">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.begclassnum }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="关联线上销售" width="110">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.relatedpersoncount }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.coursestate }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="创建人" :show-overflow-tooltip="true" width="80">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.founder }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="创建时间">
                    <template slot-scope="scope">
                        <div>
                            <span >{{ scope.row.cretetime }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <div class="elrow">
                            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <!-- <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">发布销售</el-button> -->
                           <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <div class="el_pageselect">
                    <div>
                        <el-button size='medium' @click="btnselectall(tablelist)" type="primary">全选</el-button>
                        <el-button size='medium' :disabled="isputaway" @click="btnputaway(0)" type="primary">上架</el-button>
                        <el-button size='medium' :disabled="isputaway" @click="btnputaway(1)" type="primary">下架</el-button>
                    </div>
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize"
                            layout="total, sizes, prev, pager, next, jumper" :total="total_count">
                        </el-pagination>
                    </div>
            </div>
        </div>
            <!-- 弹框 -->
            <el-dialog :title="iscreate==true?'新建课程':'编辑课程'" :close-on-click-modal='false'  custom-class='maxdialogclass' class="dialog_box" left :visible.sync="dialogFormVisible">
                <el-form class="changesselect" :model="form" :rules="rules">
                    <div class="column_couse">
                        <el-form-item label="课程名称" :label-width="formLabelWidth" prop="classname">
                            <el-input v-model="form.courseName" placeholder="请输入教室名称" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="课程类别" :label-width="formLabelWidth" prop="department">
                            <div class="elrow elwith">
                                <el-select size='large' v-model="form.courseType" value-key="id" placeholder="请选择"
                                    @change="newchangeCategory">
                                    <el-option v-for="item in form.courseTypeList" :label="item.courseTypeName" :key="item.id" :value="item.courseTypeId">
                                    </el-option>
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
                        </el-form-item> -->
                        <el-form-item label="课时数量" :label-width="formLabelWidth" >
                                    <el-input :disabled="iscreate?false:true" type="number" v-model.number="form.courseCount" placeholder="请输入总课时数量" auto-complete="off"></el-input>
                                </el-form-item>
                        <el-form-item label="适合年级" :label-width="formLabelWidth" prop="department">
                                <div class="elrow elwith">
                                    <el-select size='large' v-model="form.grade" value-key="id" placeholder="请选择"
                                        @change="newchangeCategory">
                                        <el-option v-for="item in form.gradeList" :label="item.name" :key="item.id" :value="item.id">
                                        </el-option>
                                    </el-select>
                                    <!-- <div class='flex1 elm-2 c_red'><span @click="newcourse" class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div> -->
                                </div>
                            </el-form-item>
                             
                    </div>
                    <div class="column_couse">
                               
                                <el-form-item label="课时时长" :label-width="formLabelWidth" >
                                    <el-input  :disabled="iscreate?false:true" v-model="form.courseTime" placeholder="请输入每课时时间" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="每次课时" :label-width="formLabelWidth" >
                                <el-input :disabled="iscreate?false:true" type="number" @blur="sumcourse" v-model.number="form.Number" placeholder="请输入课时数" auto-complete="off"></el-input>
                            </el-form-item>
                    </div>
                    <div class="column_couse">
                            <el-form-item label="所属门店" :label-width="formLabelWidth" prop="department">
                        <div class="elrow elwith">
                            <el-select size='large' :disabled="iscreate?false:true" v-model="form.category" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="(item,index) in form.orgList" :label="item.orgName" :key="index" :value="item.orgId">
                                </el-option>
                            </el-select>
                            <div class='flex1 elm-2 c_red'><span @click="newcourse(0)" class='elm-1 color'>新增门店</span>|<span
                                    class="elm-1 color">刷新</span></div>
                        </div>
                    </el-form-item>
                           
                    </div>
                    <el-form-item label="课程类型" :label-width="formLabelWidth" prop="galleryful">
                        <template>
                            <el-radio-group v-model="form.courseTypes">
                                <el-radio :label="3">班级</el-radio>
                                <el-radio :label="6">一对一</el-radio>
                            </el-radio-group>
                        </template>
                    </el-form-item>
                     <el-form-item label="课程次数" :label-width="formLabelWidth" >
                                <el-input :disabled="true" v-model="form.coursesum" placeholder="课程总次数" auto-complete="off"></el-input>
                            </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button style="background:orange;border:1px solid orange;" type="primary" @click="createroom">
                        确 定</el-button>
                </div>
            </el-dialog>
    </div>
</template>
<script>
export default {
    name:'curriculum',
    data() {
        return {
            isputaway:true,
            // 分页
            currentPage4:1,
            pagesize:10,
            total_count:80,
            // 控制
            dialogFormVisible:false,
            iscreate:true,  //编辑 or 新建
            formLabelWidth:'120px',
            //表格数据
            tableData:[   
                // {
                //     id:1,
                //     coursename:'课程名称',
                //     coursetype:'授课类型',
                //     galleryful:'容纳人数',
                //     coursemodule:'授课模式',
                //     begclassnum:'开班数',
                //     scopegrade:'适合年级',
                //     relatedpersoncount:'关联线上人数',
                //     coursestate:'状态',
                //     founder:"创建人",
                //     cretetime:'创建时间'
                // },
                // {
                //     id:2,
                //     coursename:'课程名称',
                //     coursetype:'授课类型',
                //     galleryful:'容纳人数',
                //     coursemodule:'授课模式',
                //     begclassnum:'开班数',
                //     scopegrade:'适合年级',
                //     relatedpersoncount:'关联线上人数',
                //     coursestate:'状态',
                //     founder:"创建人",
                //     cretetime:'创建时间'
                // },
                {
                    id:3,
                    coursename:'课程名称',
                    coursetype:'2',
                    galleryful:'2',
                    coursemodule:'面授',
                    begclassnum:'20',
                    scopegrade:'一年级',
                    relatedpersoncount:'是',
                    coursestate:'已上线',
                    founder:"创建人",
                    cretetime:'创建时间'
                },
            ],
            // 当前表格数据
            tablelist:[{
                    id:3,
                    coursename:'课程名称',
                    coursetype:'2',
                    galleryful:'2',
                    coursemodule:'面授',
                    begclassnum:'20',
                    scopegrade:'一年级',
                    relatedpersoncount:'是',
                    coursestate:'已上线',
                    founder:"创建人",
                    cretetime:'创建时间'
                },],
            // 筛选
            ruleForm:{
                states:'',
                stateList:[
                    {name:'待开课',id:'1'},
                    {name:'已开课',id:'2'},
                    {name:'已结课',id:'3'}
                ], // 状态列表
                grade:'',     
                gradeList:[
                    {name:'幼儿园小班',id:'1'},
                    {name:'幼儿园中班',id:'2'},
                    {name:'幼儿园大班',id:'3'},
                    {name:'一年级',id:'4'},
                    {name:'二年级',id:'5'},
                    {name:'三年级',id:'6'},
                ], //年级列表
                couseName:'课程名称',
                couseList:[], // 课程列表
                couseType:'课程类型',
                orgName:'门店名称',
                orgList:[],   // 门店列表
                techername:'教师名称',
                department:'所属门店',
                categoryList:[],
            }, 
            // 对话框
            form: {
                courseName: "",  
                courseType:'',
                courseTypeId:'',
                courseTypeName:'',
                courseTypeList:[
                    
                ],  // 课程类别
                // 多选框
                courseTypes:3,
                gradeList:[
                    {name:'幼儿园小班',id:1},
                    {name:'幼儿园中班',id:2},
                    {name:'幼儿园大班',id:3},
                    {name:'一年级',id:4},
                    {name:'二年级',id:5},
                    {name:'三年级',id:6},
                ], //年级列表
                grade:2,
                coursesum:'',       // 课程次数
                Number:'',          // 每次课时
                courseTime:'',      // 课时时长
                courseCount:'',     // 课时数量
            },
            // 验证
            rules: {
                title: [
                    { required: true, message: "请输入产品名称", trigger: "blur" },
                    { max: 50, message: "最多50字" }
                ],
                classname:[{required: true, message: "请输入教室名称", trigger: "blur"}],
                galleryful:[{required: true, message: "请输入最大容纳人数", trigger: "blur"}],
                techername:[{ required: true, message: "请输入教师名称", trigger: "blur" }],
                department:[{required: true, message: "请输入所属门店", trigger: "blur" }]
            },
            // table选项框
            tableselectlist:[
            ],
        }
    },
    created() {
      
    },
    mounted() {
        if (window.history && window.history.pushState) {
            // 向历史记录中插入了当前页
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', this.goBack, false);
        }
    },
    destroyed () {
        window.removeEventListener('popstate', this.goBack, false);
    },
    activated(){
    // this.selsectdata();
        var isNo = this.$route.params;
            console.log('aaaaa',isNo)
            if(isNo.hasOwnProperty('isnewcouse')){
                    this.dialogFormVisible=isNo.isnewcouse;
            }
        },
    methods: {
        // 
        goBack () {
            console.log("点击了浏览器的返回按钮");
            sessionStorage.clear();
            window.history.back();
             // console.log("点击了浏览器的返回按钮");
            //  history.pushState(null, null, document.URL);
        },

        //查询教室
        selsectdata(){
                this.$axios({
                    method: "get",
                    url: `/store//room/getRoomList`,
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res=>{
                    console.log('info',res.data);
                    if(res.data.errorCode == 0){
                       let arr =res.data.result;
                       if(arr){
                            arr.map(item=>{
                                item.addTime =item.addTime.split(' ')[0];
                            })
                        for(let i=0;i<100;i++){
    
                            arr.push(arr[i])
                        }
                        this.tableData= JSON.parse(JSON.stringify(arr))
                         this.tablelist=this.pagination(this.currentPage4,this.pagesize,arr);
                        this.total_count = arr.length;
                       }    
                      
                    }else{
                        this.$message('暂无数据');
                    }

                })
        },
        //创建教室 // 编辑教室
        createroom() {  
                console.log('保存信息',this.form)
                var {orgId,name,num,id} = this.form;
                console.log(orgId,name,num,id)
                if(this.iscreate){
                    if( orgId=="" || orgId==undefined || name==""|| name==undefined || num=="" || num==undefined ){
                        return this.$message('请填写完整信息')
                    }
                    this.$axios({
                        method: "post",
                        url: `/store/room/addRoom?orgId=${orgId}&name=${name}&num=${num}`,
                        data:this.form,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res.data)
                            this.dialogFormVisible = false;

                            this.$message('创建教室成功');
                            this.form.name="";
                            this.form.sum="";
                            this.from.orgId="";         
                        }
                    }).catch(err => {
                        this.$message('请求失败')
                    })
                }else{
                    this.$axios({
                        method: "put",
                        url: `/store/room/updateRoom`,
                        data:this.form,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                            if (res.data.errorCode == 0) {
                                 this.selsectdata()
                                console.log('info', res.data)
                                this.dialogFormVisible = false
                                this.$message('编辑教室成功');
                                this.form.name="";
                                this.form.sum="";
                                this.from.orgId="";
                                 
                            }else{
                                this.$message('请求失败')
                            }
                        }).catch(err => {
                            
                        })
                }
        },
        //  删除
        handleDelete(index, row) {
            console.log(index, row);
            var id = row.id;
            this.$axios({
                    method: "delete",
                    url: `/store/room/deleteRoom/${id}`,
                    data:JSON.stringify({id}),
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res => {
                        if (res.data.errorCode == 0) {
                                this.selsectdata()
                            console.log('info', res.data)
                            this.$message('删除教室成功');
                    }else{
                        this.$message('请求失败')
                    }
                }).catch(err => {
                    
                })
            
        },
        // 切换下拉选项
        changeCategory(e){
            console.log(e)
        },
        // 改变表格
        changetable(e){
            // console.log(e);
                if(e.rowIndex%2 == 0){
                    return  "table_borders"
                    
                }else{
                    return "table_border"
                }
        },
        // 计算
        sumcourse(){
            console.log('失去焦点')
            // coursesum:'',   // 课程次数
            //     Number:'',      // 每次课时
            //     courseTime:'',  // 课时时长
            //     courseCount:'', // 课时数量
            if(this.form.courseCount =='' ){
                return this.$message({type:'error',message:'请输入课时数量'})
            }else if(this.form.Number == ""){
                return this.$message({type:'error',message:'请输入每次课时'})
            }else{
              this.form.coursesum =Math.floor(this.form.courseCount / this.form.Number)
            }
        },
        // 新建其他
        newcourse(i){
            // 跳转
            if(i===0){
                this.$router.push({
                    name: 'register',
                    params:''
                })
            }
            
        },
        hovertablein(row, column, cell, event){
            // console.log(row, column, cell, event)
        },
        hovertableout(row, column, cell, event){
            // console.log(row, column, cell, event)
        },
        // 新建课程
        btnnewclass(){
            this.dialogFormVisible=true;
            this.iscreate = true 
        },
        // 编辑
        handleEdit(index, row) {
            console.log(index, row);
            // let arr = JSON.parse(JSON.stringify( this.tablelist));
            // if(arr){
            //     // 打开新建框
                this.dialogFormVisible = true;
                this.iscreate=false   //编辑教室
            //     // 赋值
            // this.form=arr[index];
            // console.log('编辑',this.form)
            // }
        },
        // 每页显示几天数据
        handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagesize=val;
                // this.tablelist =this.tableData.slice(0,this.pagesize)
                  this.tablelist=this.pagination(this.currentPage4,this.pagesize,this.tableData);
            },
        // 当前第几页
        handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage4=val;
                var a=JSON.parse(JSON.stringify(this.tableData))
                var  b=this.pagination(this.currentPage4,this.pagesize,a);
                console.log(b)
                 this.tablelist=b;
            },
        // 计算分页
        pagination(pageNo, pageSize, array) {
                console.log(pageNo,pageSize,array)
                var offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
        },
        // 点击哪一行
        tableindex(row,e){
            console.log(e)
            // this.tb_idnex=e.index;
        },
        //  复制
        handleDelete(index, row) {
            console.log(index, row);
        },
        // 选择教师名称
        changeCategory(e){

        },
        // 下拉选择内容
        newchangeCategory(e){

        },
        // table单选框
        handleSelectionChange(e){
            // console.log('多选',e)
            this.tableselectlist=e;
            if(this.tableselectlist.length==0){
                this.isputaway=true
            }else{
                this.isputaway=false
            }
        },
        // 全选
        btnselectall(rows){
            if (rows) {
                rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        // 上架/下架
        btnputaway(a){
            if(this.tableselectlist.length==0){
                this.isputaway=true
            }else{
                this.isputaway=false
            }
            if(a== 0){
                // this.isputaway=true
            }else if(a==1){
                // this.isputaway=false
            }
        }
    },
}
</script>