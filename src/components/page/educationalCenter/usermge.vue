<style lang="scss">
.users{
    .el-input {
        width: auto;
    }
    .el-transfer{
        width: auto;
    }
    .el-input__inner{
        width: auto;
    }
    .flex_row{
        display: flex;
        flex-flow: row nowrap;
    }
    .flex_column{
        display: flex;
        flex-flow: column wrap;
    }
    .m_left{
        margin: 0 15px;
    }
    .boeder{
        padding:0 5px;
        margin: 3px 5px;
        width: 650px;
        overflow: hidden;
        box-sizing: border-box;
        border: rgba(0,0,0,.1) solid 1px;
        border-radius: 15px;
    }
    .font_color{
        color: #696969;
        font-size: 12px;
        p{
            font-size: 12px !important;
        }
    }
    .w_size{
        .el-input{
            width: 120px;   // 直接写固定值
        }
        .el-select {
             width: 55%;
        }
        .el-input__inner{
             width: 95%;
        }
    }
    .clearselectall {
        font-size: 0.6rem;
        color: #409EFF;
        height: 40px;
        line-height: 35px;
        margin-left: 15px;
    }
    .clearpadding {
        margin-top: 2px;
        padding: 8px 12px !important;
        margin-left: 15px;
    }
    .newUsers{
        position: relative;
        align-items:center;
        margin: 10px 0 25px 0; 
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .el-upload--picture-card{
        width: 100px;
        height: 100px;
        line-height: 100px;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
    .progress{
        width: 500px;
        position: absolute;
        right: 2%;
        border-radius: 15px;
        padding: 2px 3px;
        border: rgba(0,0,0,.1) 1px double;
        .progressitem{
            display: flex;
            flex-flow: row nowrap;
            margin-top: 8px;
            justify-content: space-between;
            p{
                font-size: 12px;
            }
        }
    }
    .m_bottom{
        margin-bottom: 35px;
    }
    .flex_center{
        display: flex;
        justify-content: center;
        
    }
    .tenter{
        margin:50px 50px;
    }
}
    .pointer{
        cursor: pointer;
    }
</style>

<template>
    <div class="content_box1 users">
    <div class="m_bottom">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="pointer">教务管理</el-breadcrumb-item>
            <el-breadcrumb-item class="pointer"   >
               <div v-if="my_newcourse" class="pointer"   >新建员工</div>
               <div v-else class="pointer">员工管理</div>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
       <div v-if="my_newcourse">
             <!--新建员工-->
        <el-form ref="form" :model="form" label-width="110px">
              <el-form-item label="员工姓名：">
                <div class="flex_row">
                    <el-input v-model="form.userName" placeholder="请输入员工姓名" maxlength="8" auto-complete="off"></el-input>
                    <div class="m_left font_color"><p>建议真实姓名，方便管理</p></div>
                </div>
             </el-form-item>
             <el-form-item label="员工账号：" label-width="110px">
                <div class="flex_row">
                    <el-select class="w_size" v-model="form.phone" placeholder='中国+86'>
                        <el-option
                            :class="'w_size'"
                            v-for="(item,index) in form.phoneCity"
                            :key="index"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <el-input class="m_left" v-model="form.userPhone" placeholder="请输入员工手机号" maxlength="8" auto-complete="off"></el-input>
                </div>
            </el-form-item>
             <el-form-item label="设置密码：">
                <div class="flex_row">
                    <el-input v-model="form.userName" type="password" placeholder="为员工设置密码" maxlength="8" auto-complete="off"></el-input>
                </div>
             </el-form-item>
            <el-form-item label="员工编号：">
                <div >
                    <el-input v-model="form.userId" placeholder="请输入员工编号" maxlength="8" auto-complete="off"></el-input>
                </div>
             </el-form-item>
            <el-form-item label="所属门店：">
                <div class="boeder">
                   <template>
                        <el-transfer v-model="form.orgList" :data="form.orgData"></el-transfer>
                   </template>
                </div>
            </el-form-item>
            <el-form-item label="所属门店角色：" label-width="110px">
                <div class=" flex_row">
                   <el-select  v-model="form.roleId" placeholder='角色'>
                        <el-option
                            v-for="(item,index) in form.roleList"
                            :key="index"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                    <div class="m_left font_color"><p>如果没有相应角色，请点击“新建”进行添加</p></div>
                </div>
            </el-form-item>
            <!--如果为老师显示-->
            <div>
                <el-form-item label="教师昵称：">
                    <div class="flex_row">
                        <el-input v-model="form.userName" placeholder="请输入教师姓名" maxlength="8" auto-complete="off"></el-input>
                        <div class="m_left font_color flex_row"><p>用于购买课程时，显示老师昵称</p><el-checkbox class="m_left" v-model="form.checked"></el-checkbox></div>
                    </div>
                </el-form-item>
                <el-form-item label="教师头像：">
                    <div class="flex_row">
                        <!--
                            action="/store/file/img/upload"
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
                        -->
                        <el-upload
                            class="avatar-uploader"
                            action="/store/file/img/upload"
                            accept="image/png, image/jpeg"
                            :show-file-list="true"
                            :limit="1"
                            list-type="picture-card"
                            :headers="headers"
                            :multiple='false'
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <div>
                            <el-dialog :visible.sync="form.dialogVisible" size="tiny">
                                <img width="100%" :src="form.dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                        
                    </div>
                    <div class="font_color">
                        <p>建议：上传一张 160*160 像素</p>
                     </div>
                </el-form-item>
                <el-form-item label="教师职务：">
                    <div class="flex_column">
                        <el-input v-model="form.userId" placeholder="请输入教师职务" maxlength="8" auto-complete="off"></el-input>
                        <p class="font_color">可以输入老师的职位如：清华大学教授，便于用户了解详细信息</p>
                    </div>
                </el-form-item>
                <el-form-item label="教师证件：">
                    <div class="flex_row">
                        <el-upload
                            class="avatar-uploader"
                            action="/store/file/img/upload"
                            accept="image/png, image/jpeg"
                            :show-file-list="true"
                            :limit="1"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview1"
                            :on-remove="handleRemove1"
                            :on-success="handleAvatarSuccess1"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="form.imageUrlIdPhone" :src="form.imageUrlIdPhone" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <div>
                            <el-dialog :visible.sync="form.dialogVisible1" size="tiny">
                                <img width="100%" :src="form.imageUrlIdPhone" alt="">
                            </el-dialog>
                        </div>
                        
                    </div>
                    <div class="font_color">
                        <p>建议：上传一张 160*160 像素</p>
                     </div>
                </el-form-item>

            </div>
            
        </el-form>
            <div slot="footer" class="flex_row flex_center">
                <el-button class="tenter" @click="saveiedData()">取 消</el-button>
                <el-button  class="tenter" type="primary" @click="saveiedData()">保存</el-button>
            </div>
       </div>
       <div v-else>
             <!--员工管理-->
        <div class="content_box1">
            <!--刷选员工-->
            <el-form res='newForm' :model="newForm"  label="新建员工" label-width="70px">
                <div class="newUsers flex_row">
                    <el-button size='medium' @click="btnnewUser" type="primary">新建员工</el-button>
                    <div class="progress">
                        <el-progress :text-inside="true" :stroke-width="20" :show-text='true' :percentage="status" :status="status>99?'success':status<=50?'exception':''"></el-progress>
                        <div class="progressitem font_color"><p>员工数量</p><p>1/10</p></div>
                    </div>
                </div>
                
                <!--刷选-->
                <div class="flex_row">
                    <el-form-item label="状态">
                        <el-select class="w_size" v-model="newForm.status" placeholder='全部'>
                            <el-option
                                :class="'w_size'"
                                v-for="(item,index) in newForm.phoneCity"
                                :key="index"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="角色">
                        <el-select class="w_size" v-model="newForm.role" placeholder='全部'>
                            <el-option
                                :class="'w_size'"
                                v-for="(item,index) in newForm.roleList"
                                :key="index"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="员工账号">
                        <el-select class="w_size" v-model="newForm.userPhone" placeholder='全部'>
                            <el-option
                                :class="'w_size'"
                                v-for="(item,index) in newForm.userPhoneList"
                                :key="index"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div class="flex_row">
                            <div class='clearselectall'>
                                <el-button class="clearpadding" icon="el-icon-search" @click='selsectdata(0)' type="primary" plain>筛选</el-button>
                            </div>
                            <div class='clearselectall'>
                                <el-button @click="clearchoose('ruleFormwhere')" class="clearpadding" type="primary" plain>清除筛选条件
                                </el-button>
                            </div>
                    </div>
                </div>

            </el-form>
            <!--表格-->
            <div>
                <el-table ref="multipleTable" :data="tableData" style="width: 100%"   @selection-change="handleSelectionChange">
                    <!--<el-table-column
                        prop="date"
                        label="小豆包账号"
                        width="180">
                    </el-table-column>  -->
                     <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        label="小豆包账号"
                       >
                       <template slot-scope="scope">{{ scope.row.userId }}</template>
                    </el-table-column>
                    <el-table-column label="员工姓名" >
                        <template slot-scope="scope">{{ scope.row.userName }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="userType"
                        label="角色">
                    </el-table-column>
                     <el-table-column label="操作" >
                        <template slot-scope="scope">
                            <div > 
                                <el-button size='mini'  @click="btnTable(scope.row.id,1)" type="primary">编辑</el-button>
                                <el-button size='mini' @click="btnTable(scope.row.id,3)" type="warning">查看</el-button>
                                <el-button size='mini' @click="btnTable(scope.row.id,2)" type="danger">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                   <el-button size='mini'  @click="btnTable(1)" type="primary">停用</el-button>
                   
                </div>
            </div>

        </div>
       </div>
       
    </div>
</template>
<script>
export default {
    name:'usermge',
    data(){
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 6; i++) {
            data.push({
                key: i,
                label: `备选项 ${ i }`,
                disabled: i % 4 === 0
            });
            }
            return data;
        };
        return {
            headers: {
                Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
            },
            my_newcourse:false,  // 是否员工管理
            imageUrl:'',         // 头像
            status:100,
            form:{
                dialogImageUrl: '',
                imageUrlIdPhone:'',  // 证件照
                dialogVisible: false,
                dialogVisible1: false,
                roleId:'',
                roleList:[],
                userPhone:'',
                userName:'',
                userId:'',
                checked:true,
                orgData: generateData(),
                orgList: [1, 4]
            },
            newForm:{
                status:'',
                phoneCity:'',
                userPhone:'',
                userPhoneList:'',
                roleList:[],
                role:''
            },
            tableData:[{userName:'我大哥',userType:"老大",userId:"17634630221",id:0}]
        }
    },
    methods: {
        // 头像上传成功时的钩子
        handleAvatarSuccess1(res, file) {
            if(res.errorCode==0){
                this.imageUrl = res.result;
            }
            console.log('图片上传成功',res,file);
            
        },
        saveiedData(){
            this.my_newcourse=false
        },
        // 证件照上传成功时的钩子
        handleAvatarSuccess(res, file) {
            console.log('图片上传成功',res,file);
             if(res.errorCode==0){
                this.imageUrlIdPhone = res.result;
            }
            // this.imageUrlIdPhone = URL.createObjectURL(file.raw);
        },
        // 上传文件之前的钩子
        beforeAvatarUpload(file) {
            console.log('图片正在上传',file);
            const isJPG = file.type === 'image/jpeg' || file.type==='image/png';     // 图片类型
            const isLt2M = file.size / 1024 / 1024 < 2;   // 图片大小

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        // 移除图片
        handleRemove(file, fileList) {
            console.log('移除图片',file,fileList);
            console.log(file, fileList);
            this.form.imageUrl=''
        },
        handleRemove1(file, fileList) {
            console.log('移除图片',file,fileList);
            console.log(file, fileList);
            this.form.imageUrlIdPhone=''
        },
        // 点击已上传的文件链接时的钩子
        handlePictureCardPreview(file) {
            console.log('点击已上传',file);
            this.form.dialogImageUrl = file.url;
            this.form.dialogVisible = true;
        },
        // 点击已上传的文件链接时的钩子
        handlePictureCardPreview1(file) {
            console.log('点击已上传',file);
            this.form.imageUrlIdPhone = file.url;
            this.form.dialogVisible1 = true;
        },
        //  筛选全部信息
        selsectdata(args){
            if(args == 0){ 

            }else{

            }
        },
        // 清楚筛选条件
        clearchoose(){

        },
        // 编辑/删除
        btnTable(id,status){
            console.log(id,status);
        },
        // 新建
        btnnewUser(){
            this.my_newcourse=true          ;
        },
        handleSelectionChange(){

        }
    },
}
</script>
