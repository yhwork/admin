<style lang="scss">
    @import '@fullcalendar/core/main.css';
    @import '@fullcalendar/daygrid/main.css';
    @import '@fullcalendar/timegrid/main.css';

    .demo-app {
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
    }

    .demo-app-top {
        margin: 0 0 3em;
    }

    .demo-app-calendar {
        margin: 0 auto;
        max-width: 900px;
    }

    .elrow {
        display: flex;
        flex-flow: nowrap row;
    }
    .elcolum{
        display: flex;
        flex-flow: column wrap;
        // background: #696969;
        position: relative;
        z-index: 999;
    }
    .elmt-2 {
        margin-top: 2rem;
    }

    .color {
        color: #409EFF;
        font-size: 0.78rem;
    }

    .elm-1 {
        padding: 0 8px;
        width: 35px;
        cursor: pointer;
    }

    .elm-2 {
        margin: 0 1rem;
    }

    .elwith {
        width: 100%;
        max-width: 100%;
    }

    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
    }

     .el_paginations{
        padding:1rem 1rem 0 1rem;
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

    .flex4 {
        flex: 4;
    }

    .flex5 {
        flex: 5;
    }

    .ws10 input {
        padding: 0 60px;
        margin-right: 5px;
    }

    .ws30 input {
        padding: 0 80px;
        margin-right: 5px;
    }

    .ws20 input {
        padding: 0 70px;
        margin-right: 5px;
    }

    .ws40 input {
        padding: 0 100px;
        margin-right: 5px;
    }

    .w70 input {
        width: 70%;
        margin-right: 5px;
    }

    .w80 input {
        width: 80%;
        margin-right: 5px;
    }

    .w90 input {
        width: 90%;
        margin-right: 5px;
    }

    /* element UI css updata*/
    .el-select .el-select--large {
        width: 100%;
    }

    .c_red {
        color: orange;
    }

    .selectclass input {
        width: 100%
    }

    .clearselectall {
        font-size: 0.6rem;
        color: #409EFF;
        height: 40px;
        line-height: 35px;
        margin-left: 15px;
    }

        .clearpadding{
            margin-top:2px;
            padding:8px 12px !important;
            margin-left:15px;
        }

    /* .changesselect .el-input {
        width: 80%;
    } */
    /* 
    .changesselect:nth-child(1) .el-select {
        width: 80%;
    }

    .changesselect:nth-child(2) .el-select {
        width: 60%;
    }

    .changesselect:nth-child(3) .el-select {
        width: 80%;
    } */

    .dialog_course {
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1);
        border-radius: 10px;
        overflow: hidden;
        min-width: 530px;
    }
    .dialog_ediecourse{
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .1);
        border-radius: 10px;
        /* overflow: hidden; */
        min-width: 650px;
    }
    .dlogbox {

        display: flex;
        flex-flow: column wrap;
        box-sizing: border-box;
        background-color: white;
    }

    .dialog_course .el-dialog__body {
        padding: 10px 20px 25px 0;
    }

    .dlogboxitem {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 15px 0px 5px 0;
        width: 100%;
        box-sizing: border-box;
    }

    .dlogbox_label {
        padding: 5px 20px 5px 0;
        box-sizing: border-box;
        width: 100px;
        text-align: right;
        /* font-size:0.8rem; */
    }

    .dlogbox_val {
        font-size: 0.8rem;
    }

    .dlogbox_btn {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }

    .dlogbox_tbnitem {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 5px;
        color: #333;
        padding: 5px 10px;
        margin: 25px 15px 5px 15px;
    }

    .font_color {
        color: #75aaec;
    }
    
    .table_border {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #A0C6F0 !important;
    }

    .table_borders {
        border-bottom: 1px solid rgba(0, 0, 0, .5);
        background-color: #CAE1FF !important;
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
    .active_btn {
        color: #75aaec;
        border-color: #75aaec;
    }

    .dlogbox_tbnitem:hover {
        color: #75aaec;
        border-color: #75aaec;
        cursor: pointer;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .inputbox{
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: 5px;
      min-width: 200px;
      height: 40px;
      position: absolute;
      left: 55px;
      display: flex;
      overflow: hidden;
    }
    .inputbox>div{
        width: 100%;
        min-width: 173px;
        height: 40px;
        /* border: 1px solid red; */
      }
    .dialog_ediw{
        min-width: 300px;
        position: relative;
        // z-index: 99;
    }
    .dialog_edieright{
        position: absolute;
        right: 0;
        border-left: 1px solid rgba(0, 0, 0, .2);
        border-top-left-radius: 3px;
    }
    .dialog_edieinfo{
        position: absolute;
        top: 45px;
        /* border: 1px solid red; */
        z-index: 999;
        background-color: white;
        border-radius: 5px;
        box-shadow:0px 0px 1px 1px rgba(0, 0, 0, .2);
    }
    .dialog_ediecourse .el-dialog__footer{
        text-align: center;
    }
    .showmsginfo{
        border-radius: 8px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
        width: 220px;
        height: 250px;
        border: 1px solid rgba(0, 0, 0, .2);
        padding: 10px 5px; 
        position: absolute;
        z-index: 999;
        top:18rem;
        left:3rem;
        /* font-size: 0.8rem; */

    }
    .info_title{
        display:flex;
        justify-content: center;
        background: #409EFF;
    }
    .showmsginfo .dialogss{
        margin: 15px 5px;
    }
    .campus {
        padding: 20px 15px;
        box-sizing: border-box;
    }
    .el_row_center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .m{
        margin: 40px 0px;
        padding: 20px 0px;
    }
    .dialog-footer_btn{
        margin:0 150px
    }

    .newcourse_box .el-input{
        width: auto;
    }
    .newcourse_box_item{
        display:flex;
        max-width: 750px;
        height: 40px;
        /* align-items:flex-start; */
    }
    .inweekcourse{
        display:flex;
        flex-direction: row;
    }
    .inweekcourse .inweekcourse_nchild{
        width: 80px;
        margin:  0 15px;
    }
    .pointer{
        cursor: pointer;
    }
    .newcourse_boxradios{
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 10px;
    }
    .mystyles{
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 10px;
            margin: 5px 2px;
            padding: 15px 10px;
        }
    .fc-time-grid .fc-slats td{
        height:5rem;
    }
        .searchcnt{
        margin-left:2rem;
    }
    .fc-button-primary {
        color: #fff;
        background-color: rgb(154, 158, 161);
        border-color: rgb(205, 220, 235);
    }
    .fc-button-primary:hover{
        background-color: rgb(170, 197, 224);
        border-color: rgb(175, 195, 216);
    }
    .fc-button-primary:not(:disabled):active, .fc-button-primary:not(:disabled).fc-button-active{
        color: #fff;
        background-color:rgb(140, 185, 230);
        border-color: rgb(140, 191, 243);
    }
    .fc-toolbar h2{
        font-size: 1.2rem;
        color: #696969;
    }
    .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .name {
            text-overflow: ellipsis;
            overflow: hidden;
            }
            .addr {
            font-size: 12px;
            color: #b4b4b4;
            }

            .highlighted .addr {
            color: #ddd;
            }
        }
    }
    .myselectweeks{
        display:flex;
        color:#696969;
        // border:1px solid rgba(0,0,0,.1);
        margin:10px 3px;
        
    }
    .showcolors{
        width: 100%;
        display:flex;
        justify-content:flex-end;
        font-size: 0.8rem;
        color: #696969;
        div.right{
            display:flex;
            .items_color{
                margin: 8px 8px;
                padding-bottom: 15px;
                span{
                    display: inline-block;
                    width: 15px;
                    height: 10px;
                    margin-right:5px;
                    border: 1px solid rgba(0, 0, 0, .1);
                }
            }
        }
        
    }
</style>

