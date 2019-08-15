<style lang='scss'>
    .elrow {
        display: flex;
        flex-flow: nowrap row;
    }

    .elmt-2 {
        margin-top: 2rem;
    }

    .c_red {
        color: orange;
    }

    .color {
        cursor: pointer;
        color: #409EFF;
        font-size: 0.78rem;
    }

    .elm-2 {
        margin: 0 1rem;
    }

    .elm-1 {
        margin: 0 2px;
    }

    .clearselectall {
        font-size: 0.6rem;
        color: #409EFF;
        height: 40px;
        line-height: 35px;
        margin-left: 15px;
    }

    .searchcnt {
        margin-left: 2rem;
    }

    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
    }

    .dialog_box .el-input {
        width: auto;
    }

    .dialogclass {
        min-width: 550px;
    }

    .el_paginations{
        padding:1rem 1rem 0 1rem;
        display: flex;
        justify-content: flex-end;
    }

    .mystyles {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 10px;
        margin: 5px 2px;
        padding: 15px 10px;
    }

    .el-table--enable-row-hover .el-table__body tr:hover>td {

        background-color: #CBD1D8 !important;
    }

    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #A0C6F0 !important;
    }

    .table_borders {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #CAE1FF !important;
    }

    .headerclassname {
        border: 1px solid #ccc !important;
        color: darkslategrey;
        background-color: #ccc !important
    }

    .clearpadding {
        margin-top: 2px;
        padding: 8px 12px !important;
        margin-left: 15px;
    }
</style>

