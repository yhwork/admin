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

    .el_paginations {
        margin: 2rem 3rem 0 0;
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
                    <el-form-item label="命名规则" :label-width="formLabelWidth" prop="classname">
                        <el-radio-group v-model="checkList" @change='changeradio'>
                            <el-radio :label="3">自定义命名</el-radio>
                            <el-radio :label="6">规则命名</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="班级名称" :label-width="formLabelWidth">
                        <div v-if="isclassname">
                            <el-input v-model="form.name" placeholder="请输入班级名称" auto-complete="off"></el-input>
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
                                        <el-option v-for="item in form.teacherList" :label="item.teacherName" :key="item.id"
                                            :value="item.teacherId">
                                        </el-option>
                                </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item label="所属门店" :label-width="formLabelWidth">
                        <div class="elrow ">
                            <div>
                            <el-select :disabled="iscreate?false:true" class="flex3" size='large' v-model="form.orgId"
                                value-key="id" placeholder="请选择" @change="newchangeCategory">
                                <el-option v-for="item in form.orgList" :label="item.orgName" :key="item.id"
                                    :value="item.orgId">
                                </el-option>
                            </el-select>
                            </div>
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span></div>
                        </div>
                    </el-form-item>
                    <el-form-item label="开班日期" :label-width="formLabelWidth">
                        <div class="elrow ">
                            <el-date-picker v-model="form.clasStartTime" @blur='sumEndTime' type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>
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
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse"
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
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="newcourse"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="容纳人数" :label-width="formLabelWidth" prop="galleryful">
                        <el-input v-model="form.num" placeholder="请输入班级最大容纳人数" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="结班日期" :label-width="formLabelWidth">
                            <div class="elrow ">
                                <el-date-picker v-model="form.clasEndTime" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button style="background:orange;border:1px solid orange;" type="primary" @click="createclass">
                        确 定</el-button>
                </div>
            </el-dialog>
            <!-- 刷选条件 -->
            <div class="mystyles">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                    <div>
                        <el-button size='medium' @click="btnnewclass" type="primary">新建班级</el-button>
                    </div>
                    <div class='elrow elmt-2'>
                        <el-form-item label="班级名称" prop="techername">
                            <el-select v-model="ruleForm.id" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.categoryList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属门店" prop="department">
                            <el-select v-model="ruleForm.id" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.categoryList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class='elrow'>
                        <el-form-item label="教师名称" prop="department">
                            <el-select v-model="ruleForm.id" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.categoryList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="教室" prop="techername">
                            <el-select size="large" v-model="ruleForm.id" value-key="id" placeholder="请选择"
                                @change="changeCategory">
                                <el-option v-for="item in ruleForm.categoryList" :label="item.name" :key="item.id"
                                    :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <div class="elrow">
                            <div class='clearselectall'>
                                <el-button class="clearpadding" type="primary" plain>筛选</el-button>
                            </div>
                            <div class='clearselectall'>
                                <el-button @click='clearchoose' class="clearpadding" type="primary" plain>清除筛选条件
                                </el-button>
                            </div>
                            <div class="searchcnt">
                                <el-button type="primary" icon="el-icon-search" @click='searchcnt'>搜索</el-button>
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
                    <el-table-column label="班级名称" width="150">
                        <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <!--  <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="可容纳人数" width="100">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.num }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="所属门店" width="280">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.orgName }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="开课校区" width="100">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">开课校区</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="开班日期" width="120">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.addTime}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="上课时间" width="120">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{scope.row.addTime}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="招生状态" width="100">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="创建时间" width="100">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.foundertime }}</span>
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
                isclassname: false,
                tablelist: [],
                iscreate: true,
                formLabelWidth: "120px",
                dialogFormVisible: false,
                checkList: 6,
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

                    "addBy": 0,
                    "addByStr": "",//
                    "addTime": "", //创建时间
                    "id": 0,       // 班级id
                    "name": "",    // 班级名称
                    "teacherId": 0,     // 教师id
                    "teacherName": '', // 教师名称
                    "teacherList": [
                        { name: '杨老师', id: 0 }
                    ],
                    "num": 20,           // 容纳人数
                    "orgId": 0,         // 机构id
                    "orgName": "string",// 机构名字
                    "orgList": [
                        { name: '小豆包机构', id: 0 },
                        { name: '中豆包机构', id: 1 },
                        { name: '大豆包机构', id: 2 }
                    ],
                    "roomId": 0,        // 教室id
                    "roomName": "string",// 教室名称
                    "roomList": [
                        { name: "1908班", id: 0 }
                    ],
                    "storeCourseList": [
                        { name: '英语课', id: 0 }
                    ],
                    "storeCourseId": 0,  // 课程id
                    "clasStartTime":new Date(),  // 开班日期
                    "clasEndTime":'',  // 结班日期
                    "updateBy": 0,
                    "updateByStr": "string",
                    "updateTime": "string",
                },
                // 筛选条件
                ruleForm: {
                    techername: '教师名称',
                    department: '所属门店',
                    id: 1,
                    categoryList: [
                        {
                            name: "默认值",
                            id: 0
                        }, {
                            name: '测试1',
                            id: 1
                        }, {
                            name: '测试2',
                            id: 2
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
                    classname: [{ required: true, message: "请输入班级名称", trigger: "blur" }],
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
                todosALise: 'demo' // demo 不是字符串，对应的是getter里面的一个方法名字 然后将这个方法名字重新取一个别名 todosALise
            })
        },
        mounted() {

        },
        created() {
            this.selsectdata();
            // this.getstores();
            this.blogAdd('22');
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
            selsectdata() {
                this.$axios({
                    method: "get",
                    url: `/store/class/getClassList`,
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res => {
                    console.log('info', res.data);
                    if (res.data.errorCode == 0) {
                        if (res.data.result !== null) {
                            let arr = JSON.parse(JSON.stringify(res.data.result));
                            if (arr) {
                                arr.map(item => {
                                    item.addTime = item.addTime.split(' ')[0];
                                })
                                for (let i = 0; i < 100; i++) {
                                    arr.push(arr[i])
                                }
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
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        method: "delete",
                        // DELETE /class/deleteClass/{id}
                        url: `/store/class/deleteClass/${id}`,
                        data: JSON.stringify({ id }),
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res.data)
                            this.$message({
                                type: 'success',
                                message: '删除教室成功'
                            });
                        } else {
                            this.$message('请求失败')
                        }
                    }).catch(err => {

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
                var thisdata = JSON.parse(JSON.stringify(this.form))
                var { orgId, name, num, id, roomId, storeCourseId } = thisdata;
                if (this.checkList == 6) {
                    name = this.setClassName.classname + this.setClassName.gradenmae
                }
                console.log('机构', orgId, '班级名称', name, '容纳数量', num, '所属id', id)
                if (this.iscreate) {
                    if (orgId == "" || orgId == undefined || name == "" || name == undefined || num == "" || num == undefined) {
                        return this.$message('请填写完整信息')
                    }
                    let params = {
                        orgId, name, num, id, roomId, storeCourseId
                    }
                    this.$axios({
                        method: "post",
                        url: `/store/class/addClass?orgId=${orgId}&name=${name}&num=${num}`,
                        data: params,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res.data)
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
                        orgId, name, num, id, roomId, storeCourseId
                    }
                    this.$axios({
                        method: "put",
                        url: `/store/class/updateClass`,
                        data: params,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res.data)
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
            clearchoose() {
                // 赋值为空
                console.log('清楚筛选');
                this.ruleForm.id = 0
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
                let { techername, departmen } = a;

            },

            // 新建课表
            btnnewclass() {
                this.dialogFormVisible = true;
                this.iscreate = true;
            },
            // 新建
            newcourse() {

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