<style>
    .elrow {
        display: flex;
        flex-flow: nowrap row;
    }

    .elmt-2 {
        margin-top: 2rem;
    }

    .color {
        color: #409EFF;
        font-size: 0.78rem;
    }

    .elm-1 {
        margin: 0 2px;
    }

    .elm-2 {
        margin: 0 1rem;
    }

    .el_paginations {
        margin: 2rem 3rem 0 0;
        display: flex;
        justify-content: flex-end;
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

    /* element UI css updata*/
    /* .el-select .el-select--large {
        width: 100%;
    } */

    .c_red {
        color: orange;
    }

    .mystyles {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 10px;
        margin: 5px 2px;
        padding: 15px 10px;
    }

    .searchcnt {
        margin-left: 2rem;
    }

    /* .el-table th, .el-table tr{
        background-color:#ccc
    } */
    .headerclassname {
        border: 1px solid #ccc !important;
        color: darkslategrey;
        background-color: #ccc !important
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

    .myclassroom .el-input {
        width: auto
    }
</style>

<template>
    <!--教师-->
    <div>
        <div class="content_box1">
            <!--筛选-->
            <div class="mystyles">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">
                    <div>
                        <el-button size='medium' @click="btnnewclass" type="primary">创建教室</el-button>
                    </div>
                    <div class='elrow elmt-2'>
                        <el-form-item label="教室名称">
                            <el-input v-model="ruleForm.techername" placeholder="请输入教室名称" auto-complete="off">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="所属门店" prop="department">
                            <div class="myclassroom_org">
                                <el-select v-model="ruleForm.orgId" value-key="id" placeholder="请选择"
                                    @change="changeCategory">
                                    <el-option v-for="(item,index) in ruleForm.orgList" :label="item.name" :key="index"
                                        :value="item.orgId"></el-option>
                                </el-select>
                            </div>

                        </el-form-item>
                        <div class="searchcnt">
                            <el-button type="primary" icon="el-icon-search" @click='searchcnt'>搜索</el-button>
                        </div>
                    </div>
                </el-form>
            </div>
            <!--管理-->
            <div class="mystyles" id='tables'>
                <el-table :data="tablelist" ref="table" @cell-mouse-enter="hovertablein"
                    @cell-mouse-leave="hovertableout" @row-click='tableindex' header-row-class-name="headerclassname"
                    :row-class-name="changetable">
                    <el-table-column label="教室名称" tooltip-effect='dark' :show-overflow-tooltip="true">
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
                    <el-table-column label="所属门店" tooltip-effect='dark' :show-overflow-tooltip="true" >
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.orgName }}</span>
                            </div>
                        </template>>
                    </el-table-column>
                    <el-table-column label="创建人" tooltip-effect='dark' :show-overflow-tooltip="true"> 
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.addByStr }}</span>
                            </div>
                        </template>>
                    </el-table-column>
                    <el-table-column label="创建时间" tooltip-effect='dark' :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <div>
                                <span style="margin-left: 10px">{{ scope.row.addTime }}</span>
                            </div>
                        </template>>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <div class="elrow">
                                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑
                                </el-button>
                                <!-- <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">复制
                                </el-button> -->
                                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                                </el-button>
                            </div>
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
            <!-- 弹框 -->
            <el-dialog class="myclassroom" :title="iscreate==true?'创建教室':'编辑教室'" left :visible.sync="dialogFormVisible">
                <el-form :model="form" :rules="rules">
                    <el-form-item label="所属门店" :label-width="formLabelWidth" prop="department">
                        <div class="elrow">
                            <el-select :disabled="iscreate?false:true" size='large' v-model="form.orgId" value-key="id"
                                placeholder="请选择" @change="changeCategory">
                                <el-option v-for="(item,index) in form.orgList" :label="item.name" :key="index"
                                    :value="item.orgId">
                                </el-option>
                            </el-select>
                            <div v-if="iscreate" class='flex1 elm-2 c_red'><span @click="neworg"
                                    class='elm-1 color'>新建</span>|<span class="elm-1 color">刷新</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="教室名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" @blur="outname" placeholder="请输入教室名称" auto-complete="off">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="容纳人数" :label-width="formLabelWidth">
                        <el-input v-model="form.num" @blur="outcount" placeholder="请输入班级最大容纳人数" auto-complete="off">
                        </el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button style="background:orange;border:1px solid orange;" type="primary" @click="createroom">确 定
                    </el-button>
                    <!-- <el-button v-else style="background:orange;border:1px solid orange;" type="primary" @click="createroom">确 定</el-button> -->
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'grade',
        props: [],
        data() {
            return {
                form: {
                    name: "",
                    orgId: "",
                    num: "",
                    id: '',
                    orgList: [],
                },
                iscreate: true,  //编辑 or 新建
                dialogFormVisible: false,
                formLabelWidth: "120px",
                total_count: 60,  //总数
                pagesize: 10,
                currentPage4: 1,  // 默认显示的条数
                tablelist: [],     //要显示的数据
                ruleForm: {
                    techername: '',
                    department: 0,
                    orgId: "",
                    orgList: [],
                },  // 所有数据
                tableData: [   //表格数据
                ],
                categoryList: [
                    {
                        name: '测试1',
                        orgId: 62,
                    },
                    {
                        name: '默认值',
                        orgId: 0,
                    },
                    {
                        name: '测试2',
                        orgId: 60,
                    },
                ],  // 门店列表
                newcategoryList: [],  // 新建列表
                rules: {
                    title: [
                        { required: true, message: "请输入产品名称", trigger: "blur" },
                        { max: 50, message: "最多50字" }
                    ],
                    classname: [{ required: true, message: "请输入教室名称", trigger: "blur" }],
                    galleryful: [{ required: true, message: "请输入最大容纳人数", trigger: "blur" }],
                    techername: [{ required: true, message: "请输入教师名称", trigger: "blur" }],
                    department: [{ required: true, message: "请输入所属门店", trigger: "blur" }]
                },
                tb_idnex: '',
                orgalllist: [],
            }
        },
        watch: {

        },
        created() {
            this.selsectdata()  // 查询
            this.getorglist()   // 获取门店
        },
        methods: {
            // 改变表格
            changetable(e) {
                console.log(e);
                if (e.rowIndex % 2 == 0) {
                    return "table_borders"

                } else {
                    return "table_border"
                }
            },
            // 新建课程表
            newcourse() {

            },
            // 新建子门店
            neworg() {
                // 让他注册账号去

            },

            hovertablein(e) {
                console.log('当前', e);
            },
            hovertableout(row, column, cell, event) {
                // console.log(row, column, cell, event)
                console.log('离开', row, column, cell, event);
            },
            // 每页显示几天数据
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pagesize = val;
                // this.tablelist =this.tableData.slice(0,this.pagesize)
                this.tablelist = this.pagination(this.currentPage4, this.pagesize, this.tableData);
            },
            // 当前第几页
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage4 = val;
                var a = JSON.parse(JSON.stringify(this.tableData))
                var b = this.pagination(this.currentPage4, this.pagesize, a);
                console.log(b)
                this.tablelist = b;
            },
            // 计算分页
            pagination(pageNo, pageSize, array) {
                console.log(pageNo, pageSize, array)
                var offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
            },
            // 点击哪一行
            tableindex(row, e) {
                // console.log(e)
                // this.tb_idnex=e.index;
            },
            // 新建课表
            btnnewclass() {
                // @click="dialogFormVisible = true"
                this.dialogFormVisible = true
                this.iscreate = true
            },
            // 编辑
            handleEdit(index, row) {
                console.log(index, row);
                let arr = JSON.parse(JSON.stringify(this.tablelist));
                if (arr) {
                    // 打开新建框
                    this.dialogFormVisible = true;
                    this.iscreate = false   //编辑教室
                    // 赋值
                    let obj = { ...arr[index] };
                    obj.orgList = this.orgalllist;
                    this.form = obj;
                    console.log('编辑', this.form);
                }
            },
            // 选择门店信息
            changeCategory(e) {
                console.log('门店', e)

                this.ruleForm.orgId = e;
                this.form.orgId = e;
            },
            // 判断教室名称
            outname() {
                if (this.form.name !== "") {
                    this.rules.classname.required = false;
                } else {
                    this.rules.classname.required = true;
                    return this.$message('请输入教室名称')
                }
            },
            outcount() {
                if (this.form.num == "") {
                    this.rules.galleryful.required = true;
                    return this.$message('请输入教室容纳人数')
                } else {
                    this.rules.galleryful.required = false;
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
                        url: `/store/room/deleteRoom/${id}`,
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
            //请求获取门店
            getorglist() {
                this.$axios({
                    method: "get",
                    url: `/store/org/getUserOrgList`,
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res => {
                    console.log('info_org', res.data);
                    if (res.data.errorCode == 0) {
                        let arr = res.data.result;
                        if (arr) {
                            this.orgalllist = arr;
                            // 筛选
                            this.ruleForm.orgList = arr;
                            // 新建 or 编辑
                            this.form.orgList = arr;
                        } else {
                            return this.$message('没有该门店')
                        }

                    } else {
                        this.$message('暂无数据');
                    }

                })
            },
            // 搜索
            searchcnt() {
                var techername = this.ruleForm.techername;
                var orgId = this.ruleForm.orgId;
                console.log(techername, orgId);
                if (techername == "" || techername == null || techername == undefined) {
                    techername = ''
                }
                if (orgId == "" || orgId == null || orgId == undefined) {
                    orgId = ''
                }
                var params = {
                    techername, orgId
                }
                this.$axios({
                    method: "get",
                    url: `/store/room/getRoomList?orgId=${orgId}&name=${techername}`,
                    data: params,
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res => {
                    console.log('info', res.data);
                    if (res.data.errorCode == 0) {
                        let arr = res.data.result;
                        if (arr) {
                            arr.map(item => {
                                item.addTime = item.addTime.split(' ')[0];
                            })
                            for (let i = 0; i < 100; i++) {
                                arr.push(arr[i])
                            }
                            this.tableData = JSON.parse(JSON.stringify(arr))
                            this.tablelist = this.pagination(this.currentPage4, this.pagesize, arr);
                            this.total_count = arr.length;
                        } else {
                            return this.$message('没有该门店')
                        }

                    } else {
                        this.$message('暂无数据');
                    }

                })
            },
            //查询教室
            selsectdata() {
                this.$axios({
                    method: "get",
                    url: `/store/room/getRoomList?orgId=61&name=${''}`,
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization")
                    }
                }).then(res => {
                    console.log('info', res.data);
                    if (res.data.errorCode == 0) {
                        let arr = JSON.parse(JSON.stringify(res.data.result));
                        if (arr) {
                            // arr.map(item=>{
                            //     item.addTime =item.addTime.split(' ')[0];
                            // })
                            // for(let i=0;i<10;i++){
                            //     arr.push(arr[i])
                            // }
                            this.tableData = JSON.parse(JSON.stringify(arr))
                            this.tablelist = this.pagination(this.currentPage4, this.pagesize, arr);
                            this.total_count = arr.length;
                        }

                    } else {
                        this.$message('暂无数据');
                    }

                })
            },
            //创建教室 // 编辑教室
            createroom() {
                console.log('保存信息', this.form)
                var { orgId, name, num, id } = this.form;
                console.log(orgId, name, num, id)

                if (this.iscreate) {
                    if (orgId == "" || orgId == undefined || name == "" || name == undefined || num == "" || num == undefined) {
                        return this.$message('请填写完整信息')
                    }
                    this.$axios({
                        method: "post",
                        url: `/store/room/addRoom?orgId=${orgId}&name=${name}&num=${num}`,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.$message('创建教室成功');
                            this.selsectdata()
                            console.log('info', res.data)
                            this.dialogFormVisible = false;
                            this.form.name = "";
                            this.form.sum = "";
                            this.from.orgId = "";

                        } else {
                            return this.$message('请求失败1')
                        }
                    })
                } else {
                    this.$axios({
                        method: "put",
                        url: `/store/room/updateRoom`,
                        data: this.form,
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization")
                        }
                    }).then(res => {
                        if (res.data.errorCode == 0) {
                            this.selsectdata()
                            console.log('info', res.data)
                            this.dialogFormVisible = false
                            this.$message('编辑教室成功');
                            this.form.name = "";
                            this.form.sum = "";
                            this.from.orgId = "";

                        } else {
                            this.$message('请求失败3')
                        }
                    }).catch(err => {

                    })
                }
            },
        },
        components: {

        }
    }
</script>