<template>
    <!--班级-->
    <div>
        <div class="content_box1">
            <!---->
            <!-- 弹框 -->
            <el-dialog custom-class='dialogclass' :close-on-click-modal='false' :title="iscreate==true?'创建班级':'编辑班级'"
                class="dialog_box" left :visible.sync="dialogFormVisible">
                <el-form :model="form" :rules="rules">
                    <el-form-item label="命名规则" :label-width="formLabelWidth" >
                        <el-radio-group :disabled='true' v-model="checkList" @change='changeradio'>
                            <el-radio :label="3">自定义命名</el-radio>
                            <el-radio :label="6">规则命名</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="班级名称" :label-width="formLabelWidth" prop="className">
                        <div v-if="isclassname">
                            <el-input v-model="form.className" placeholder="请输入班级名称" auto-complete="off"></el-input>
                        </div>
                        <!-- 分开写 -->
                        <div v-else>
                            <el-select class="flex3" size='large' v-model="setClassName.classname" value-key="id"
                                placeholder="请选择" @change="changeClassName">
                                <el-option v-for="item in setClassName.classlist" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                            <el-select class="flex3" size='large' v-model="setClassName.gradenmae" value-key="id"
                                placeholder="请选择" @change="changeGradeName">
                                <el-option v-for="item in setClassName.gradelist" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="教师名称" :label-width="formLabelWidth">
                        <div class="elrow ">
                                <el-select v-model="form.teacherId" value-key="id" placeholder="请选择" @change="changeCategory">
                                        <el-option v-for="item in form.teacherList" :label="item.name" :key="item.id"
                                            :value="item.id">
                                        </el-option>
                                </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="所属门店" :label-width="formLabelWidth">
                        <div class="elrow ">
                            <div>
                            <el-select :disabled="iscreate?false:true" class="flex3" size='large' v-model="form.orgId"
                                value-key="id" placeholder="请选择" @change="newchangeCategory">
                                <el-option v-for="item in form.orgList" :label="item.name" :key="item.id"
                                    :value="item.orgId">
                                </el-option>
                            </el-select>
                            </div>
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse(0)"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div>
                        </div>
                    </el-form-item>
                    <el-form-item label="所属课程" :label-width="formLabelWidth" prop="department">
                        <div class="elrow ">
                            <div>
                            <el-select :disabled="iscreate?false:true" class="flex3" size='large'
                                v-model="form.storeCourseId" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="item in form.storeCourseList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                            </div>
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse(1)"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div>
                        </div>
                    </el-form-item>
                    <el-form-item label="所属教室" :label-width="formLabelWidth" prop="department">
                        <div class="elrow">
                            <div>
                                    <el-select :disabled="iscreate?false:true" class="flex3" size='large' v-model="form.roomId"
                                    value-key="id" placeholder="请选择" @change="newchangeCategory">
                                    <el-option v-for="item in form.roomList" :label="item.name" :key="item.id"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse(2)"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="容纳人数" :label-width="formLabelWidth" prop="galleryful">
                        <el-input v-model="form.num" placeholder="请输入班级最大容纳人数" auto-complete="off"></el-input>
                    </el-form-item>

                    <!-- <el-form-item label="结班日期" :label-width="formLabelWidth">
                            <div class="elrow ">
                                <el-date-picker v-model="form.clasEndTime" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </div>
                        </el-form-item> -->
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button style="background:orange;border:1px solid orange;" type="primary" @click="createclass">
                        确 定</el-button>
                </div>
            </el-dialog>
            <!-- 刷选条件 -->
            <div class="mystyles">
                <el-form :model="ruleForm"  :rules="rules" ref="ruleFormwhere" label-width="100px">
                    <div>
                        <el-button size='medium' @click="btnnewclass" type="primary">新建班级</el-button>
                    </div>
                    <div class='elrow elmt-2'>
                        <el-form-item label="班级名称" prop="techername">
                            <div >
                                <el-input v-model="ruleForm.className" placeholder="请输入班级名称" auto-complete="off"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="所属门店" prop="department">
                            <el-select v-model="ruleForm.orgId" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.orgList" :label="item.name" :key="item.id"
                                    :value="item.orgId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class='elrow'>
                        <el-form-item label="教师名称"  prop="department">
                            <el-select v-model="ruleForm.techerId" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.techerList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教室" prop="techername">
                            <el-select size="large" v-model="ruleForm.roomId" value-key="id" placeholder="请选择"
                                @change="changeCategory">
                                <el-option v-for="item in ruleForm.roomList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div class="elrow">
                            <div class='clearselectall'>
                                <el-button class="clearpadding" icon="el-icon-search" @click='searchcnt("ruleFormwhere")' type="primary" plain>筛选</el-button>
                            </div>
                            <div class='clearselectall'>
                                <el-button @click="clearchoose('ruleFormwhere')" class="clearpadding" type="primary" plain>清除筛选条件
                                </el-button>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div>
            <!--管理-->
            <div class="content_box1">
                <el-table :data="tablelist" header-row-class-name="headerclassname" :cell-mouse-enter="hovertablein"
                    :cell-mouse-leave="hovertableout" style="width: 100%" @row-click='tableindex'
                    :row-class-name="changetable">
                    <el-table-column label="班级名称" tooltip-effect='dark' :show-overflow-tooltip="true" width="80">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="可容纳人数" tooltip-effect='dark' :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.num }}</span>
                            </div>
                        </template>
                    </el-table-column>
                   <el-table-column label="教师名称" tooltip-effect='dark' :show-overflow-tooltip="true" >
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.techerName }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="所在教室" tooltip-effect='dark' :show-overflow-tooltip="true" >
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.roomName }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="开课校区" tooltip-effect='dark' :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.startSchool}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="开班日期" tooltip-effect='dark' :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.startData}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="上课时间" tooltip-effect='dark' :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.startTime}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="招生状态" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.states}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="创建时间" :show-overflow-tooltip="true" width='140'>
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.createDataTime }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="220">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 分页 -->
                <div class="el_paginations">
                    <div class="block">
                        <!-- <span class="demonstration">完整功能</span> -->
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize"
                            layout="total, sizes, prev, pager, next, jumper" :total="total_count">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        getInfo,
        addClass,
        updateClass,
        getClassList,
        deleteClass
        } from '@/api/demo'
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    import store from '@/store'
    export default {
        name: 'grade',
        props: [],
        data() {
            return {
                // 分页
                pagesize: 10,
                currentPage4: 1,
                total_count: 60,
                checkList: 3,
                isclassname: true,  // 命名
                tablelist: [{
                    name:'一班',  // 班级名称
                    num:15,       // 容纳人数
                    orgName:'机构机构',   // 所属机构
                    startSchool:'小豆包机构', // 开课校区
                    startData:'2019-08-25',   //开班日期
                    startTime:'19:25',     // 上课时间
                    states:'已满',             // 招生状态
                    createDataTime:'2019-13-14 13:14',
                    techerName:'杨老师',
                    roomName:'101教室'
                }],
                iscreate: true,
                formLabelWidth: "120px",
                dialogFormVisible: false,
                // 班级名称
                setClassName: {
                    classname: '一年级',
                    classlist: [
                        { name: '一年级', id: '1' },
                        { name: '二年级', id: '2' },
                        { name: '三年级', id: '3' },
                        { name: '四年级', id: '4' },
                        { name: '五年级', id: '5' },
                        { name: '六年级', id: '6' },
                    ],
                    gradenmae: '一班',
                    gradelist: [
                        { name: '一班', id: '10' },
                        { name: '二班', id: '11' },
                        { name: '三班', id: '12' },
                        { name: '四班', id: '13' },
                        { name: '五班', id: '14' },
                        { name: '六班', id: '15' },
                        { name: '七班', id: '16' },
                        { name: '八班', id: '17' },
                        { name: '九班', id: '18' },
                        { name: '十班', id: '19' },
                    ]
                },
                form: {
                    className:'班级名称',
                    teacherId:0 ,     // 教师id
                    teacherName: '杨老师', // 教师名称
                    teacherList: [
                        { name: '杨老师', id: 1 },
                        { name: '请选择', id: 0 }
                    ],
                    orgId: 0,         // 机构id
                    orgName: "小豆包机构",// 机构名字
                    orgList: [
                        { name: '请选择', orgId: 0 },
                        { name: '小豆包机构', orgId: 1 },
                        { name: '中豆包机构', orgId: 2 },
                        { name: '大豆包机构', orgId: 3 }
                    ],
                    storeCourseId:0,  // 课程id
                    storeCourseList: [
                        { name: '英语课', id: 1 },
                        {name: '请选择', id: 0 }
                    ],
                    roomId: 0,        // 教室id
                    roomName: "1908班",// 教室名称
                    roomList: [
                        { name: "1908班", id: 1 },
                        { name: "请选择", id: 0 }
                    ],
                    num: 20,           // 容纳人数
                    id:2,
                    // "addBy": 0,
                    // "addByStr": "",//
                    // "addTime": "", //创建时间
                   
                    // "name": "",    // 班级名称
                    // "clasStartTime":new Date(),  // 开班日期
                    // "clasEndTime":'',  // 结班日期
                    // "updateBy": 0,
                    // "updateByStr": "string",
                    // "updateTime": "string",
                },
                // 筛选条件
                ruleForm: {
                    className: '班级名称', // 班级名称
                    orgId:0,        // 机构id
                    orgList:[{
                        name:'请选择',
                        orgId:0,
                    },{
                        name:'小豆包测试2',
                        orgId:2,
                    }],
                    techerId: 0,    // 老师id
                    techerList:[{
                        name:'杨老师',
                        id:1
                    },{
                        name:'李老师',
                        id:2
                    },{
                        name:'请选择',
                        id:0
                    }],
                    roomId: 0,      // 教室id
                    roomList: [
                        {
                            name: "教室1",
                            id: 1
                        },{
                            name: "请选择",
                            id: 0
                        }, {
                            name: '教室2',
                            id: 2
                        }, {
                            name: '教室3',
                            id: 3
                        },
                    ],  // 多选列表
                },  // 所有数据
                tableData: [   //表格数据
                    {
                        classname: '教室名称',
                        galleryful: '容纳人数',
                        department: '所属门店',
                        founder: "创建人",
                        foundertime: '创建时间'
                    },
                    {
                        classname: '教室名称',
                        galleryful: '容纳人数',
                        department: '所属门店',
                        founder: "创建人",
                        foundertime: '创建时间'
                    },
                    {
                        classname: '教室名称',
                        galleryful: '容纳人数',
                        department: '所属门店',
                        founder: "创建人",
                        foundertime: '创建时间'
                    },
                ],
                rules: {
                    title: [
                        { required: true, message: "请输入产品名称", trigger: "blur" },
                        { max: 50, message: "最多50字" }
                    ],
                    galleryful: [{ required: true, message: "请输入容纳人数", trigger: "blur" }],
                    className: [{ required: true, message: "请输入班级名称", trigger: "blur" }],
                    department: [{ required: true, message: "请输入所属门店", trigger: "blur" }]
                },
                tb_idnex: '',

            }
        },
        watch: {
        },
        computed: {
            ...mapState({
                viewsCount: 'app/demo'
            }),
            ...mapGetters({
                todosALise: 'user' // demo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
            })
        },
        mounted() {

        },
        created() {
            this.selsectdata();
            // this.getstores();
             console.log(store)
            this.blogAdd('22');
            // getInfo().then((res)=>{
            //     console.log(res.data)
            // })
            // console.log('getter',this.todosALise)
            // GET /class/getClassList
            // 测试mock.js数据
            //  this.$axios({
            //         method: "get",
            //         url: `/store/class/getClassList`,
            //         headers: {
            //             Authorization: sessionStorage.getItem("Authorization")
            //         }
            //     }).then(res => {
            //         console.log('我要的mock数据',res)
            //     })
        },
        activated(){
            console.log(this.$route.params);
            let params = this.$route.params;
            if(params.hasOwnProperty('isnewcouse')){
                this.dialogFormVisible = params.isnewcouse;   // 控制显示弹框
                this.state_id= params.state_id;
            }else{
                console.log('不是别的过来新建的')
            }
            if(params.hasOwnProperty('router')){
                this.router=params.router;
            }else{
                console.log('路由不为空')
            }
        },
        methods: {
            // vuex的集合
            ...mapMutations({
                totalAlise: 'app/getstore' // getstore 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
            }),
            　...mapActions({
                blogAdd: 'app/getdemofun' // 第一个blogAdd是定义的一个函数别名称，挂载在到this(vue)实例上，后面一个blogAdd 才是actions里面函数方法名称
            }),
            //查询教室-----参数不够
            // 获取vuex的方法和属性
            getstores(){
                // console.log('gett',todosALise)
                console.log(store)
                // 获取子模块app的属性值
               var val =  this.$store.state.app.demo
                console.log('aaaa',val)
                // 获取子模块的方法
                var params ={val:'杨辉' }
                this.$store.commit('app/setstore',params)
                // 调用子模块的 actions 的方法
                this.$store.dispatch('app/asyncGetStore',{name:'杨辉'})
                // 调用 getter计算属性 里面的值
                var a=  this.$store.getters.demo
                // this.$store.getters.total(state)
              console.log(a)

            },
            // 查询数据
            selsectdata() {
                getClassList().then(res => {
                    console.log('info', res);
                    if (res.errorCode == 0) {
                        if (res.result !== null) {
                            let arr = JSON.parse(JSON.stringify(res.result));
                            if (arr) {
                                console.log(arr)
                                // name:'一班',  // 班级名称
                                // num:15,       // 容纳人数
                                // orgName:'机构机构',   // 所属机构
                                // startSchool:'小豆包机构', // 开课校区
                                // startData:'2019-08-25',   //开班日期
                                // startTime:'19:25',     // 上课时间
                                // states:'已满',             // 招生状态
                                // createDataTime:'2019-13-14 13:14'

                                    // addBy: null
                                    // addByStr: "电子琴管理员"
                                    // addTime: "2019-08-02 19:52:26.0"
                                    // id: 2
                                    // name: "一一班"
                                    // num: 0
                                    // orgId: 0
                                    // orgName: "上海音乐家协会电子键盘专业委员会"
                                    // roomId: 0
                                    // roomName: "205教师"
                                    // storeCourseId: 1
                                    // teacherId: 0
                                    // teacherName: "电子琴管理员"
                                    // updateBy: null
                                    // updateByStr: null
                                    // updateTime: null
                                
                                // 赋值门店
                                    // 设置默认值 arr.push({name:'',orgId})
                                    // this.ruleForm.orgList = 
                                    // this.form.orgList = 
                                // 赋值教室
                                     // this.ruleForm.roomList = 
                                     // this.form.roomList = 
                                // 赋值老师
                                    // this.ruleForm.teacherList = 
                                    // this.form.teacherList = 
                                // 赋值课程
                                    //  this.form.courseList = 
                                    let tabledatas = [];
                                    arr.map((item)=>{
                                        let o={};
                                        o.name=item.name;
                                        o.num=item.num;
                                        o.startSchool=item.orgName;
                                        o.teacherName =item.teacherName;
                                        o.roomName= item.roomName;
                                        o.createDataTime=item.addTime;
                                        o.states = item.teacherId;
                                    })
                                // arr.map(item => {
                                //     item.addTime = item.addTime.split(' ')[0];
                                // })
                                // for (let i = 0; i < 100; i++) {
                                //     arr.push(arr[i])
                                // }
                                this.tableData = JSON.parse(JSON.stringify(arr))
                                // 计算分页
                                this.tablelist = this.pagination(this.currentPage4, this.pagesize, arr);
                                this.total_count = arr.length;
                            }
                        }
                    } else {
                        this.$message('暂无数据');
                    }

                })
            },
            // 计算分页
            pagination(pageNo, pageSize, array) {
                // console.log(pageNo,pageSize,array)
                var offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
            },
            // 编辑
            handleEdit(index, row) {
                console.log(index, row);
                let arr = JSON.parse(JSON.stringify(this.tablelist));
                if (arr) {
                    // 打开新建框
                    this.dialogFormVisible = true;
                    this.iscreate = false   //编辑班级
                    // 赋值
                    this.form = arr[index];
                    console.log('编辑', this.form)
                }
            },
            //删除
            handleDelete(index, row) {
                console.log(index, row);
                var id = row.id;
                console.log('id',id)
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params =2;
                    deleteClass(params).then(res => {
                        if (res.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res)
                            this.$message({
                                type: 'success',
                                message: '删除教室成功'
                            });
                        } else {
                            this.$message('删除错误')
                        }
                    }).catch(err => {
                            this.$message('请求失败')
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            //保存  创建教室or编辑教室
            createclass() {
                console.log('保存信息', this.form);

                //     className:'班级名称',

                //     teacherId:1 ,     // 教师id
                //     teacherName: '杨老师', // 教师名称
                //     teacherList: [
                //         { name: '杨老师', id: 1 }
                //     ],

                //     orgId: 1,         // 机构id
                //     orgName: "小豆包机构",// 机构名字
                //     orgList: [
                //         { name: '小豆包机构', orgId: 1 },
                //         { name: '中豆包机构', orgId: 2 },
                //         { name: '大豆包机构', orgId: 3 }
                //     ],

                //     storeCourseId:1,  // 课程id
                //     storeCourseList: [
                //         { name: '英语课', id: 1 }
                //     ],

                //     roomId: 1,        // 教室id
                //     roomName: "1908班",// 教室名称
                //     roomList: [
                //         { name: "1908班", id: 1 }
                //     ],
                // num: 20,           // 容纳人数
                var data = JSON.parse(JSON.stringify(this.form))
                var { teacherId, num, orgId, className, storeCourseId, roomId,id } = data;
                if (this.checkList == 6) {
                    className = this.setClassName.classname + this.setClassName.gradenmae
                }
                if(className==undefined || className==''){return this.$message({type:'warning',message:'请输入班级名称'})}
                if(teacherId==undefined || teacherId==''){return this.$message({type:'warning',message:'请输入老师姓名'})}
                if(num==undefined || num==''){return this.$message({type:'warning',message:'请输入容纳人数'})}
                if(storeCourseId==undefined || storeCourseId==''){return this.$message({type:'warning',message:'请选择课程名称'})}
                if(roomId==undefined || roomId==''){return this.$message({type:'warning',message:'请输入班级名称'})}
                if(orgId==undefined || orgId==''){return this.$message({type:'warning',message:'请选择所属机构'})}
                if (this.iscreate) {


                        // {
                        // "addBy": 0,
                        // "addByStr": "string",
                        // "addTime": "string",
                        // "id": 0,
                        // "name": "string",
                        // "num": 0,
                        // "orgId": 0,
                        // "orgName": "string",
                        // "roomId": 0,
                        // "roomName": "string",
                        // "storeCourseId": 0,
                        // "teacherId": 0,
                        // "teacherName": "string",
                        // "updateBy": 0,
                        // "updateByStr": "string",
                        // "updateTime": "string"
                        // }
                    let params = {
                        teacherId, 
                        num, 
                        orgId,
                        name:className, 
                        storeCourseId, 
                        roomId
                    }
                    console.log('创建参数',params);         
                    addClass(params).then(res => {
                        if (res.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res)
                            this.dialogFormVisible = false;
                            this.$message('创建教室成功');
                            // this.form.name="";
                            // this.form.sum="";
                            // this.from.orgId="";

                        }
                    }).catch(err => {
                        this.$message('请求失败')
                    })
                } else {
                     let params = {
                        teacherId, 
                        num, 
                        orgId,
                        className, 
                        storeCourseId, 
                        roomId,
                        id
                    }
                    console.log('编辑参数',params)
                     addClass(params).then(res => {
                        if (res.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res)
                            this.dialogFormVisible = false
                            this.$message('编辑教室成功');
                            // this.form.name="";
                            // this.form.sum="";
                            // this.from.orgId="";

                        } else {
                            this.$message('请求失败')
                        }
                    }).catch(err => {

                    })
                }
                this.form.teacherId='';
                this.form.num='';
                this.form.className='';
                this.form.orgId='';
                this.form.storeCourseId='';
                this.form.courroomIdseCount='';
            },
            // 
            sumEndTime(){
               var start= this.form.clasStartTime;
               if(!start){
                    return this.$message('请输入开课日期')
               }
               console.log('开始时间',start);
               var a=start.split('-')
               var day= parseInt(start.split('-')[2]) + 3;
                a[2]=day.toString();
            //    if(day>=30){
                
            //    }
                console.log('开始时间',start,a,day);
                this.form.clasEndTime =a.join('-');
            },
            // 清楚筛选条件
            clearchoose(voids) {
                // 赋值为空
                // this.$refs[voids].validate(valid => {
                //     this.$refs[voids].clearValidate();
                // })
                this.ruleForm.orgId='';
                this.ruleForm.techerId="";
                this.ruleForm.techerId="";
                this.ruleForm.roomId="";
                this.ruleForm.className="";
                console.log('清楚筛选');
                // className: '班级名称', // 班级名称
                //     orgId:1,        // 机构id
                //     orgList:[{
                //         name:'小豆包测试',
                //         orgId:1,
                //     },{
                //         name:'小豆包测试2',
                //         orgId:2,
                //     }],
                //     techerId: 1,    // 老师id
                //     techerList:[{
                //         name:'杨老师',
                //         id:1
                //     },{
                //         name:'李老师',
                //         id:2
                //     }
            },
            // 单选框
            changeradio(e) {
                if (e == 3) {
                    // 自定义命名规则
                    this.isclassname = true;
                } else {
                    // 规则命名
                    this.isclassname = false;
                }
                console.log('改变', e)
            },
            // 下拉选项
            changeClassName(e) {   // 年级
                var myclass = '';
                this.setClassName.classlist.map(item => {
                    if (item.id == e) {
                        myclass = item.name;
                        this.setClassName.classname = item.name
                        return
                    }
                })
                // console.log(myclass,this.setClassName.classname);
            },
            changeGradeName(e) {    // 班
                var myclass = '';
                this.setClassName.gradelist.map(item => {
                    if (item.id == e) {
                        myclass = item.name;
                        this.setClassName.gradenmae = item.name
                        return
                    }
                })
                // console.log(myclass,this.setClassName.classname);
            },
            newchangeCategory(e) {
                console.log(e)
            },
            // 搜索
            searchcnt() {
                
                let a = { ...this.ruleForm };
                let { className, orgId,techerId,roomId } = a;
                if(className==undefined){className='' }
                if(orgId==undefined){ orgId=''}
                if(techerId==undefined){techerId='' }
                if(roomId==undefined){roomId='' }
                var params={ className, orgId,techerId,roomId 
                }
                console.log('参数',params)
            },

            // 新建课表
            btnnewclass() {
                this.dialogFormVisible = true;
                this.iscreate = true;
            },
            // 新建
            newcourse(i) {
                this.dialogFormVisible = false;  
                /**
                 * 关闭当前对话框
                 * 传值  是否打开新的对话框  对话框内容   是否返回到原页面
                 * 
                */
                var params={
                    isnewcouse:false,  // 打开新弹框
                    dialog_cnt:'',
                    router_back:false
                }
                if(i==0){       // 新建门店
                    this.$router.push({
                        name: 'register'
                    })
                }
                if(i==1){       // 新建课程
                    params.isnewcouse = true;
                    params.router_back = true;
                    this.$router.push({
                        name: 'curriculum',
                        params,
                    })
                    // this.$router.replace() 
                    // this.$router.push({
                    //     path: '/curriculum',
                    //     query:params
                    // })
                }
                if(i==2){       // 新建教室
                    params.isnewcouse = true;
                    params.router_back = true;
                    params.dialog_cnt = JSON.parse(JSON.stringify(this.form))
                     this.$router.push({
                        name: 'classroom',
                        params,
                    })
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
            hovertablein(row, column, cell, event) {
                console.log(row, column, cell, event)
            },
            hovertableout(row, column, cell, event) {
                console.log(row, column, cell, event)
            },
            // 每页显示几天数据
            handleSizeChange(val) {
                this.pagesize = val
                this.tablelist = this.pagination(this.currentPage4, this.pagesize, this.tableData);
                console.log(`每页 ${val} 条`, this.tablelist);
            },
            // 当前第几页
            handleCurrentChange(val) {

                this.currentPage4 = val;
                this.tablelist = this.pagination(this.currentPage4, this.pagesize, this.tableData);
                console.log(`当前页: ${val}`, this.tablelist);
            },
            // 点击哪一行
            tableindex(row, e) {
                console.log(e)
                // this.tb_idnex=e.index;
            },

            // 选择教师名称
            changeCategory() {

            },
        },
        components: {

        }
    }
</script>