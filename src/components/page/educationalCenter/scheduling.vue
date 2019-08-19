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
        p{}
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
                                <div class="dlogbox_val">{{item.time}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">班级:</label>
                                <div class="dlogbox_val font_color">{{item.class}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">教师:</label>
                                <div class="dlogbox_val">{{item.techername}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">助教:</label>
                                <div class="dlogbox_val">{{item.techernames}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">教室:</label>
                                <div class="dlogbox_val">{{item.classroom}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">科目:</label>
                                <div class="dlogbox_val">{{item.type}}</div>
                            </div>
                            <div class="dlogboxitem">
                                <label class="dlogbox_label">实到/应到:</label>
                                <div class="dlogbox_val">{{item.sum}}</div>
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
            <el-dialog @click='showtecher = false' title="编辑日程"  custom-class='dialog_ediecourse' top="10vh"
                width="45%" left :visible.sync="dialoginfoVisible" :close-on-click-modal='false'>
                <el-form class="edit_schedule" :model="form" :rules="rules">
                    <el-form-item label="班级/一对一：" :label-width="formLabelWidth" prop="techername">
                        <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch"
                            placeholder="请输入内容" @select="handleSelectinClass">
                            <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
                            </i>
                            <template slot-scope="props">
                                <div class="name">{{ props.item.name }}</div>
                                <span class="addr">{{ props.item.orgName }}</span>
                            </template>
                        </el-autocomplete>
                    </el-form-item>
                    <el-form-item label="上课日期：" :label-width="formLabelWidth" prop="techername">
                        <el-date-picker v-model="value11" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="上课时段：" :label-width="formLabelWidth" prop="techername">
                        <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
                                                start: '08:30',
                                                step: '00:15',
                                                end: '18:30'
                                                }">
                        </el-time-select>
                        <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
                                                start: '08:30',
                                                step: '00:15',
                                                end: '18:30',
                                                minTime: startTime
                                                }">
                        </el-time-select>
                    </el-form-item>
                    <div class="elcolum">
                        <div class="elrow flex1">
                            <div class="dialog_ediw">
                                <el-form-item label="教师" :label-width="formLabelWidth" prop="techername">
                                    <div @click="isshowtecher" class="inputbox">
                                        <div></div>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-show='showtecher'>
                                        <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName"
                                            max-height="250">
                                            <el-table-column prop="date" label="日期" width="100">
                                            </el-table-column>
                                            <el-table-column prop="name" label="姓名" width="70">
                                            </el-table-column>
                                            <el-table-column prop="address" label="地址" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="dialog_ediw">
                                <el-form-item label="助教" :label-width="formLabelWidth" prop="techername">
                                    <div @click="isshowtecher" class="inputbox">
                                        <div></div>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-show='showtecher'>
                                        <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName"
                                            max-height="250">
                                            <el-table-column prop="date" label="日期" width="100">
                                            </el-table-column>
                                            <el-table-column prop="name" label="姓名" width="70">
                                            </el-table-column>
                                            <el-table-column prop="address" label="地址" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="elrow flex1">
                            <div class="dialog_ediw">
                                <el-form-item label="教室" :label-width="formLabelWidth" prop="techername">
                                    <div @click="isshowtecher" class="inputbox">
                                        <div></div>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-show='showtecher'>
                                        <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName"
                                            max-height="250">
                                            <el-table-column prop="date" label="日期" width="100">
                                            </el-table-column>
                                            <el-table-column prop="name" label="姓名" width="70">
                                            </el-table-column>
                                            <el-table-column prop="address" label="地址" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="dialog_ediw">
                                <el-form-item label="科目" :label-width="formLabelWidth" prop="techername">
                                    <div @click="isshowtecher" class="inputbox">
                                        <div></div>
                                        <i class="el-icon-edit el-input__icon dialog_edieright" @click="handleIconClick">
                                        </i>
                                    </div>
                                    <div class="dialog_edieinfo" v-show='showtecher'>
                                        <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName"
                                            max-height="250">
                                            <el-table-column prop="date" label="日期" width="100">
                                            </el-table-column>
                                            <el-table-column prop="name" label="姓名" width="70">
                                            </el-table-column>
                                            <el-table-column prop="address" label="地址" width="280">
                                            </el-table-column>
                                        </el-table>
                                    </div>
                                </el-form-item>
                            </div>
            
            
                        </div>
                    </div>
                </el-form>
                <div slot="footer" class="dialog-footer ">
                    <el-button @click="dialoginfoVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialoginfoVisible = false">保存
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
                            <el-select size='large' :disabled="true" v-model="newDateForm.cousreName" value-key="id" placeholder="请选择"
                                @change="newchangeCategory">
                                <el-option v-for="item in categoryList" :label="item.cousreName" :key="item.id" :value="item.cousreId">
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
                <el-form-item label="结课日期"  prop="department" >
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
                                  <el-input v-model="newDateForm.weekday" auto-complete="off"></el-input>
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
                <el-button class="dialog-footer_btn" @click="my_newcourse = true">取 消</el-button>
                <el-button  class="dialog-footer_btn" type="primary" @click="newSaveCourse">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import {addCourseArrange,getClassList,getCourseInfoByClassId} from '@/api/demo'
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
                              start: '2019-07-29 10:00:00',
                              end: '2019-07-29 12:00:00',
                              color:'orange'
                            },
                            {
                                title: '计算机学院小组会议',
                                start: '2019-07-29 10:00:00',
                                end: '2019-07-29 11:00:00',
                                color:'red'
                            },
                            {
                                title: '计算机学院小组会议132135454654654654645',
                                start: '2019-07-30 10:00:00',
                                end: '2019-07-30 11:00:00',
                                color:'orange'
                            },
                            {
                              start: '2019-07-30 13:00:00',
                              end: '2019-07-30 14:00:00',
                              title: '东南大学计算机学术会议',
                              color:'green'
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
                    {
                        time: ' 2019-07-31 08:00-18:00',
                        name: '班级',
                        class: ' 美术教育连锁机构暑期班一年级课程1班',
                        techername: '张金刚',
                        techernames: '小辉',
                        classroom: ' 教室一',
                        type: '学华初一数学',
                        sum: '12/25',
                    },
                ],
                dialoginfoVisible: false,
                dialogFormVisible: false,   // 显示新建日程对话框
                dialogcourseVisible: false, // 课程日历对话框 
                // 对话框表单内容
                checkList: ['选中且禁用', '一对一'],
                form: {
                    name: "",
                    region: "",
                    date1: "",
                    date2: "",
                    delivery: false,
                    type: [],
                    resource: "",
                    desc: ""
                },
                dialogalert:false,
                showtecher:false,
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
                pickerOptionstart:{
                     disabledDate: (time) => {                          
                        const one = 30 * 24 * 3600 * 1000;
                        const minTime =  Date.now();
                        const maxTime = minTime+ one;
                        //获取本日
                        const startDate = moment().valueOf(); 
                        return time.getTime() < startDate 
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
                        //获取本月 
                        const startDate = moment(times,'YYYY-MM-DD').startOf('month').valueOf();
                        const endDate = moment(times,"YYYY-MM-DD").endOf('month').valueOf();
                        //获取本年
                        // const startDate = moment().year(moment().year()).startOf('year').valueOf();
                        // const endDate = moment().year(moment().year()).endOf('year').valueOf();
                        // 一个月内的日期
                        // return time.getTime() < minTime || time.getTime() > maxTime
                        // 利用 moment 前一个月和下一个月范围
                        // return time.getTime() < moment(minTime).subtract(1,'month').valueOf() || time.getTime() > moment(minTime).add(1,'month').valueOf();
                        // 月初和月末
                        return time.getTime() < startDate || time.getTime() > endDate
                    }

                },
                // 新建排课表单
                newDateForm:{
                    setrecoverTime:'', // 设置时间的
                    className:'',      // 班级名称
                    startDate:'',      // 开课日期
                    weekday:'',        // 星期数
                    cousreName:'',     // 课程名称
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
        created() {
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
                // {  
                //     className:'软件设计B',     // 班级名称
                //     startDate:'',     // 开课时间
                //     weekday:'',       // 星期数
                //     cousreName:'java程序设计',    // 课程名称
                //     startTime:'',     //上课时间
                //     helpTecher:'李老师',    // 助教
                //     techerName:'杨老师',    // 老师
                //     classroom:'软件1607班',     // 教室
                //     courseShop:'职场教育',     //门店
                //     endTime:'',        // 结束时间
                //     endDate:'' ,       // 结束日期
                //     coursetime:40,     // 课程时长
                //     count:5,           // 课程次数
                //     number:20,          // 课时数量
                //     checkList:0        //重复多选,
                // },
                // {  
                //     className:'软件设计C',     // 班级名称
                //     startDate:'',     // 开课时间
                //     weekday:'',       // 星期数
                //     cousreName:'java程序设计',    // 课程名称
                //     startTime:'',     //上课时间
                //     helpTecher:'李老师',    // 助教
                //     techerName:'杨老师',    // 老师
                //     classroom:'软件1607班',     // 教室
                //     courseShop:'职场教育',     //门店
                //     endTime:'',        // 结束时间
                //     endDate:'' ,       // 结束日期
                //     coursetime:30,     // 课程时长
                //     number:10,          // 课时数量
                //     count:6,          // 课程次数
                //     checkList:0        //重复多选,
                // },
                // {  
                //     className:'软件设计',     // 班级名称
                //     startDate:'',     // 开课时间
                //     weekday:'',       // 星期数
                //     cousreName:'java程序设计',    // 课程名称
                //     startTime:'',     //上课时间
                //     helpTecher:'李老师',    // 助教
                //     techerName:'杨老师',    // 老师
                //     classroom:'软件1607班',     // 教室
                //     courseShop:'职场教育',     //门店
                //     endTime:'',        // 结束时间
                //     endDate:'' ,       // 结束日期
                //     coursetime:40,     // 课程时长
                //     number:20,          // 课时数量
                //     count:7,          // 课程次数
                //     checkList:0        //重复多选,
                // },
                // {  
                //     className:'软件设计',     // 班级名称
                //     startDate:'',     // 开课时间
                //     weekday:'',       // 星期数
                //     cousreName:'java程序设计',    // 课程名称
                //     startTime:'',     //上课时间
                //     helpTecher:'李老师',    // 助教
                //     techerName:'杨老师',    // 老师
                //     number:20,          // 课时数量
                //     classroom:'软件1607班',     // 教室
                //     courseShop:'职场教育',     //门店
                //     endTime:'',        // 结束时间
                //     endDate:'' ,       // 结束日期
                //     coursetime:40,     // 课程时长
                //     count:4,          // 课程次数
                //     checkList:0        //重复多选,
                // },
                // { "value": "英语课11", "address": "嘉定区曹安路1611号","course":'英语课' },
                // ];
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
            newSaveCourse(){
                // {
                //   "addBy": 0,
                //   "addByStr": "string",
                //   "courseDate": "string",
                //   "endDate": "string",
                //   "endTime": "string",
                //   "repeatRule": 0,
                //   "repeatWeek": "string",
                //   "startDate": "string",
                //   "startTime": "string",
                //   "storeClassId": 0,
                //   "updateBy": 0,
                //   "updateByStr": "string",
                //   "weekNum": 0
                // }
                console.log('保存内容',this.newDateForm);
                // checkList: Array(0)
                // checkListData: Array(3)
                // checkListData1: Array(0)
                // checkListstate: 1
                // className: "软件设计A"
                // classroom: "软件1607班"
                // count: 4
                // courseShop: "职场教育"
                // coursetime: 20
                // cousreName: "java程序设计"
                // editableTabs2: Array(0)
                // editableTabsValue2: "0"
                // endDate: "2019-08-27"
                // endTime: "10:30"
                // helpTecher: "李老师"
                // number: 30
                // setrecoverTime: ""
                // startDate: "2019-08-20"
                // startTime: "08:00"
                // tabIndex: 0
                // techerName: "杨老师"
                // weekday: ""
                // weekdays: Array(7)
                var data = JSON.parse(JSON.stringify(this.newDateForm))
                if(data.length !==0){
                    let {} = data
                    // addCourseArrange().then(res=>{
                    //     console.log(res)
                    // })
                }
                
                
                
            },
            // 添加日期
            recoverTime(e) {
                 var count = this.newDateForm.count;    // 总次数
                if(e &&  this.newDateForm.editableTabs2.length < count){
                    console.log('增加标签',e)
                    let newTabName = ++this.newDateForm.tabIndex + '';
                    let title =moment(e).format("YYYY-MM-DD")
                    this.newDateForm.editableTabs2.push({
                        title: title,
                        name: newTabName,
                        content: title
                    });
                    this.newDateForm.editableTabsValue2 = newTabName;
                }else{
                     return this.$message({type:'warning',message:`重复日期超出指定次数   ${count}，请重新选择`})
                }
                this.overDate(this.newDateForm.checkListstate);
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
                    var time = this.newDateForm.startDate  // 开始日期
                    var count = this.newDateForm.count;    // 总次数
                    let week =  moment().format('YYYY-MM-DD'); // 当前时间的时间戳;
                    var datelist=[];                      // 上课时间列表
                    var weeks ='';
                    var maxdata = ''
                    var times =[];
                if(state==0){   // 每天
                    console.log(time)        
                    let alltime = moment(time, "YYYY-MM-DD").add(count,'days').format('YYYY-MM-DD');
                    console.log('次数',count,'结束日期为',alltime)
                    this.newDateForm.endDate = alltime;
                    // var alltime =  moment({ hour:time.split(':')[0], minute:time.split(':')[1] }).add({minute:daytime}).format('hh:mm')
                }else if(state==1){
                    // 转换时间
                    let data= this.newDateForm.checkListData // 
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

                }
                 console.log('第几周',datelist)
                 if(datelist){
                        let start =time;
                        let end = maxdata;
                        
                        const range = moment(end).diff(moment(start));
                        const d = moment.duration(range);
                        const days = d.asDays() + 1;  // 总天数  因为需要包含首尾所以加1
                        const weekDuration = Math.floor(d.asWeeks()); // 计算周数
                        const newStart = moment(start).add(weekDuration*7,'days').format('YYYY-MM-DD');  //整周的拿开 尾数为新的起始点
                        let weekendDays = 2*weekDuration;
                        
                        if(newStart !== end){ // 不是满周计算后续
                            let startDay = moment(newStart).format('d');
                            let endDay = moment(end).format('d');
                            if(startDay === '6'){ // 结束日期必然小于6
                            weekendDays++
                            if(endDay >= 0){
                                weekendDays++
                            }
                            }else if(startDay === '0'){
                            weekendDays++
                            if(endDay === '6'){ // 开始日期等于0 结束为0则为整周   不可能
                                weekendDays++
                            }
                            }
                        }else{
                            const endWeek = moment(newStart).format('d');  // 因为我这边数据包含首尾  需要扫尾
                            if(endWeek === '0' || endWeek === '6'){
                            weekendDays++;
                            }
                        }
                        let obj= {
                            weekDays: days - weekendDays,
                            weekendDays: weekendDays
                        }
                        console.log('几周',obj)
                 }
            },

            // 新建 选择中的班级
            handleSelectClass(item) {
                // 列表
                // 请求课程信息
                console.info('选择班级',item);
                this.newDateForm.className=item.name;
                getCourseInfoByClassId({classId:item.id}).then(res=>{
                    console.log('详情',res.result)
                    let arr =res.result;
                    if(arr !== '' && arr !== undefined && arr !== null){
                        let {className,courseName,lessonNum,lessonTime,num,onceTime,orgName,roomName,teacherName} =arr;
                        console.log(arr)
                            this.newDateForm.cousreName = courseName;
                            // this.newDateForm.helpTecher = item.helpTecher;
                            this.newDateForm.techerName = teacherName;
                            this.newDateForm.classroom = roomName;
                            this.newDateForm.courseShop =orgName;


                            this.newDateForm.coursetime =onceTime;

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
                    var alltime =  moment({ hour:time.split(':')[0], minute:time.split(':')[1] }).add({minute:daytime}).format('hh:mm')
                    console.log('分钟',daytime,'结果为',alltime)
                    this.newDateForm.endTime= alltime;
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
                if (id == 2) {  //单词编辑
                    this.dialogcourseVisible = false //关闭显示框
                    this.dialoginfoVisible = true  // 打开编辑框
                }
            },
            // 切换
            isshowtecher(){
                if(this.showtecher){
                    this.showtecher=false
                }else{
                    this.showtecher=true
                }
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                return 'warning-row';
                } else if (rowIndex === 3) {
                return 'success-row';
                }
                return '';
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
            // 选择日历
            handleSelectdate(e) {
                console.log('选择日历', e);
                var start = new Date(e.endStr).toLocaleDateString()
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
            // 用户日历单击事件
            handleDateClick(e) {
                console.log('点击日历', e);
                var date =moment(e.date).format("YYYY-MM-DD");
                console.log('开始日期',date)
                // 当前视图的开始结束时间
                var activeStart = moment(e.view.activeStart).format('YYYY-MM-DD HH:mm:ss');
                var activeEnd = moment(e.view.activeEnd).format('YYYY-MM-DD HH:mm:ss');
                var uid = e.view.uid;      // 表格uis
                console.log(uid,'开始一周',activeStart,activeEnd)    // 一星期
                // 关闭当前-进入新建
                this.my_newcourse=false;
                // 把时间传进入-赋值
                this.newDateForm.startTime=date;
                console.log(this.newDateForm.startTime)
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
            // 点击又内容的出发 编辑内容
            compilecnt(calEvent, jsEvent, view) {
                this.dialogcourseVisible = true;
                console.log('编辑内容', calEvent, jsEvent, view)
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