<template>
    <!--班级-->
   <div class="campus">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="pointer">教务管理</el-breadcrumb-item>
            <el-breadcrumb-item class="pointer"   >
               <div v-if="my_newcourse" class="pointer"   @click="btnnewclass(1)">排课管理</div>
               <div v-else class="pointer"   @click="btnnewclass(2)">新建日程</div>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div v-if="my_newcourse" class="content_box1">
            <div>
                <el-button size='medium' @click="btnnewclass" type="primary">新建日程</el-button>
            </div>
            <!--筛选 -->
           
            <div class="mystyles">
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
                    <div class='elrow elmt-2 selectclass'>

                        <el-form-item label="班级名称">
                            <el-select class="ws20" v-model="ruleForm.classId" value-key="id" placeholder="请选择"
                                @change="changeCategory">
                                <el-option v-for="item in ruleForm.classList" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="所属门店">
                            <el-select class="ws30" v-model="ruleForm.orgId" value-key="id" placeholder="请选择"
                                @change="changeCategory">
                                <el-option v-for="item in ruleForm.orgList" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </div>
                    <div class='elrow changesselect'>

                        <el-form-item label="教师名称" >
                            <el-select v-model="ruleForm.techerId" value-key="id" placeholder="请选择" @change="changeCategory">
                                <el-option v-for="item in ruleForm.techerList" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="教室" >
                            <el-select size="large" v-model="ruleForm.roomId" value-key="id" placeholder="请选择"
                                @change="changeCategory">
                                <el-option v-for="item in ruleForm.roomList" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <div class="elrow">
                            <div>
                                <el-button  @click='searchcnt' class="clearpadding" type="primary" plain>筛选</el-button>
                            </div>
                            <div>
                                <el-button class="clearpadding" type="primary" plain>清楚筛选条件</el-button>
                            </div>
                        </div>
                    </div>
                </el-form>
            </div>
         
            <!-- 课程日历显示 -->
            <div class="container mystyles" >
                <div class='showcolors'>
                    <div class="right">
                         <div v-for="(item, index) in bgcolorList" :key="index">
                        <div class="items_color"><span :style="'background-color:'+item.color"></span>{{item.name}}</div>
                    </div>
                    </div>
                   
                </div>
                <FullCalendar :plugins="calendarPlugins" :all-day-slot="false" 
                            :header="{
                                left:'prev,next today',          
                                center:'title myCustomButton',   
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }"
                            aspectRatio ='2'
                            slot-event-overlap="false"
                            handleWindowResize='true'   
                            :buttonText="buttonText"
                            weekNumbers="true"
                            :events="monthdata"
                           :button-text="{
                            today: '今天'
                          }" 
                          :unselect-auto="false" 
                          :select-overlap="false" 
                          :business-hours="{
                            startTime: '07:00',
                            endTime:'18:00',
                            daysOfWeek: [ 1, 2, 3, 4, 5, 6, 0 ]
                          }"
                           ref="fullCalendar"
                           eventLimitText="查看更多"
                           eventLimit="true"
                           @eventLimitClick='morealert'
                    :height ='1000'
                    :contentHeight='1000'
                    :select-allow="handlerSeelctAllow"
                    select-mirror="true"
                    min-time="07:00:00"
                    max-time="23:00:00"
                    selectable="true"
                    slot-duration="00:30"
                    slot-label-format="HH:mm"
                    title-format="YYYY年MM月D日"
                    default-view="timeGridWeek"
                    locale="zh-cn"
                    @selectAllow='handselectAllow'
                    @eventClick="compilecnt"
                    @dateClick="handleDateClick"
                    @eventDrop= 'moveDateClick'
                    @select="handleSelectdate"
                    @eventMouseEnter="handMouseEnter"
                    @eventMouseLeave="handMouseLeave "
                    @dayClick="createcnt"
                     />
                     <!-- <full-calendar
                     :config="config"
                     :events="events"
                     :plugins="calendarPlugins"
                    @selectAllow='handselectAllow'
                    @eventClick="compilecnt"
                    @dateClick="handleDateClick"
                    @select="handleSelectdate"
                    @eventMouseEnter="handMouseEnter"
                    @eventMouseLeave="handMouseLeave "
                    @dayClick="createcnt"
                   ></full-calendar> -->
            </div>
            <!-- 日程弹框 -->
            <el-dialog title="新建日程"  custom-class='dialog_course' top="25vh" width="35%" left
                    :visible.sync="dialogcourseVisible">
                    <div class="dlogbox">
                        <div v-for="(item, index) in coursebox" :key="index">
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">上课时间:</label>
                                <div class="dlogbox_val">{{item.startDatetime}}--{{item.endDatetime}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">班级:</label>
                                <div class="dlogbox_val font_color">{{item.className}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">教师:</label>
                                <div class="dlogbox_val">{{item.teacherName}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">门店:</label>
                                <div class="dlogbox_val">{{item.orgName}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">教室:</label>
                                <div class="dlogbox_val">{{item.roomName}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">课程:</label>
                                <div class="dlogbox_val">{{item.courseName}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">实到/应到:</label>
                                <div class="dlogbox_val">{{item.joinNum}}/{{item.num}}</div>
                            </div>
                        </div>
                        <div class="dlogbox_btn">
                            <div class="dlogbox_tbnitem" v-for="(item, index) in coursebtnlist"
                                :class="item.id == 5?'active_btn':''" @click='btnchange(item.id)' :key="index">
                                <div class="dlogbox_tbns" v-text="item.name"></div>
                            </div>
                        </div>
                    </div>
            </el-dialog>
            <!-- 编辑日程嵌套弹框 -->
            <el-dialog :title="isnewcreate?'新建日程':'编辑日程'"  custom-class='dialog_ediecourse' top="10vh"
                width="45%" left :visible.sync="dialoginfoVisible" :close-on-click-modal='false'>
                <div @click.stop="changeshowbox">
                    <el-form  class="edit_schedule" :model="form" :rules="rules">
                    <!--  <el-form-item label="所属门店：" :label-width="formLabelWidth" prop="techername">
                         <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch"
                                placeholder="请输入内容" @select="handleSelectinClass">
                                <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
                                </i>
                                <template slot-scope="props">
                                    <div class="name">{{ props.item.name }}</div>
                                    <span class="addr">{{ props.item.orgName }}</span>
                                </template>
                            </el-autocomplete>  
                    </el-form-item>-->
                    <el-form-item label="所属门店" :label-width="formLabelWidth">
                        <div class="elrow">
                            <el-select size='large' v-model="form.orgId" value-key="id"
                                placeholder="请选择" @change="changeorgList">
                                <el-option v-for="(item,index) in form.orgList" :label="item.name" :key="index"
                                    :value="item.orgId">
                                </el-option>
                            </el-select>
                           
                        </div>
                    </el-form-item>

                    <el-form-item label="上课日期：" :label-width="formLabelWidth" >
                        <el-date-picker 
                            v-model="form.startDate" type="date"
                            placeholder="选择日期" 
                            :picker-options='pickerOptionstarts'
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="上课时间段：" :label-width="formLabelWidth">
                        <el-time-select placeholder="起始时间" v-model="form.startTime" :picker-options="{
                                                start: '08:30',
                                                step: '00:15',
                                                end: '18:30'
                                                }">
                        </el-time-select>
                        <el-time-select placeholder="结束时间" v-model="form.endTime"  :readonly="true" :picker-options="{
                                                start: '08:30',
                                                step: '00:15',
                                                end: '18:30',
                                                minTime: form.startTime
                                                }">
                        </el-time-select>
                    </el-form-item>
                    <div class="elcolum">
                        <div class="elrow flex1">
                            <div class="dialog_ediw">
                                <el-form-item label="老师" :label-width="formLabelWidth">
                                    <div  @click.stop="isshowtecher(1)" class="inputbox">
                                        <el-input
                                            :readonly='true'
                                            placeholder="请输入内容"
                                            suffix-icon="el-icon-edit"
                                            v-model="form.teacherName">
                                        </el-input>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-if='showtecher==1?true:false'>
                                        <el-table :data="form.teacherList" style="width: 100%" @row-click ='tableindex' :row-class-name="changetable"
                                            max-height="250">
                                             <!--<el-table-column  prop="date" label="日期" width="100">
                                               <template slot-scope="scope">
                                                    <div>
                                                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                                    </div>
                                                </template> 
                                            </el-table-column> -->
                                            <el-table-column  prop="name" label="姓名" width="120">
                                            </el-table-column>
                                           <el-table-column  prop="phone" label="手机号" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="dialog_ediw">
                                <el-form-item label="班级" :label-width="formLabelWidth" >
                                    <div @click.stop="isshowtecher(4)" class="inputbox">
                                        <el-input
                                            :readonly='true'
                                            placeholder="请输入内容"
                                            v-model="form.className">
                                        </el-input>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-if='showtecher==4?true:false'>
                                        <el-table :data="form.classList" style="width: 100%"  @row-click='tableindex' :row-class-name="changetable"
                                            max-height="250">
                                            <el-table-column prop="name" label="班级名称" width="280">
                                            </el-table-column>
                                            
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="elrow flex1">
                            <div class="dialog_ediw">
                                <el-form-item label="教室" :label-width="formLabelWidth">
                                    <div @click.stop="isshowtecher(2)" class="inputbox">
                                        <el-input
                                            :readonly='true'
                                            placeholder="请输入内容"
                                            v-model="form.roomName">
                                        </el-input>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-if='showtecher==2?true:false'>
                                        <el-table :data="form.roomList" style="width: 100%" @row-click ='tableindex' :row-class-name="changetable"
                                            max-height="250">
                                            <el-table-column label="姓名" width="100">
                                                <template slot-scope="scope">
                                                    <div>
                                                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                                    </div>
                                                </template> 
                                            </el-table-column>
                                            <el-table-column prop="num" label="容纳人数" width="70">
                                            </el-table-column>
                                            <el-table-column prop="orgName" label="所在机构" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="dialog_ediw">
                                <el-form-item label="课程" :label-width="formLabelWidth">
                                    <div @click.stop="isshowtecher(3)" class="inputbox">
                                        <el-input
                                            :readonly='true'
                                            placeholder="请输入内容"
                                            v-model="form.courseName">
                                        </el-input>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-if='showtecher==3?true:false'>
                                        <el-table :data="form.courseList" style="width: 100%"  @row-click='tableindex' :row-class-name="changetable"
                                            max-height="250">
                                            <el-table-column prop="name" label="课程名称" width="100">
                                            </el-table-column>
                                            <el-table-column prop="courseSubjectName" label="课程类别" width="100">
                                            </el-table-column>
                                            <el-table-column prop="statusName" label="课程状态" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                </el-form>
                </div>
                
                <div slot="footer" class="dialog-footer ">
                    <el-button @click="saveiedData(0)">取 消</el-button>
                    <el-button type="primary" @click="saveiedData(isnewcreate)">保存
                    </el-button>
                </div>
            </el-dialog>
            <!-- 鼠标滑过显示 -->
            <div v-if="dialogalert" ref="reference_msgbox">
                <div class="showmsginfo">
                    <div v-for="(item, index) in showmsginfo" :key="index">
                        <div class="info_title" style="text-align: center">课程信息</div>
                        <div class="dialogss">开始:<span>{{item.startdate}}</span>{{item.starttime}}</div>
                        <div class="dialogss">结束:<span>{{item.enddate}}</span>{{item.endtime}}</div>
                        <div class="dialogss">教师:<span>{{item.techername}}</span></div>
                        <div class="dialogss">教室:<span>{{item.classadress}}</span></div>
                        <div class="dialogss">科目:<span>{{item.type}}</span></div>
                        <div class="dialogss">实到/应到:<span>{{item.sum}}</span></div>
                    </div>
                </div>
            </div>
            <!-- 课程提醒 -->
        </div>
        <!-- 新建日程 -->
        <div v-else class="content_box1">
            <el-form class="newcourse_box" :model="newDateForm" :rules="rules">

                <el-form-item label="班级名称"  :required="true">
                        <div class="newcourse_box_item">
                            <el-autocomplete
                                popper-class="my-autocomplete"
                                v-model="newDateForm.className"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入内容"
                                @blur="outselectclass"
                                @select="handleSelectClass">
                                    <i
                                        class="el-icon-search el-input__icon"
                                        slot="suffix"
                                        @click="handleIconClick">
                                    </i>
                                    <template slot-scope="props">
                                        <div class="name">{{ props.item.name }}</div>
                                        <span class="addr">{{ props.item.orgName }}</span>
                                    </template>
                            </el-autocomplete>
                        </div>
                </el-form-item>

                <el-form-item label="所属课程"   :required='true'>
                        <div class="newcourse_box_item">
                            <el-select size='large' :disabled="true" v-model="newDateForm.courseName" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="item in categoryList" :label="item.courseName" :key="item.id" :value="item.courseId">
                                </el-option>
                            </el-select>
                        </div>
                        
                </el-form-item>
                
                <el-form-item label="开课日期"  prop="startDate">
                    <div class="newcourse_box_item">
                            <el-date-picker
                            v-model="newDateForm.startDate"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            @change="newchangestartDate"
                            :picker-options='pickerOptionstart'
                            @blur='outmourse(1)'
                            value-format="yyyy-MM-dd">
                          </el-date-picker>
                          <!-- <div class="inweekcourse">
                              <div class="inweekcourse_nchild">星期数</div>
                              <el-input v-model="newDateForm.weekday" auto-complete="off"></el-input>
                          </div> -->
                    </div>
                </el-form-item>

                <el-form-item label="上课时间" prop="startTime">
                        <div class="newcourse_box_item">
                                <el-time-select
                                    v-model="newDateForm.startTime"
                                   
                                    :picker-options="{
                                        start: '07:30',
                                        step: '00:15',
                                        end: '18:30'
                                    }"
                                    @blur='outmourse(2)'
                                   
                                    @change="newchangestartTime"
                                    placeholder="选择时间"
                                    >
                                </el-time-select>
                        </div>
                </el-form-item>
                <el-form-item label="下课时间"  prop="endTime">
                        <div class="newcourse_box_item">
                                <!-- <el-date-picker
                                v-model="newDateForm.endTime"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                              </el-date-picker> -->
                                <el-time-select
                                    placeholder="下课时间"
                                    v-model="newDateForm.endTime"
                                     :readonly="true"
                                    :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30',
                                    minTime: startTime
                                    }">
                                </el-time-select>
                        </div>
                </el-form-item>
                <el-form-item label="课程总次数" :label-width="formLabelWidth" prop="count">
                        <div class="newcourse_box_item">
                            <el-input  :disabled='true' v-model="newDateForm.count" @blur='outmoursecount' auto-complete="off"></el-input>
                        </div>
                </el-form-item>
                <el-form-item label="课程总数量" :label-width="formLabelWidth" prop="count">
                        <div class="newcourse_box_item">
                            <el-input  :disabled='true' v-model="newDateForm.number" @blur='outmoursecount' auto-complete="off"></el-input>
                        </div>
                </el-form-item>
                <el-form-item label="课程时长" :label-width="formLabelWidth" prop="coursetime">
                        <div class="newcourse_box_item">
                         <el-input :disabled='true' v-model="newDateForm.coursetime" @blur='outmoursecount' auto-complete="off"></el-input>
                           <!-- <el-select size='large' v-model="newDateForm.coursetime" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="item in coursetimelist" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>  -->
                        </div>
                </el-form-item>

                <el-form-item label="设置重复" :label-width="formLabelWidth" :required='true'>
                    <div class="newcourse_box_item">
                                <el-radio-group class="newcourse_boxradios" v-model="newDateForm.checkListstate" @change='setrecove'>
                                        <el-radio :label="0">每天</el-radio>
                                        <el-radio :label="1">每周</el-radio>
                                        <el-radio :label="2">每两周</el-radio>
                                        <el-radio :label="3">每月</el-radio>
                                        <el-radio :label="4">不重复</el-radio>
                                </el-radio-group>
                    </div>
                     <div v-show="isselectweeks" class="myselectweeks">
                               <div><p>设置择重复星期 </p></div>
                                <div style='margin-left:15px'>
                                <div>
                                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                    <el-checkbox-group class="" v-model="newDateForm.checkListData" @change="handleCheckedCitiesChange">
                                        <el-checkbox v-for="(item,index) in newDateForm.weekdays" :label="item" :key="index">{{item}}</el-checkbox>
                                    </el-checkbox-group>
                                </div>
                                <div  v-if="newDateForm.checkListstate==2?true:false">
                                    <el-checkbox-group  v-model="newDateForm.checkListData1" @change="handleCheckedCitiesChange1">
                                        <el-checkbox v-for="(item,index) in newDateForm.weekdays" :label="item" :key="index">{{item}}</el-checkbox>
                                    </el-checkbox-group></div>
                                </div>
                    </div>
                    <div v-show="newDateForm.checkListstate==3?true:false">
                                <div  class=" myselectweeks">
                                    <p>设置择重复日期 </p>
                                    <div  style='margin-left:15px'>
                                        <el-date-picker
                                                v-model="newDateForm.setrecoverTime"
                                                type="date"
                                                placeholder="选择日期"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                :picker-options='pickerOptionsOS'
                                                @change='recoverTime'
                                                >
                                            
                                        </el-date-picker>
                                    </div>
                                </div>
                                <div  style='margin-left:15px'>
                                 <el-tabs v-model="newDateForm.editableTabsValue2" type="card" closable @tab-remove="removeTab">
                                        <el-tab-pane
                                            v-for="(item, index) in newDateForm.editableTabs2"
                                            :key="index"
                                            :label="item.title"
                                            :name="item.name"
                                        >
                                           <!-- {{item.content}}  -->
                                        </el-tab-pane>
                                    </el-tabs>
                                    
                                </div>
                    </div>
                </el-form-item>
                <el-form-item label="结课日期"  >
                        <div class="newcourse_box_item">
                                <el-date-picker
                                v-model="newDateForm.endDate"
                                type="date"
                                placeholder="选择日期"
                                :disabled='true'
                                format="yyyy 年 MM 月 dd 日"
                                @blur='outmourseendDate'
                                value-format="yyyy-MM-dd">
                              </el-date-picker>
                              <div class="inweekcourse">
                                  <div class="inweekcourse_nchild">星期数</div>
                                  <el-input :disabled='true' v-model="newDateForm.weekday" auto-complete="off"></el-input>
                              </div>
                        </div>
                </el-form-item>
                <el-form-item label="上课门店" :label-width="formLabelWidth" prop="department">
                    <div class="newcourse_box_item">
                        <el-select :disabled='true' size='large' v-model="newDateForm.courseShop" value-key="id" placeholder="请选择"
                            @change="newchangeCategory">
                            <el-option v-for="item in categoryList" :label="item.name" :key="item.id" :value="item.id">
                            </el-option>
                        </el-select>
                      
                    </div>
                </el-form-item>

                <el-form-item label="上课教室" :label-width="formLabelWidth" prop="classroom">
                        <div class="newcourse_box_item">
                                <el-select :disabled='true' size='large' v-model="newDateForm.classroom" value-key="id" placeholder="请选择"
                                    @change="newchangeCategory">
                                    <el-option v-for="item in coursetimelist" :label="item.name" :key="item.id" :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                </el-form-item>

                <el-form-item label="授课讲师" :label-width="formLabelWidth" :required='true'>
                    <div class="newcourse_box_item">
                        <el-select size='large' :disabled="true" v-model="newDateForm.techerName" value-key="id" placeholder="请选择"
                            @change="newchangeCategory">
                            <el-option v-for="item in categoryList" :label="item.name" :key="item.id" :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-form-item>

                <el-form-item label="教师助理" :label-width="formLabelWidth" >
                        <div class="newcourse_box_item">
                            <el-select size='large' :disabled="true" v-model="newDateForm.helpTecher" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="item in categoryList" :label="item.name" :key="item.id" :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                </el-form-item>

            </el-form>
            <div><vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1"  :logoScale="0.2" :size="200"/></div> 
            <div class="dialog-footer el_row_center m ">
                <el-button class="dialog-footer_btn" @click="newSaveCourse(0)">取 消</el-button>
                <el-button  class="dialog-footer_btn" type="primary" @click="newSaveCourse">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import {addCourseArrange,getClassList,getCourseInfoByClassId,getAllCourseTime,delCourseTime,finishCourseTime,getCourseTimeDetails,updateCourseTime,addCourseTime} from '@/api/demo'
    import moment from 'moment';
    import { Calendar } from '@fullcalendar/core';
    import FullCalendar from '@fullcalendar/vue'
    // import { FullCalendar } from 'vue-full-calendar'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlulgin from '@fullcalendar/timegrid'
    import '@fullcalendar/core/locales/zh-cn'           // 支持中文
    import momentPlugin from '@fullcalendar/moment'     // 日期时间
    import interactionPlugin from '@fullcalendar/interaction';
    import vueQr from 'vue-qr'
    export default {
        name: 'scheduling',
        props: [],
        data() {
            return {
                isnewcreate:false,
                bgcolorList:[
                    {
                        color:'#5BC377',
                        name:'待上课'
                    },
                    {
                        color:'#347AB7',
                        name:'已上课'
                    },
                    {
                        color:'#FFB51F',  // 黄色
                        name:'冲突课程'
                    },
                    // {
                    //     color:'#129CA9',
                    //     name:'我的日程'
                    // }
                    
                ],
                somecourseId:'',   // 单机的id
                checkAll:false,   // 全选
                isIndeterminate:false,  //选择标记
                events: [{
                    title: '事件内容',  // 事件内容
                    start: '2019-08-7 09:00:00', // 事件开始时间
                    end: '2019-08-7 12:00:00',   // 事件结束时间
                    color: 'rgba(9, 9, 9, 0.2)'       // 事件的显示颜色
                }],
                config: {
                    header: {  
                        left: 'prev,next today',            //上一页、下一页、今天  
                        center: 'title myCustomButton',     //居中：时间范围区间标题  
                        right: 'month,agendaWeek,agendaDay,listWeek'    //右边：显示哪些视图  
                    },  
                    buttonText: { today: "今天", month: "月", week: "周", day: "日" },
                    locale: "zh-cn",
                    editable: true, //是否允许修改事件
                    selectable: false,
                    eventLimit: 4, //事件个数
                    allDaySlot: false, //是否显示allDay
                    defaultView: "month", //显示默认视图
                    eventClick: this.eventClick, //点击事件
                    dayClick: this.dayClick, //点击日程表上面某一天
                },
                isselectweeks:false,
                buttonText: {
                    today: '今天',
                    month: '月',
                    week: '周',
                    day: '天' 
                },
                monthdata:[
                            {
                              title: '计算机学院小组会议',
                              start: '2019-08-20 10:00:00',
                              end: '2019-08-20 12:00:00',
                              color:'orange',
                              id:0,
                            },
                            {
                                title: '计算机学院小组会议',
                                start: '2019-08-21 10:00:00',
                                end: '2019-08-21 11:00:00',
                                editable:true,    // 可以编辑
                                textColor:'red',
                                color:'green',
                                id:1,
                            },
                            {
                                title: '计算机学院小组会议132135454654654654645',
                                start: '2019-08-20 10:00:00',
                                end: '2019-08-20 11:00:00',
                                color:'orange',
                                id:2,        
                            },
                            {
                              start: '2019-08-20 13:00:00',
                              end: '2019-08-20 14:00:00',
                              title: '东南大学计算机学术会议',
                              color:'green',
                              id:3,
                            }
                          ],
                // 二维码生成
                downloadData: {
                    url: 'https://element.eleme.cn/2.0/#/zh-CN/component/input',  //需要转化成二维码的网址
                    // icon: require('./xxx.jpg')  //二维码中间的图片,可以不设置
                },
                coursetimelist:[
                    {name:'20分钟',id:1},
                    {name:'30分钟',id:2},
                    {name:'40分钟',id:3},
                    {name:'50分钟',id:4},
                    {name:'1小时',id:5},
                ],  //课程时长
                my_newcourse:true,   // 日程管理和新建日程切换
                startTime:'',  //开始时间
                endTime:'',    // 结束时间
                value11:'',// 上课时间
                showmsginfo: [
                    {
                        startdate: '2019-07-24',
                        enddate: '2019-07-24',
                        starttime: '09:00',
                        endtime: '17:00',
                        classadress: '地址',
                        classroom: '1067班',
                        techername: '杨老师',
                        type: '英语',
                        sum: '0/4',
                    }
                ],
                coursebtnlist: [
                    { name: "取消", id: 1 },
                    { name: "编辑单次", id: 2 },
                    { name: "编辑重复", id: 3 },
                    { name: "删除", id: 4 },
                    { name: "记上课", id: 5 },
                ],
                coursebox: [
                ],
                dialoginfoVisible: false,
                dialogFormVisible: false,   // 显示新建日程对话框
                dialogcourseVisible: false, // 课程日历对话框 
                // 对话框表单内容
                checkList: ['选中且禁用', '一对一'],
                form: {
                    name: "",
                    startTime:'',
                    endTime:'',
                    startDate:'', // 上课是时间

                    orgId:0,
                    orgName:'',
                    orgList:[
                        {name:'请选择',orgId:0}
                    ],
                    teacherId:"",
                    teacherName:'',
                    teacherList:[],

                    courseName:'',
                    courseId:'',

                    classId:'',
                    className:'',
                    classList:[],

                    roomId:'',
                    roomName:'',
                },
                dialogalert:false,
                showtecher:0, // 编辑显示
                categoryList: [], // 下拉列表
                formLabelWidth: '180',
                rules: {
                    title: [
                        { required: true, message: "请输入产品名称", trigger: "blur" },
                        { max: 50, message: "最多50字" }
                    ],
                    classnames:[{ required: true, message: "请输入教室名称", trigger: "blur" }],
                    galleryful: [{ required: true, message: "请输入最大容纳人数", trigger: "blur" }],
                    techername: [{ required: true, message: "请输入教师名称", trigger: "blur" }],
                    roomId:[{ required: true, message: "请输入教室名称", trigger: "blur" }],
                    department: [{ required: true, message: "请输入所属门店", trigger: "blur" }],
                    // 新建提醒
                    startDate:[{ required: true, message: "请输入开课日期", trigger: "blur" }],
                    endDate:[{ required: true, message: "请输入结课日期", trigger: "blur" }],
                    startTime:[{ required: true, message: "请输入开始时间", trigger: "blur" }],
                    endTime:[{ required: true, message: "请输入结束时间", trigger: "blur" }],
                    classroom:[{ required: true, message: "请输入教室名称", trigger: "blur" }],
                    helpTecher:[{ required: true, message: "请输入教师助理", trigger: "blur" }],
                    coursetime:[{ required: true, message: "请输入课程时长", trigger: "blur" }],
                    count:[{ required: true, message: "请输入课程次数", trigger: "blur" }],
                    checkList:[{ required: true, message: "请选择重复", trigger: "blur" }]
                },
                // 日历
                calendarWeekends: true,
                calendarPlugins: [dayGridPlugin, timeGridPlulgin, momentPlugin, interactionPlugin],
                // 随时判断时间是否合法，通过返回true/false来判断是否能够选择
                handlerSeelctAllow: info => {
                    // const currentDate = new Date()
                    // const start = info.start
                    // const end = info.end
                    // return (start <= end && start >= currentDate)
                    return true
                },
                // 班级全部列表
                restaurants: [],
                state3: '',
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                timeout:null,
                                // 筛选   
                ruleForm: {
                    classId:0,
                    roomId:0,
                    orgId:0,
                    techerId:0,
                    techerList:[
                       {
                        name:'请选择',
                        id:0
                       }
                    ],
                    orgList:[
                        {
                        name:'请选择',
                        id:0
                       }
                    ],
                    roomList:[
                        {
                        name:'请选择',
                        id:0
                       }
                    ],
                    classList:[
                        {
                        name:'请选择',
                        id:0
                       }
                    ],
                },
                pickerOptionstarts:{
                    disabledDate: (time) => {                          
                        const one = 30 * 24 * 3600 * 1000;
                        const minTime =  Date.now();
                        const maxTime = minTime+ one;
                        //获取本日
                        const startDate = moment(time,'YYYY-MM-DD').subtract(1,'day').valueOf(); 
                        return time.getTime() <= startDate 
                    }
                },
                pickerOptionstart:{
                     disabledDate: (time) => {                          
                        const one = 30 * 24 * 3600 * 1000;
                        const minTime =  Date.now();
                        const maxTime = minTime+ one;
                        //获取本日
                        const startDate = moment().subtract(1,'day').valueOf(); 
                        return time.getTime() <= startDate 
                    }
                },
                pickerOptionsOS: {
                    // 在选择范围内可以用
                    // onPick: ({maxDate, minDate}) => {
                    //         this.newDateForm.setrecoverTime= minDate.getTime();
                    //         if (maxDate) {
                    //             newDateForm.setrecoverTime= ''
                    //         }
                    // },
                    disabledDate: (time) => {                          
                        const one = 30 * 24 * 3600 * 1000;
                        const minTime =  Date.now();
                        const maxTime = minTime+ one;
                        let times = this.newDateForm.startDate;
                       
                        //获取本日
                        // const startDate = moment().format('YYYY-MM-DD'); 
                        // const startDate = moment().format('YYYY-MM-DD');
                        //获取本周
                        // const startDate = moment().week(moment().week()).startOf('week').format('YYYY-MM-DD');   //这样是年月日的格式
                        // const endDate = moment().week(moment().week()).endOf('week').valueOf(); //这样是时间戳的格式
                        //获取指定月的开始和结束 
                        // const startDate = moment(times,'YYYY-MM-DD').startOf('month').valueOf();
                        // const endDate = moment(times,"YYYY-MM-DD").endOf('month').valueOf();
                        //获取本年
                        // const startDate = moment().year(moment().year()).startOf('year').valueOf();
                        // const endDate = moment().year(moment().year()).endOf('year').valueOf();
                        // 一个月内的日期
                        // return time.getTime() < minTime || time.getTime() > maxTime
                        // 利用 moment 前一个月和下一个月范围
                        // return time.getTime() < moment(time).subtract(1,'month').valueOf() || time.getTime() >  moment(time).subtract(1,'month').valueOf()
                          return time.getTime() <=  moment(times,'YYYY-MM-DD').valueOf() || time.getTime() >  moment(times,'YYYY-MM-DD').add(1,'month').valueOf()
                        // 月初和月末
                        // return time.getTime() < startDate || time.getTime() > endDate
                    }

                },
                // 新建排课表单
                newDateForm:{
                    setrecoverTime:'', // 设置时间的
                    className:'',      // 班级名称
                    startDate:'',      // 开课日期
                    weekday:'',        // 星期数
                    courseName:'',     // 课程名称
                    startTime:'',      // 上课时间
                    helpTecher:'',     // 助教
                    techerName:'',     // 老师
                    classroom:'',      // 班级
                    courseShop:'',     // 门店
                    endTime:'',        // 结束时间
                    endDate:'' ,       // 杰克日期
                    coursetime:'',     // 课程时长
                    count:'',          // 课程次数
                    number:'',         // 课程数量
                    checkListstate:0,  // 多选状态
                    checkList:[],      // 每两周列表数据         
                    checkListData:[],  // 每周数据
                    courseDateList:{
                           startTime:'',
                           endTime:'',
                           startDate:'',        // 开始时间
                           endDate:'',     // 结束时间
                           weekNum:'',     // 有几周
                           courseDate:'',    // 上课时间列表
                           repeatRule:'',   // 选中状态
                           repeatWeek:'',           // 选中列表
                           storeClassId:'',
                    },     // 所有上课时间的列表
                    checkListData1:[], 
                    weekdays:['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],  // 总星期数
                    tabIndex:0,             // 控制标签的数量
                    editableTabsValue2:'',  // 默认标签显示的时间
                    editableTabs2: [        // 每月日期的标签栏
                    ],
                }
            }
        },
        watch: {
        },
        mounted() {
            this.restaurants = this.loadClassAll();
        },
        activated(){
            this.getAllCourseList();
        },
        created() {
            this.getAllCourseList();
            var a= moment().add(1,'month').format('YYMM').valueOf() 
            console.log(a)
            // document.addEventListener('DOMContentLoaded', function() {
            //     console.log('加载完程')
            //      calendarEl = document.getElementById('calendar');
            //      calendar = new Calendar(calendarEl, {
            //         plugins: [ dayGridPlugin ]
            //     });
            //     console.log('22',calendar)
            //     calendar.render();
            // });
            // calendar.on('dateClick', function(info) {
            //     console.log('clicked on ' + info.dateStr);
            // });
            // var calendarApi = this.$refs.fullCalendar
            // console.log('获取实例', calendarApi)
            // calendarApi.next()
        },
                    /**
                     'windowResize',
                'dateClick',
                'eventClick',
                'eventMouseEnter',
                'eventMouseLeave',
                'select',
                'unselect',
                'loading',
                'eventPositioned',
                '_eventsPositioned',
                'eventDragStart',
                'eventDragStop',
                'eventDrop',
                'eventResizeStart',
                'eventResizeStop',
                'eventResize',
                'drop',
                'eventReceive',
                'eventLeave',
                '_destroyed',
                // should now be props... (TODO: eventually remove)
                'datesRender',
                'datesDestroy',
                'dayRender',
                'eventRender',
                'eventDestroy',
                'viewSkeletonRender',
                'viewSkeletonDestroy',
                'resourceRender'
                    */
        methods: {
            // 点击哪一行
            tableindex(row, e) {
                let state = this.showtecher;
                if(state==1){      // 老师
                    this.form.teacherId=row.id;
                    this.form.teacherName = row.name;
                }   
                if(state == 2){     // 教室
                    this.form.roomName=row.name;
                    this.form.roomId = row.id;
                }
                if(state == 3){     // 课程
                    this.form.courseName=row.name;
                    this.form.courseId = row.id;
                    // 计算下课时间
                    // this.form.startTime 
                    let onceTime = row.onceTime;       // 一天几次课
                    let lessonTime = row.lessonTime;   // 一节课多少时间
                    this.form.endTime = moment(this.form.startTime,'HH:mm').add( onceTime * lessonTime,'minute').format('HH:mm');
                    console.log('结束日期',this.form.endTime)
                    // var alltime =  moment({ hour:time.split(':')[0], minute:time.split(':')[1] }).add({minute:daytime}).format('hh:mm')
                }
                if(state == 4){    // 班级
                    this.form.className=row.name;
                    this.form.classId = row.id;
                }
                console.log(row,state)
                // this.tb_idnex=e.index;
            },
            // 改变表格
            changetable(e) {
                if (e.rowIndex % 2 == 0) {
                    return "table_borders"

                } else {
                    return "table_border"
                }
            },
            // 获取所有对课程表
            getAllCourseList(){
                getAllCourseTime().then(res=>{
                    console.log('参数',res.result);
                    this.monthdata=res.result;
                })
            },
            // 新建班级查询
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results)
            },
            // 过滤班级
            createFilter(queryString) {
                console.log('过来',queryString)
                return (restaurant) => {
                    return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            // 加载全部班级
            loadClassAll() {
                // 先获取班级列表
                let arr = []
                getClassList().then(res=>{
                    if(res.result!=='' && res.result !== undefined && res.result !== null){
                        let {list} = {...res.result}
                        list.map(i=>{
                            let obj ={
                                name:i.name,
                                orgName:i.orgName,
                                id:i.id,
                            }
                            arr.push(obj)
                        })
                        console.log('班级列表',arr);
                    }
                })
                return arr;
                // return [
                // {  
                //     className:'软件设计A',     // 班级名称
                //     startDate:'',     // 开课时间
                //     weekday:'',       // 星期数
                //     cousreName:'java程序设计',    // 课程名称
                //     startTime:'',     //上课时间
                //     helpTecher:'李老师',    // 助教
                //     techerName:'杨老师',    // 老师
                //     classroom:'软件1607班',     // 教室
                //     courseShop:'职场教育',     //门店
                //     endTime:'',        // 结束时间
                //     endDate:'',        // 结束日期
                //     coursetime:20,     // 课程时长
                //     count:4,           // 课程次数
                //     number:30,         // 课时数量
                //     checkList:0        //重复多选,
                // },
            },
            // 鼠标离开事件
            outselectclass(){
                var time = null;
                this.rules.classnames[0].required=false
                time = setTimeout(()=>{  
                      if(!this.newDateForm.className){
                             return this.$message({
                                type:'warning',
                                message:'请选择班级'
                            })
                      }
                },1000)
            },
            // 保存新建
            newSaveCourse(args){
                if(args ===0){
                    return this.my_newcourse = true
                }
                var data = JSON.parse(JSON.stringify(this.newDateForm.courseDateList))
                console.log('保存内容',data);
                if(data.length !==0){
                    let {courseDate,startDate,endDate,startTime,endTime,weekNum,repeatRule,repeatWeek,storeClassId} = data
                    let params = { courseDate:courseDate.join(','),startDate,endDate,startTime,endTime,weekNum,repeatRule,repeatWeek:JSON.stringify(repeatWeek),storeClassId }
                    
                    addCourseArrange(params).then(res=>{
                        if(res.errorCode==0){
                            this.getAllCourseList()     // 刷新课程表
                            console.log('保存成功',res)
                            this.$message({type:'success',message:'保存成功'});
                            // 返回显示界面
                            this.my_newcourse = true;
                            this.newDateForm.courseName = '';
                            // this.newDateForm.helpTecher = item.helpTecher;
                            this.newDateForm.techerName = '';
                            this.newDateForm.classroom = '';
                            this.newDateForm.courseShop ='';
                            this.newDateForm.coursetime ='';
                            this.newDateForm.number =  '';
                            this.newDateForm.count = '';
                            // 默认显示每天
                            this.newDateForm.checkListstate=0;
                            // 选中的列表
                            this.newDateForm.checkList=[];      // 每两周列表数据         
                            this.newDateForm.checkListData=[];  // 每周数据
                            this.newDateForm.editableTabs2=[];
                            // 有多少周
                            this.newDateForm.weekday = "";
                            this.newDateForm.startDate = '';
                            this.newDateForm.endDate = "";
                            this.newDateForm.startTime='';
                            this.newDateForm.endTime = "";
                        }
                       
                    })
                }
            },
            // 添加日期
            recoverTime(e) {
                 var count = this.newDateForm.count;    // 总次数
                if(e &&  this.newDateForm.editableTabs2.length < count){
                    console.log('增加标签',e)
                    let newTabName = ++this.newDateForm.tabIndex + '';
                    let title =moment(e).format("YYYY-MM-DD")
                    let obj ={
                        title: title,
                        name: newTabName,
                        content: title
                    }
                    this.newDateForm.editableTabs2.push({
                        title: title,
                        name: newTabName,
                        content: title
                    });
                    this.overDate(this.newDateForm.checkListstate);
                    this.newDateForm.editableTabsValue2 = newTabName;
                }else{
                     return this.$message({type:'warning',message:`重复日期超出指定次数   ${count}，请重新选择`})
                }
                
            },
            removeTab(targetName) {
                let tabs = this.newDateForm.editableTabs2;
                console.log('标签',tabs)
                let activeName = this.newDateForm.editableTabsValue2;
                // console.log('当前标签',activeName)
                if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.name;
                    }
                    }
                });
                }
                
                this.newDateForm.editableTabsValue2 = activeName;
                //  console.log('当前标签2', this.newDateForm.editableTabsValue2)
                this.newDateForm.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
                // console.log('标签2',this.newDateForm.editableTabs2)
                this.overDate(this.newDateForm.checkListstate)
             },
            // 全选
            handleCheckAllChange(val){
                //  全选的数量 与 总次数做判断
                 var count = this.newDateForm.count;    // 总次数
                let data= this.newDateForm.checkListstate
                if(data == 1){
                    if(this.newDateForm.weekdays.length >count ){
                         this.checkAll = false;
                    this.isIndeterminate = false;
                    this.isselectweeks=true;
                         return this.$message({type:'warning',message:`重复日期超出指定次数   ${count}，请重新选择`})
                    }
                    this.newDateForm.checkListData = val ? this.newDateForm.weekdays : [];
                    this.isIndeterminate = false;
                      console.log('一周',this.newDateForm.checkListData)
                }
                if(data == 2){
                    if(14 >count ){
                        this.checkAll = false;
                    this.isIndeterminate = false;
                    this.isselectweeks=true;
                         return this.$message({type:'warning',message:`重复日期超出指定次数   ${count}，请重新选择`})
                    }
                   this.newDateForm.checkList[0] = val ?  this.newDateForm.weekdays : [];
                   this.newDateForm.checkList[1] = val ? this.newDateForm.weekdays : [];
                   this.newDateForm.checkListData= this.newDateForm.checkList[0];
                   this.newDateForm.checkListData1= this.newDateForm.checkList[1];
                   this.isIndeterminate = false;
                   console.log('两周',this.newDateForm.checkList)
                }
            },
            // 选择周的日期
            handleCheckedCitiesChange(value){
                // console.log(e);
                var data= this.newDateForm.checkListData // 
                var count = this.newDateForm.count;    // 总次数
                var state = this.newDateForm.checkListstate;  // 选择的状态
                var weekdays =this.newDateForm.weekdays;
                 let checkedCount = value.length;
                if(state == 1){  // 每周
                    console.log('一周',this.newDateForm.checkListData)
                    this.overDate(state,data)
                    this.checkAll = checkedCount === weekdays.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < weekdays.length;
                }
                if(state == 2){ // 每两周
                    this.newDateForm.checkList[0]=data;
                    this.newDateForm.checkList[1]=[];
                    console.log('两周',this.newDateForm.checkList)
                    this.isIndeterminate = checkedCount > 0 && checkedCount < 2* weekdays.length;
                }
                if(data.length>count){
                   return this.$message({type:'warning',message:`重复日期超出指定次数  ${count}，请重新选择`})
                }
                this.overDate(state)
            },
            // 每两周
            handleCheckedCitiesChange1(value){
                // console.log(e);
                let data= this.newDateForm.checkListData1
                this.newDateForm.checkList[1]= data
                var weekdays =this.newDateForm.weekdays;
                var count = this.newDateForm.count;    // 总次数
                console.log('两周',this.newDateForm.checkList)
                let checkedCount = value.length;
                if(data.length == weekdays.length && this.newDateForm.checkList[0].length == weekdays.length){
                    this.checkAll = true;
                    // this.isIndeterminate=true;
                }else{
                    this.checkAll = true
                }
                
                this.isIndeterminate = checkedCount > 0 && checkedCount <= weekdays.length * 2;
                if(this.newDateForm.checkList[0].length +this.newDateForm.checkList[1].length > this.newDateForm.count){
                    return this.$message({type:'warning',message:`重复日期超出指定次数  ${count}，请重新选择`})
                }
                 this.overDate(this.newDateForm.checkListstate)
            },
            // 设置重复模式
            setrecove(item){
                this.newDateForm.checkListstate=item;
                // 获取开课日期
                let data = this.newDateForm.startDate;
                // 获取上课时间
                let time = this.newDateForm.startTime;
                console.log('选中的是',item,'日期',data,'时间',time);
                if(item == 0){
                    // 每天
                    this.isselectweeks=false;
                }else if(item == 1){
                    this.checkAll = false;
                    this.isIndeterminate = false;
                    this.isselectweeks=true;
                    // 清空每周选择
                     this.newDateForm.checkListData=[];
                    //   this.overDate(item)
                    // 每周
                }else if(item == 2){
                    this.checkAll = false;
                    this.isIndeterminate = false;
                    this.newDateForm.checkList[0]=[];
                    this.newDateForm.checkList[1]=[];
                    this.newDateForm.checkListData=[];
                    this.newDateForm.checkListData1=[];
                    this.isselectweeks=true;
                    
                    // 每两周
                }else if(item == 3){
                    // 每月
                    this.isselectweeks=false
                }else{
                    // 不重复
                    this.isselectweeks=false
                }
                this.overDate(item)
            },
            // 结束日期  // 结束时间
            overDate(state){
                    // console.log('参数',state,data);
                    // 对日期进行排序
                    var time = this.newDateForm.startDate      // 开始日期
                    var count = this.newDateForm.count;        // 总次数
                    let week =  moment().format('YYYY-MM-DD'); // 当前时间的时间戳;
                    var datelist=[];                           // 上课时间列表
                    var weekNum=''                             // 有几周
                    var weeks ='';
                    var maxdata = ''                           // 结束时间
                    var times =[];
                    var repeatWeek=[]
                if(state==0){   // 每天   
                    maxdata = moment(time, "YYYY-MM-DD").add(count,'days').format('YYYY-MM-DD');
                    console.log('次数',count,'结束日期为',maxdata)
                    this.newDateForm.endDate = maxdata;
                  
                    for(var i = 0;i<count;i++){
                        if(i==0){
                            datelist.push(time)
                        }else{
                            datelist.push(moment(time, "YYYY-MM-DD").add(i,'days').format('YYYY-MM-DD'))
                        }
                    }
                    console.log('每天的数据为',datelist)
                    // var alltime =  moment({ hour:time.split(':')[0], minute:time.split(':')[1] }).add({minute:daytime}).format('hh:mm')
                }else if(state==1){
                    // 转换时间
                    let data= this.newDateForm.checkListData // 
                    repeatWeek=data
                    let weeks = moment(time).weekday();        // 选择开始时间于勾选的时间最小比较
                    let sum = Math.ceil(count/data.length);
                    if(data){
                        for(let t of data){
                            // 判断选中日期于当前日期
                            if(moment(time).isAfter(week)){
                                // console.log('之后的日期');
                                switch(t) {
                                    case '星期一':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(0).format('YYYY-MM-DD');
                                        break;
                                    case '星期二':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(1).format('YYYY-MM-DD');
                                        break;
                                    case '星期三':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(2).format('YYYY-MM-DD');
                                        break;
                                    case '星期四':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(3).format('YYYY-MM-DD');
                                        break;
                                    case '星期五':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(4).format('YYYY-MM-DD');
                                        break;
                                    case '星期六':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(5).format('YYYY-MM-DD');
                                        break;
                                    case '星期日':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(6).format('YYYY-MM-DD');
                                }
                                times.push(weeks);   // 所有的日期
                            }else{
                        
                            }
                        }
                        //
                        // 获取今天星期机预选中的是否相同：
                        // 在判断总次数中选中了几个剩余 算出还有几星期
                        
                    }else{
                        console.log('不是星期')
                    }
                    if(times.length!==0){
                        if(sum>=1){

                            times.sort((a,b)=>{return Math.floor(moment(a,'YY-MM-DD').valueOf()) -Math.floor(moment(b,'YY-MM-DD').valueOf())})
                            console.log('排序后',times);

                            let mindata = times.reduce((a,b)=>{
                                return moment(a).isBefore(b)?a:b;
                            })
                            // console.log('最小时间',mindata)
                            let arr=''
                            // 判断当前星期的时间与选中开始时间    如果之前的话就是下个星期从当前时间开始
                            times.map((items,index)=>{
                               if(moment(items).isBefore(time)){
                                   let a=moment(items).add(1,'week').format('YYYY-MM-DD');
                                   console.log('之前',a);
                                   times[index]=a;
                               }
                            })   
                            console.log('过滤后',times);
                            times.sort((a,b)=>{return Math.floor(moment(a,'YY-MM-DD').valueOf()) -Math.floor(moment(b,'YY-MM-DD').valueOf())})
                            console.log('再次排序后',times);

                            // if(moment(time).isSame(mindata)){
                            //     console.log('相等',time,mindata)
                            //     datelist.push(mindata)
                            // }

                            for(let i=0;i<sum;i++){
                                times.map(items=>{
                                    if(datelist.length < count ){
                                        arr = moment(items).add(i,'week').format('YYYY-MM-DD');
                                        datelist.push(arr)
                                    }
                                })
                            }
                        }
                        }
                   console.log('星期',times,datelist)
                   // 找出数组中日期最大的那个
                   if(datelist.length>0){
                       //  返回最大值
                        maxdata = datelist.reduce((a,b)=>{
                            return moment(a).isBefore(b)?b:a;
                        })
                        // console.log('最大的日期',maxdata);
                        this.newDateForm.endDate =maxdata
                   }else{
                       this.newDateForm.endDate=''
                   }
                }else if(state==2){
                    // 获取所有的时间列表
                    repeatWeek=this.newDateForm.checkList;
                    let arr1 = this.newDateForm.checkList[0]  // 第一周的数据
                    let first = [],sendent=[];
                    if(arr1.length>0){
                        for(let t of arr1){
                            // 判断选中日期于当前日期
                            if(moment(time).isAfter(week)){
                                console.log('之后的日期');
                                switch(t) {
                                    case '星期一':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(0).format('YYYY-MM-DD');
                                        break;
                                    case '星期二':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(1).format('YYYY-MM-DD');
                                        break;
                                    case '星期三':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(2).format('YYYY-MM-DD');
                                        break;
                                    case '星期四':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(3).format('YYYY-MM-DD');
                                        break;
                                    case '星期五':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(4).format('YYYY-MM-DD');
                                        break;
                                    case '星期六':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(5).format('YYYY-MM-DD');
                                        break;
                                    case '星期日':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(6).format('YYYY-MM-DD');
                                }
                                first.push(weeks);   // 所有的日期
                            }
                        }
                        // 获取今天星期机预选中的是否相同：
                        // 在判断总次数中选中了几个剩余 算出还有几星期
 
                    }
                    let arr2 = this.newDateForm.checkList[1]  // 第二周的数据
                    if( arr2.length>0){
                        for(let t of arr2){
                            // 判断选中日期于当前日期
                            if(moment(time).isAfter(week)){
                                console.log('之后的日期');
                                switch(t) {
                                    case '星期一':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(0).format('YYYY-MM-DD');
                                        break;
                                    case '星期二':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(1).format('YYYY-MM-DD');
                                        break;
                                    case '星期三':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(2).format('YYYY-MM-DD');
                                        break;
                                    case '星期四':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(3).format('YYYY-MM-DD');
                                        break;
                                    case '星期五':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(4).format('YYYY-MM-DD');
                                        break;
                                    case '星期六':
                                        weeks= moment(time,'YYYY-MM-DD').add(1,'week').weekday(5).format('YYYY-MM-DD');
                                        break;
                                    case '星期日':
                                        weeks= moment(time,'YYYY-MM-DD').weekday(6).format('YYYY-MM-DD');
                                }
                                sendent.push(weeks);   // 所有的日期
                            }
                        }
                    }
                   var times = first.concat(sendent)
                    // console.log('重复两周',times);
                    if(times.length !==0){
                        let sum = Math.ceil(count/times.length);  // 两周的平均
                        // 获取今天星期机预选中的是否相同：
                        // 在判断总次数中选中了几个剩余 算出还有几星期
                        if(sum >=1){
                            times.sort((a,b)=>{return Math.floor(moment(a,'YY-MM-DD').valueOf()) -Math.floor(moment(b,'YY-MM-DD').valueOf())})
                            console.log('排序后',times);


                            let mindata = times.reduce((a,b)=>{
                                return moment(a).isBefore(b)?a:b;
                            })
                            console.log('最小时间',mindata)
                            
                            times.map((items,index)=>{
                               if(moment(items).isBefore(time)){
                                   let a=moment(items).add(1,'week').format('YYYY-MM-DD');
                                   console.log('之前',a);
                                   times[index]=a;
                               }
                            })   
                            console.log('过滤后',times);
                            times.sort((a,b)=>{return Math.floor(moment(a,'YY-MM-DD').valueOf()) -Math.floor(moment(b,'YY-MM-DD').valueOf())})
                            console.log('再次排序后',times);

                            for(let i=0;i<sum;i++){
                                let arr=''
                                let j= i*2;
                                times.map(items=>{
                                    if(datelist.length < count ){
                                        arr = moment(items).add(j,'week').format('YYYY-MM-DD');
                                        datelist.push(arr)
                                    }
                                })
                            }
                        }else{
                            console.log('不满两周')
                        }
                    }
                    console.log('重复两周',times,datelist);
                    // 判断选中时间是否等于
                    if(datelist.length>0){
                       //  返回最大值
                        maxdata = datelist.reduce((a,b)=>{
                            return moment(a).isBefore(b)?b:a;
                        })
                        console.log('最大的日期',maxdata);
                        this.newDateForm.endDate =maxdata
                   }else{
                       this.newDateForm.endDate=''
                   }
                }else if(state==3){
                    let timelist =  this.newDateForm.editableTabs2;  /// 选择的时间
                    repeatWeek =timelist
                    console.log('========',timelist)
                    if(timelist.length !==0){
                        // 找出所有的日期
                        let times = [];
                        timelist.map(item=>{
                            if(item.title){
                                times.push(item.title)
                            }
                        })
                        // 进行排序
                        let sum = Math.ceil(count/times.length);  // 两周的平均
                            // 获取今天星期机预选中的是否相同：
                            // 在判断总次数中选中了几个剩余 算出还有几星期
                        if(sum >=1){
                            times.sort((a,b)=>{return Math.floor(moment(a,'YY-MM-DD').valueOf()) - Math.floor(moment(b,'YY-MM-DD').valueOf())})
                            console.log('排序后',timelist);
                            let mindata = times.reduce((a,b)=>{
                                return moment(a).isBefore(b)?a:b;
                            })
                            console.log('最小时间',mindata)
                            for(let i=0;i<sum;i++){
                                let arr=''
                                times.map(items=>{
                                    // 小于长度  并且判断是开始时间 之前还是之后
                                    if(datelist.length < count && moment(items).isAfter(time)){
                                        arr = moment(items).add(i,'month').format('YYYY-MM-DD');
                                        datelist.push(arr)
                                    }else if(datelist.length < count){
                                        arr = moment(items).add(i+1,'month').format('YYYY-MM-DD');
                                        datelist.push(arr)
                                    }
                                })
                            }
                        }else{
                            console.log('不满一月');
                        }
                            console.log('重复一月',times,datelist)
                            if(datelist.length>0){
                        //  返回最大值
                            maxdata = datelist.reduce((a,b)=>{
                                return moment(a).isBefore(b)?b:a;
                            })
                            console.log('最大的日期',maxdata);
                            this.newDateForm.endDate = maxdata
                            }else{
                                this.newDateForm.endDate=''
                            }
                    }
                }else{
                    console.log('不重复')
                }
                console.log('时间列表',datelist);
                
               
                

                if(datelist){
                        let start =time;
                        let end = maxdata;
                        console.log(time,maxdata)
                        const range = moment(end,'YYYY-MM-DD').diff(moment(start,'YYYY-MM-DD'),'week');
                        const day = moment(end,'YYYY-MM-DD').diff(moment(start,'YYYY-MM-DD'),'day');
                        let weekdays = day%7
                        // console.log('有几周',range,day,weekdays)
                        weekNum = `${range}周-${weekdays}天`;
                        console.log(weekNum)
                        this.newDateForm.weekday=weekNum;

                }
                this.newDateForm.courseDateList.startDate=time;
                this.newDateForm.courseDateList.endDate=maxdata;
                this.newDateForm.courseDateList.weekNum=weekNum;
                this.newDateForm.courseDateList.courseDate=datelist;
                this.newDateForm.courseDateList.repeatRule=state;
                this.newDateForm.courseDateList.repeatWeek=repeatWeek;
            },

            // 新建 选择中的班级
            handleSelectClass(item) {
                // 列表
                // 请求课程信息
                console.info('选择班级',item);
                this.newDateForm.className=item.name;
                // 保存时的id
                this.newDateForm.courseDateList.storeClassId=item.id;
                getCourseInfoByClassId({classId:item.id}).then(res=>{
                    console.log('详情',res.result)
                    let arr =res.result;
                    if(arr !== '' && arr !== undefined && arr !== null){
                        let {className,courseName,lessonNum,lessonTime,num,onceTime,orgName,roomName,teacherName} =arr;
                        console.log(arr)
                            this.newDateForm.courseName = courseName;
                            // this.newDateForm.helpTecher = item.helpTecher;
                            this.newDateForm.techerName = teacherName;
                            this.newDateForm.classroom = roomName;
                            this.newDateForm.courseShop =orgName;
                            this.newDateForm.coursetime =lessonTime;
                            this.newDateForm.number =  lessonNum;
                            this.newDateForm.count = num;
                            
                    }
                    console.log(this.newDateForm)
                })
                // className: "班级测试1"
                // courseName: "课程名称测试"
                // lessonNum: 20
                // lessonTime: "45"
                // num: 10
                // onceTime: "2"
                // orgName: "上海音乐家协会电子键盘专业委员会"
                // roomName: "测试1"
                // teacherName: "小灰灰"
            
                            // this.newDateForm.cousreName = item.cousreName;
                            // this.newDateForm.helpTecher = item.helpTecher;
                            // this.newDateForm.helpTecher = item.helpTecher;
                            // this.newDateForm.techerName = item.techerName;
                            // this.newDateForm.classroom = item.classroom;
                            // this.newDateForm.courseShop = item.courseShop;
                            // this.newDateForm.coursetime =item.coursetime;
                            // this.newDateForm.number =    item.number;
                            // this.newDateForm.count =    item.count;
                            // console.log(this.newDateForm.cousreName)
                
            },
            // 选中的班级
            handleSelectinClass(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            // 新建
            btnnewclass(a) {
                console.log('a',a)
                if(a == undefined || a==""){
                    // this.dialogFormVisible = true;  //对话框显示
                   this.my_newcourse=false;    // 切换状态 新建日程
                }else if(a==1){
                    // this.dialogFormVisible = true;  //对话框显示
                    this.my_newcourse=false;    // 切换状态 新建日程
                }else if(a==2){
                    this.my_newcourse=true;
                }else{
                    this.my_newcourse=false;    // 切换状态 新建日程
                }
               
            },
            // 可选
            handselectAllow(e){
                console.log('控制可选择的区域',e)
                return true
            },
            //改变选项
            changeCategory(e) {

            },
            // 改变门店
            changeorgList(e){
                console.log(e)
            },
            // 新增
            newcourse() { },
            // 新建下拉选择
            newchangeCategory(e) {

            },
            // 课程
            outmoursecount(){
                 console.log('失去焦点');
                // 数据验证
                let count = this.newDateForm.count; 
                if(count =="" || count ==undefined || count==null){
                    this.rules.count.required=true
                }else{
                    this.rules.count.required=false;
                }
            },
            outmourseendDate(){
                let a=this.newDateForm.endDate;
             if(a== null || a=="" ||a==undefined){
                this.rules.endDate.required=true
             }else{
                this.rules.endDate.required=false;
             }
            },
            // 失去焦点
            outmourse(state){
                console.log(state)
                // console.log('失去焦点');
                if(state==1){
                    let a=this.newDateForm.startDate;
                    if(a== null || a=="" ||a==undefined){
                        this.rules.startDate.required=true
                    }else{
                        this.rules.startDate.required=false;
                    }
                }
                if(state==2){
                    let a=this.newDateForm.startTime;
                    if(a== null || a=="" ||a==undefined){
                        this.rules.startTime.required=true
                    }else{
                        this.rules.startTime.required=false;
                    }
                }
               
            },
            // 开课日期
            newchangestartDate(e){
                 console.log('选择开课日期',e)
                this.newDateForm.startDate=e;
                this.newDateForm.setrecoverTime=e;
                // 默认选中每天的
                this.overDate(0);
            },
            // 分钟转换小时
            ChangeHourMinutestr(str) {
            if (str !== "0" && str !== "" && str !== null) {
                return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :  (Math.floor(str / 60)).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + (str % 60).toString() : (str % 60).toString());
            }else
            {
                return "";
            }
            },
            // 上课时间
            newchangestartTime(e){
                console.log('选择开课日期',e)
                this.newDateForm.startTime=e;
                if(e){
                    if(this.newDateForm.className == ''){
                       return this.$message({type:'warning',message:'请选择班级'}) 
                    }
                    // console.log()
                    let time = this.newDateForm.startTime  // 开始时间
                    let coursetime = this.newDateForm.coursetime;  // 一节课时间
                    let count = this.newDateForm.count;    // 总次数
                    let number = this.newDateForm.number;  // 课程数量
                    let onesum = parseInt(number) / parseInt(count);  // 单次数量
                    let daytime = Math.floor(onesum * parseInt(coursetime));
                    var alltime =  moment({ hour:time.split(':')[0], minute:time.split(':')[1] }).add({minute:daytime}).format('HH:mm')
                    console.log('分钟',daytime,'结果为',alltime)
                    this.newDateForm.endTime = alltime;
                    this.newDateForm.courseDateList.startTime = time;
                    this.newDateForm.courseDateList.endTime = alltime;
                    // 课时  *  单次
                    // coursetime:'',     // 课程时长
                    // count:'',          // 课程次数
                    // number:'',         // 课程数量

                }else{
                    return this.$message({type:'warning',message:'请选择上课时间'})
                }
               
            },
            // 课程显示事件
            btnchange(id) {
                // 当前点击的id
                if(id==1){
                    this.dialogcourseVisible = false //关闭显示框
                }
                let CousrId =this.somecourseId;
                if (id == 2) {  //单词编辑
                    this.dialogcourseVisible = false //关闭显示框
                    this.dialoginfoVisible = true  // 打开编辑框
                    // 赋值内容表单
                    let arr= this.coursebox;
                    if(arr.length !==0 ){
                        arr.map(item=>{
                            this.form.startTime = item.startDatetime.split(' ')[1];
                            this.form.endTime = item.endDatetime.split(' ')[1];

                            this.form.orgId=item.orgId;
                            this.form.orgName=item.orgName;

                            this.form.className=item.className;
                            this.form.classId = item.classId;

                            this.form.id = item.id;

                            this.form.teacherName=item.teacherName;
                             this.form.teacherId=item.teacherId;

                            this.form.roomName=item.roomName;
                            this.form.roomId=item.roomId;

                            this.form.courseName=item.courseName;
                            this.form.courseId=item.courseId;

                            this.form.teacherId=item.teacherId;
                            this.form.teacherName=item.teacherName;

                            this.form.startDate = item.startDatetime;
                        })
                       
                    }
                    console.log('编辑内容',this.form,arr)
                }
                if(id == 3){    // 编辑重复
                    // 转到重复编辑内容   传递 id
                    this.my_newcourse = false;
                    // 获取班级详情
                    let params ={
                        name:'',
                        id:CousrId,
                    }
                    this.handleSelectClass(params);
                    // 赋值 时间等选中判断
                    // 默认显示每天
                    this.newDateForm.checkListstate=0;  // 状态
                    // 选中的列表
                    this.newDateForm.checkList=[];      // 每两周列表数据      // 包含  checkListData1  checkListData

                    this.newDateForm.checkListData=[];  // 每周数据
                    this.newDateForm.editableTabs2=[];  // 每月列表
                    // 有多少周
                    this.newDateForm.weekday = "";
                    this.newDateForm.startDate = '';    // 开始日期
                    this.newDateForm.endDate = "";      // 结束日期
                    this.newDateForm.startTime='';      // 开始时间
                    this.newDateForm.endTime = "";      // 结束时间
                }
                //  删除
                if(id == 4){
                    this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        delCourseTime(CousrId).then(res=>{
                            if(res.errorCode==0){
                                this.dialogcourseVisible = false //关闭显示框
                                this.getAllCourseList()
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }else{
                                this.$message({
                                    type: 'warning',
                                    message: '删除失败!'
                                });
                            }
                        })
                       
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
       
                }
                // 记上课
                if(id == 5){
                    finishCourseTime(CousrId).then(res=>{
                        if(res.errorCode==0){
                            this.$message({type:'success',message:'标记上课成功'})
                             this.getAllCourseList()
                              this.dialogcourseVisible = false //关闭显示框
                        }else{
                                this.$message({
                                    type: 'warning',
                                    message: '记上课失败!'
                                });
                            }
                    })
                   
                }
            },
            // 
            changeshowbox(){
                console.log('全部隐藏')
                this.showtecher=0 
            },
            // 切换
            isshowtecher(args){
                if(args==this.showtecher){
                    this.showtecher=0;
                }else{
                    if(args==1){
                        this.showtecher=1;
                    }else if(args==2){
                        this.showtecher=2;
                    }else if(args ==3){
                        this.showtecher=3;
                    }else if(args ==4){
                        this.showtecher=4;
                    }else{
                        this.showtecher=0;
                    }
                }
               
            },
            // 搜索
            searchcnt(){
                    let a = {...this.ruleForm};
                    let { techername,departmen} = a;
                    // if(techername==undefined || techername=="" ||departmen=="" ||departmen == undefined){
                        
                    // }
            },
            // 日历挂件
            toggleWeekends() {
                this.calendarWeekends = !this.calendarWeekends // update a property
            },
            gotoPast() {
                let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
                calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
            },
            // 选择日历--新建课程表
            handleSelectdate(e) {
                // console.log('选择日历', e);
                var start = new Date(e.endStr).toLocaleDateString()
                // 当前视图的开始结束时间
                var activeStart = moment(e.start).format('YYYY-MM-DD HH:mm:ss');
                var data = moment(e.start).format('YYYY-MM-DD')
                var activeEnd = moment(e.end).format('YYYY-MM-DD HH:mm:ss');
                console.log('开始一周',activeStart,activeEnd)    // 一星期
                //  传值  开始  日期  时间
                this.form.startDate = data;
                this.form.startTime =moment(activeStart.split(' ')[1],'HH:mm:ss').format('HH:mm') ;
                this.form.endTime =moment(activeEnd.split(' ')[1],'HH:mm:ss').format('HH:mm') ; 
                // 关闭当前-进入新建
                this.dialoginfoVisible=true;
                this.isnewcreate=true;
                // 调用详情接口
                getCourseTimeDetails(0).then(res=>{
                    console.log(res)
                    this.coursebox=[];
                    if(res.errorCode==0){
                        let obj =res.result;
                        // 赋值 机构列表
                        obj.orgList.unshift({name:'请选择',orgId:0})
                        this.form.orgList=obj.orgList;
                        // 赋值 教室列表
                        this.form.roomList = obj.roomList
                        // 赋值 老师列表
                        this.form.teacherList = obj.teacherList
                        // 赋值 课程列表
                        this.form.courseList = obj.courseList
                        // 赋值班级列表
                        this.form.classList = obj.classList
                    }
                })
                // 格式化时间
                // var endStr = moment(e.endStr).format("YYYY-MM-DD HH:mm:ss")
                // var startStr = moment(e.startStr).format("YYYY-MM-DD HH:mm:ss")
                // var end = moment(e.end).format("YYYY-MM-DD HH:mm:ss")
                // var start = moment(e.start)("YYYY-MM-DD HH:mm:ss")
                // console.log(endStr,startStr,end,start)
                
            },
            // 视图
            changeview(view){
                console.log('视图渲染',view)
            },
            // 鼠标进入日历
            handMouseEnter(e) {
                 // 先显示
                // this.dialogalert=true;
                console.log('鼠标进入日历',e.jsEvent)
                // var h = e.el.offsetTop;
                // var w = e.el.offsetLeft;
                // console.log(w, h)
                // var el = this.$refs.reference_msgbox
                // console.log('元素',el)
                // el.style.left=w+'px';
                // el.style.top= h+'px';
            },
            // 鼠标离开日历
            handMouseLeave(e) {
                console.log('鼠标离开日历', e)
              
                if( this.dialogalert){
                    this.dialogalert=false
                }
            },
            moveDateClick(e){
                console.log(e)
            },
            // 保存课程表--新建
            saveiedData(ars){
                if(ars==0){
                    return this.dialoginfoVisible=false;
                }else{
                    if(this.saveiedData){
                        let {orgId,startDate,startTime,endTime,teacherId,classId,roomId,courseId,id} = this.form
                        let params ={orgId,startDatetime:`${startDate} ${startTime}`,endDatetime:`${startDate} ${endTime}`,teacherId,storeClassId:classId,roomId,storeCourseId:courseId};
                        addCourseTime(params).then(res=>{
                            if(res.errorCode==0){
                                this.getAllCourseList();
                                this.$message({type:'success',message:'添加课程成功'})    
                                this.dialoginfoVisible = false;
                            }else{
                                this.$message({type:'warning',message:'添加课程失败'})    
                            }
                        })
                    }else{
                        console.log('保存数据',this.form);
                        // let {orgId,startDate,startTime,endTime,teacherName,className,roomName,courseName} = this.form
                        let {orgId,startDate,startTime,endTime,teacherId,classId,roomId,courseId,id} = this.form
                        let params ={orgId,startDatetime:`${startDate.split(' ')[0]} ${startTime}`,endDatetime:`${startDate.split(' ')[0]} ${endTime}`,teacherId,storeClassId:classId,roomId,storeCourseId:courseId,id};
                        updateCourseTime(params).then(res=>{
                            if(res.errorCode==0){
                                this.getAllCourseList();
                                this.$message({type:'success',message:'修改成功'})    
                                this.dialoginfoVisible = false;
                               
                            }else{
                                this.$message({type:'warning',message:'修改失败'})    
                            }
                        })
                        
                    }
                    // 清除数据
                        this.form.orgId='';this.form.startDate='';this.form.startTime='';this.form.endTime='';this.form.teacherName='';this.form.className='';this.form.roomName='';this.form.courseName=''
                        this.form.teacherId='';this.form.classId='';this.form.roomId='';this.form.courseId='';this.form.id=''
                }
               
            },
            // 用户日历单击事件--新建
            handleDateClick(e) {
                // console.log('点击日历', e);
                var date =moment(e.date).format("YYYY-MM-DD HH:mm:ss");
                console.log('开始日期',date)
                // this.my_newcourse=false;
                // 把时间传进入-赋值
                // this.newDateForm.startTime=date;
                // console.log(this.newDateForm.startTime)
                // 开始时间
                // {
                //      title: '计算机学院小组会议',
                //      start: '2019-07-29 10:00:00',
                //      end: '2019-07-29 12:00:00',
                //      color:'orange'
                // },
            },
            // 创建内容
            createcnt(date, allDay, jsEvent, view) {
                console.log('创建内容', date, jsEvent, view)
            },
            // 点击有内容的出发 编辑内容
            compilecnt(e) {
                this.isnewcreate=false     // 编辑
                this.dialogcourseVisible = true;
                // 设置唯一的id 到全局变量中编辑或删除时使用
                console.log('编辑内容',e)
                this.somecourseId = e.event.id;
                // 获取详情
                //TODO
                getCourseTimeDetails(this.somecourseId).then(res=>{
                    console.log(res)
                    this.coursebox=[];
                    if(res.errorCode==0){
                        let obj =res.result;
                        this.coursebox.push(obj.details)
                        // 赋值 机构列表
                        obj.orgList.unshift({name:'请选择',orgId:0})
                        this.form.orgList=obj.orgList;
                        // 赋值 教室列表
                        this.form.roomList = obj.roomList
                        // 赋值 老师列表
                        this.form.teacherList = obj.teacherList
                        // 赋值 课程列表
                        this.form.courseList = obj.courseList
                        // 赋值班级列表
                        this.form.classList = obj.classList
                    }
                })
            },
            // 弹窗
            morealert(info) {
                console.log('弹窗', info)
            }
        },
        components: {
            FullCalendar,
            vueQr,
        }
    }
</script>