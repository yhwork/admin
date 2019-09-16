<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      <el-breadcrumb-item>线下爆款</el-breadcrumb-item>
      <el-breadcrumb-item>新建爆品</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">


      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="选择门店" name="first">
          <div class="select_store" v-if>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="number" label="门店名称"></el-table-column>
              <el-table-column prop="room_num" label="门店地址"></el-table-column>
              <el-table-column prop="state" label="状态"></el-table-column>
              <el-table-column label="勾选" width="280" align="center">
                <template slot-scope="scope">
                  <el-button type="text" icon="el-icon-plus" @click="campusSetup">添加</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    type="text"
                    icon="el-icon-delete"
                    class="red"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="btn_box1">
              <el-button>取消</el-button>
              <el-button type="primary">下一步</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品信息" name="second" disabled="">
          <div class="goods_info" v-else-if>
            <div>
              <div class="list_title">基本信息</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">产品名称：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">产品分类：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">产品特色：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
            </div>
            <div>
              <div class="list_title">价格信息</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="item_title">门店价（原价）：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="item_title">平台价（售价）：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="购买须知" name="third" disabled="">
          <div class="goods_info">
            <div>
              <div class="list_title">基本信息</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">产品名称：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol">*</span>
                  <span class="item_title">产品分类：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">产品特色：</span>
                </div>
                <el-input class="input_box" placeholder="请输入名称" v-model="getName"></el-input>
              </div>
            </div>
            <div>
              <div class="list_title">时间限定</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">销售时间：</span>
                </div>
                <template>
                  <div class="block">
                    <el-date-picker
                      v-model="value3"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </div>
                </template>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">有效期：</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">相对时间</el-radio>
                  <el-radio v-model="radio" label="2">指定时间</el-radio>
                </template>
                <div>
                  <span>下单后</span>
                  <input type="text">
                  <span>天有效</span>
                </div>
                <template>
                  <div class="block">
                    <el-date-picker
                      v-model="value3"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </div>
                </template>
              </div>
            </div>
            <div>
              <div class="list_title">购买条件</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">单人购买上限：</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">无上限</el-radio>
                  <el-radio v-model="radio" label="2">指定上限</el-radio>
                </template>
                <div>
                  <span>下单后</span>
                  <input type="text">
                  <span>天有效</span>
                </div>
              </div>
            </div>
            <div>
              <div class="list_title">预约</div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">预约方式：</span>
                </div>
                <template>
                  <el-radio v-model="radio" label="1">电话预约</el-radio>
                  <el-radio v-model="radio" label="2">系统预约</el-radio>
                </template>
                <div>
                  <span>门店名称：</span>
                  <input type="text" placeholder="请输入电话号码">
                </div>
              </div>
              <div class="input_item">
                <div class="symbol_box">
                  <span class="input_symbol2">*</span>
                  <span class="item_title">适应年龄：</span>
                </div>
                <div>
                  <input type="text" placeholder="请输入电话号码">
                  <span>-</span>
                  <input type="text" placeholder="请输入电话号码">
                  <span>岁的人群</span>
                </div>
              </div>
            </div>
            <div class="btn_box1">
              <el-button>取消</el-button>
              <el-button type="primary">下一步</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="图文消息" name="fourth" disabled="">图文消息</el-tab-pane>
        <el-tab-pane label="结算方式" name="fifth" disabled="">结算方式</el-tab-pane>
      </el-tabs>-->

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div>
          <div class="title">
            基本信息
            <!-- <span>收起</span> -->
          </div>
          <el-form-item label="产品名称：" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请输入产品名称" style="width:500px;"></el-input>
          </el-form-item>
          <!-- <el-form-item label="产品分类：" prop="category">
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
          </el-form-item>-->
          <!-- <el-form-item label="课程类型：" prop="classType">
            <el-radio-group v-model="ruleForm.classType" @change="changeCourse">
              <el-radio :label="0">线下课程</el-radio>
              <el-radio :label="1">线上课程</el-radio>
            </el-radio-group>
          </el-form-item>-->
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
          <!--上传视频-->
          <div v-if="course_type">
            <el-form-item label="线上视频：" :required="true">
              <div class="store_box">
                <el-upload
                  class="upload_box1"
                  :action="url_root + img_url"
                  accept=".mp4, .qlv, .qsv, .ogg, .flv, .avi, .wmv, .rmvb"
                  :headers="headers"
                  :data="paramsdata"
                  :show-file-list="false"
                  :before-upload="beforeUploadVideo"
                  :on-success="handleVideoSuccess"
                  :on-progress="uploadVideoProcess"
                >
                  <video
                    v-if="Video !='' && videoFlag == false"
                    :src="Video"
                    width="350"
                    height="180"
                    controls="controls"
                  >您的浏览器不支持视频播放</video>
                  <i
                    v-else-if="Video =='' && videoFlag == false"
                    class="el-icon-plus avatar-uploader-icon"
                  ></i>
                  <el-progress
                    v-if="videoFlag == true"
                    type="circle"
                    :percentage="videoUploadPercent"
                    style="margin-top:30px"
                  ></el-progress>
                </el-upload>
                <div style="margin-left:150px;">
                  视频名称：
                  <el-input
                    style="width:300px;"
                    v-model="ruleForm.videotitle"
                    placeholder="请填入该视屏名称"
                  ></el-input>
                </div>
              </div>

              <div class="hint_info">目前仅支持在手机端播放，建议时常15分钟以下视频，建议视频宽比16:9</div>
            </el-form-item>
            <el-form-item label="视频用途：" :required="true">
              <el-radio-group v-model="classType" @change="changePurpose">
                <el-radio :label="0">一般视频</el-radio>
                <el-radio :label="1">考级培训视频</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="级别选择：" :required="true" prop="category" v-if="purpose_state">
              <el-select v-model="ruleForm.category" value-key="id" placeholder="请选择">
                <el-option
                  v-for="item in categoryList"
                  :label="item.name"
                  :key="item.id"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <!--课程名称-->
          <el-form-item label="课程名称：" prop="category">
            <el-select
              v-model="ruleForm.courseId"
              value-key="id"
              placeholder="请选择"
              @change="changecourseList"
            >
              <el-option
                v-for="(item,index) in ruleForm.courseLIst"
                :label="item.name"
                :key="index"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="班级名称：" prop="category">
            <el-select
              v-model="ruleForm.classId"
              value-key="id"
              placeholder="请选择"
              @change="changeClass"
            >
              <el-option
                v-for="item in ruleForm.classList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="产品分类：">
            <el-radio-group v-model="ruleForm.productTypeId">
              <!-- <el-radio :label="12">随班课程</el-radio> -->
              <el-radio :label="13">课程包</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="产品标签：" prop="lable">
            <el-select
              style="width:800px;"
              v-model="ruleForm.labelArray"
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
            <!-- <el-button>确定</el-button> -->
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
          <div>
            <div v-if="!course_type">
              <el-form-item label="课程规格：" :required="true">
                <div class="rule_title">
                  <div>课程次数</div>
                  <div>每次课时</div>
                  <div>划线价格</div>
                  <div>实售价</div>
                  <div>名额</div>
                </div>
                <div class="rule_box">
                  <div class="rule_content">
                    <el-form-item prop="courseNum">
                      <el-input
                        v-model="ruleForm.courseNum"
                        type="number"
                        placeholder="输入课程次数"
                        :disabled="edit_id"
                        style="width:200px"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="courseTime">
                      <el-input
                        v-model="ruleForm.courseTime"
                        placeholder="输入每次课时"
                        :disabled="edit_id"
                        style="width:150px"
                      ></el-input>
                      <span>分钟/次</span>
                    </el-form-item>
                    <el-form-item prop="origPrice">
                      <el-input
                        v-model="ruleForm.origPrice"
                        type="number"
                        placeholder="输入划线价格"
                        style="width:190px"
                      ></el-input>
                      <span>元</span>
                    </el-form-item>
                    <el-form-item prop="disPrice">
                      <el-input
                        v-model="ruleForm.disPrice"
                        type="number"
                        placeholder="输入实售价"
                        style="width:170px"
                      ></el-input>
                      <span>元</span>
                    </el-form-item>
                    <el-form-item prop="count">
                      <el-input v-model="ruleForm.count" placeholder="输入名额"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </el-form-item>

              <el-form-item label="开课日期：" :required="true">
                <el-date-picker
                  v-model="ruleForm.courseStartTime"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="开始日期"
                  :disabled="edit_id"
                  :picker-options="pickerOptions0"
                  @change="changeCourseStartTime"
                ></el-date-picker>
                <span>至</span>
                <el-date-picker
                  v-model="ruleForm.courseEndTime"
                  value-format="yyyy-MM-dd"
                  :disabled="edit_id"
                  type="date"
                  placeholder="结束日期"
                  :picker-options="pickerOptions0"
                  @change="changeCourseEndTime"
                ></el-date-picker>
              </el-form-item>
               <el-form-item label="上课门店：" prop>
                  <template>
                    <el-time-select
                      placeholder="起始时间"
                      v-model="ruleForm.startTime"
                      :disabled="edit_id"
                      :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }">
                    </el-time-select>
                    <el-time-select
                      placeholder="结束时间"
                      :disabled="edit_id"
                      v-model="ruleForm.endTime"
                      :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime:ruleForm.startTime
                      }">
                    </el-time-select>
                  </template>
               </el-form-item>
              

              <!-- <div class="store_box">
                <el-form-item label="上课门店：" prop>
                  <el-select v-model="value" placeholder="请选择" style="width:500px">
                    <el-option
                      v-for="item in orglist"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name"
                    ></el-option>
                  </el-select>
                  <div class="hint_info">如果多个门店通用，则增加其他门店，但用户一旦选择了上课门店，则所有课程都在门店完成</div>
                </el-form-item>
                <el-button type="primary" style="margin-left:20px;" @click="addStore">增加上课门店</el-button>
              </div>

              <div class="store_box">
                <el-form-item label="上课时间：" :required="true" style="width:86%">
                  <el-table :data="orglist" :default-expand-all="true">
                    <el-table-column type="expand" :default-expand-all="true">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="expand_box">
                          <div label v-for="(item,index) in orglist[0].courseTime" :key="index">
                            <el-form-item>{{item.classStartTime}}~{{item.classEndTime}}</el-form-item>
                            <el-form-item>{{item.startTime}}~{{item.endTime}}</el-form-item>
                            <el-form-item class="week_content">
                              <span v-for="(i,index) in item.weekday" :key="index">{{i}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>{{item.teacherName}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>{{item.roomName}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>可预约人数 {{item.number}} 人</span>
                            </el-form-item>
                            <el-form-item>
                              <template>
                                <el-button
                                  type="text"
                                  @click="lookClassTime(props.row.id,index,props.row)"
                                >查看</el-button>
                                <el-button
                                  type="text"
                                  @click="delClassTime(props.row.id,index)"
                                  :disabled="item.iedit=='true'?true:false"
                                >删除</el-button>
                              </template>
                            </el-form-item>
                          </div>
                        </el-form>
                      </template>
                    </el-table-column>

                    <el-table-column label="门店名称：" prop="orgName"></el-table-column>

                    <el-table-column label="操作" width="280" align="center">
                      <template slot-scope="scope">
                        <el-button
                          type="text"
                          v-if="isUpSetClassTime"
                          @click="setClassTime(scope.$index,scope.row)"
                        >设置上课时间</el-button>
                        <el-button
                          @click="setClassTime(scope.$index,scope.row)"
                          :class="isUpSetClassTime?'':'isclasscolors'"
                          type="text"
                          v-else
                        >设置上课时间</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form-item>

                <div style="width:9%;display: flex;align-items: flex-end;flex-direction: column;">
                  <el-button type="primary" @click="addStore">增加上课门店</el-button>
                  <div
                    class="hint_info"
                    style="margin-top:20px;line-height:20px"
                  >如果选择门店中没有相应门店，则点击设置门店</div>
                </div>
              </div>

              <el-dialog title="查看上课日期" :visible.sync="classTimeState" width="30%">
                <div label-width="65px" size="medium">
                  <div
                    v-for="(item,index) in tempFilterDate"
                    :key="index"
                    class="time_item"
                  >{{item}}</div>
                  <el-row style="display: flex;justify-content: flex-end;">
                    <el-button type="primary" @click="cancleDialog1" style="margin-top:10px">取消</el-button>
                  </el-row>
                </div>
              </el-dialog>

              <el-dialog title="设置上课时间" :visible.sync="dialogFormVisible" class="dialog_box">
                <div label-width="65px" size="medium">
                  <div v-if="firstStep">
                    <el-form-item label="开课日期范围：">
                      <el-date-picker
                        v-model="courseStartTime"
                        :picker-options="pickerOptions0"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="开始日期"
                        :disabled="date_state"
                        @change="changeCourseStartTime"
                      ></el-date-picker>
                      <span>至</span>
                      <el-date-picker
                        v-model="courseEndTime"
                        :picker-options="pickerOptions0"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="结束日期"
                        :disabled="date_state"
                        @change="changeCourseEndTime"
                      ></el-date-picker>
                      <el-button type="primary" style="margin-left:20px;" @click="setDate">重新设置</el-button>
                    </el-form-item>

                    <el-form-item label="门店名称：">{{className}}</el-form-item>

                    <el-form-item label="开课日期：">
                      <el-date-picker
                        v-model="classStartTime"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd"
                        :picker-options="pickerOptions0"
                        @change="setClassStartTime"
                      ></el-date-picker>
                      <div class="hint_info">每个门店开课日期只能设置开课日期范围内</div>
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
                      <div class="hint_info">开课日期范围可选择的星期</div>
                    </el-form-item>

                    <el-form-item label="结课日期：">
                      <el-date-picker
                        v-model="courseEndTime"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期"
                        :disabled="endtime_state"
                        @change="changeCourseEndTime"
                      ></el-date-picker>
                    </el-form-item>

                    <el-form-item label="上课时间：">
                      <div class="date_info">
                        <div class="date_box">
                          <el-select v-model="startTime" placeholder="请选择" style="width:150px">
                            <el-option
                              v-for="item in startTimeArray"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>~
                          <el-select v-model="endTime" placeholder="请选择" style="width:150px">
                            <el-option
                              v-for="item in endTimeArray"
                              :key="item"
                              :label="item"
                              :value="item"
                            ></el-option>
                          </el-select>
                        </div>
                        <el-input v-model="teacherName" placeholder="教师" />
                        <el-input v-model="roomName" placeholder="请输入教室" />
                        <el-input
                          v-model="number"
                          type="number"
                          placeholder="预约人数"
                          style="width:200px"
                        />
                      </div>
                    </el-form-item>
                  </div>

                  <el-row v-else>
                    <el-alert title="预约时间再次确认" type="warning" :closable="false"></el-alert>
                    <div class="campus_title">所在校区：{{className}}</div>
                    <div>
                      <div class="transfer_box">
                        <el-transfer
                          v-model="dateValue"
                          :props="{key: 'id',label: 'name'}"
                          :titles="['已选日期', '过滤日期']"
                          :data="dateArray"
                          @change="changeTransfer"
                        ></el-transfer>
                      </div>
                      <div class="hint_info">上课日期可能包含节假日，请根据实际情况安排上课时间，一旦确定将不能修改</div>
                    </div>
                  </el-row>

                  <el-row style="display: flex;justify-content: flex-end;">
                    <el-button type @click="cancleDialog">取消</el-button>
                    <el-button type="primary" @click="nextStep" v-if="firstStep">下一步</el-button>
                    <el-button type="primary" @click="prevStep" v-if="firstStep!=true">上一步</el-button>
                    <el-button type="primary" @click="saveClassTime" v-if="firstStep!=true">完成</el-button>
                  </el-row>
                </div>
              </el-dialog>
              -->
            </div>

            <el-form-item label="有效期：" :required="true">开课日期内都有效</el-form-item>
          </div>
          <div v-if="course_type">
            <el-form-item label="划线价格：" prop="origPrice">
              <el-input
                v-model="ruleForm.origPrice"
                type="number"
                placeholder="请输入划线价格"
                style="width:200px"
              ></el-input>
            </el-form-item>
            <el-form-item label="实际价格：" prop="disPrice">
              <el-input
                v-model="ruleForm.disPrice"
                type="number"
                placeholder="请输入实际价格"
                style="width:200px"
              ></el-input>
            </el-form-item>
            <el-form-item label="收费标准：" prop="videoCount">
              <el-radio-group v-model="standard" @change="changeStandard">
                <div class="info_box" style="margin-bottom:10px;">
                  <el-radio :label="0">按次收费</el-radio>
                  <div>视频可以观看次数</div>
                  <el-input v-model="ruleForm.videoCount" type="number" style="width:300px;">
                    <template slot="prepend">视频可以观看次数</template>
                  </el-input>
                </div>
                <div class>
                  <el-radio :label="1">周期内有效</el-radio>
                  <el-date-picker
                    v-model="cycleStartTime"
                    :picker-options="pickerOptions0"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="开始日期"
                    @change="changeCycleStartTime"
                  ></el-date-picker>
                  <span>至</span>
                  <el-date-picker
                    v-model="cycleEndTime"
                    :picker-options="pickerOptions0"
                    value-format="yyyy-MM-dd"
                    type="date"
                    placeholder="结束日期"
                    @change="changeCycleEndTime"
                  ></el-date-picker>
                </div>
                <!-- <el-radio :label="1">时间段收费</el-radio> -->
              </el-radio-group>
              <div class="hint_info">如果按次数收费，则视频不能快进和快退等反复观看</div>
            </el-form-item>

            <el-form-item label="观看方式：" prop>
              <el-radio-group v-model="way" @change="changeWay">
                <el-radio :label="0">在线观看</el-radio>
                <!-- <el-radio :label="1">下载观看</el-radio> -->
              </el-radio-group>
            </el-form-item>
          </div>

          <el-form-item v-if="!course_type" label="生效时间：" :required="true">
            首次上课签到后生效
            <!-- <el-input v-model="ruleForm.legal_name" placeholder="首次上课签到后生效" ></el-input> -->
          </el-form-item>

          <el-form-item v-else label="有效时间：" prop="effectiveTime">
            <el-input
              v-model="ruleForm.effectiveTime"
              placeholder="购买即生效，不支持退款"
              style="width: 300px"
            ></el-input>
          </el-form-item>

          <!-- <el-form-item label="限购：" prop="limit">
            <div class="info_box">
              <span>每人累计可购买</span>
              <el-input v-model="ruleForm.limit" type="number" style="width:100px;font-size:14px"></el-input>
              <span>次</span>
            </div>
            <div class="hint_info">如果填写0，则不限购</div>
          </el-form-item>-->

          <div v-if="course_type">
            <el-form-item label="购买人群：" :required="true">
              <el-radio-group v-model="icrowd" @change="changeCrowd">
                <el-radio :label="0">没有限制</el-radio>
                <el-radio :label="1">指定人员名单</el-radio>
              </el-radio-group>
              <div v-if="crowd_state">
                <el-upload
                  class="upload_box"
                  :action="url_root + img_url"
                  :multiple="false"
                  :limit="1"
                  :on-exceed="handleExceed"
                  :http-request="uploadFile"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传xls/png文件，且不超过500kb</div>
                </el-upload>
              </div>
            </el-form-item>
          </div>

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
          <!-- 表单富文本 -->
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

          <div v-if="course_type">
            <el-form-item label="下架时间：" :required="true">
              <el-radio-group v-model="shelf_down" @change="shelfDown">
                <el-radio :label="0">永久销售</el-radio>
                <div>
                  <el-radio :label="1">定时下架，设置下架时间</el-radio>
                  <el-date-picker
                    v-model="shelfDownTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    :disabled="time_state1"
                  ></el-date-picker>
                </div>
              </el-radio-group>
            </el-form-item>
          </div>
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
              <el-carousel height="190px">
                <el-carousel-item v-for="item in this.ruleForm.imgVideo" :key="item">
                  <img :src="item" alt />
                </el-carousel-item>
              </el-carousel>
              <div class="popup_banner">
                <div class="goods_title">{{ruleForm.title}}</div>
                <div class="goods_info">{{ruleForm.subtitle}}</div>
                <div class="lable_box">
                  <div
                    class="label_item"
                    v-for="(item,index) in this.ruleForm.lable"
                    :key="index"
                  >{{item}}</div>
                </div>
                <div>
                  <span class="o_price">¥{{ruleForm.disPrice}}</span>
                  <span>|</span>
                  <span class="d_price">门市价¥{{ruleForm.origPrice}}</span>
                  <span class="label_info">随时退</span>
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
                <div class="popup_box" id="editor_s" style="padding:8px" v-html="editor_content"></div>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
/**
 * 去除                    开售时间  saleStartTime(startime)   限购   limit（）
 */

//引入
import UEditor from "@/components/page/ueditor.vue";
import URL from "@/api/config";
import {getCourseClass, getAllCourse} from '@/api/demo'
/**
   * 所有参数
   * {
  "addBy": 0,
  "count": 0,                 总库存
  "courseId": 0,
  "descr": "string",          产品介绍(html)
  "disPrice": 0,              产品优惠价格
  "endTime": "string",        产品结束时间
  "groupEndTime": "string",   拼团结束时间
  "groupPrice": 0,            拼团价格
  "groupStartTime": "string", 拼团开始时间
  "id": 0,
  "igroup": 0,                是否拼团(0-否 1-是)
  "imgVideo": "string",       产品图片/视频格式:产品图片{"0":"商品主图(必填)","1":"附图","2":"附图","3":"附图","4":"附图"}
  "ishelf": 0,                是否上架
  "lable": "string",
  "level": 0,                 产品标签{"id1":"value1","id2":"value2"}
  "memberNum": 0,             拼团人数
  "orgId": 0,
  "origPrice": 0,             产品原价
  "sortNum": 0,
  "startTime": "string",      产品开始时间
  "status": 0,
  "subjectId": 0,             产品分类Id
  "subtitle": "string",       产品卖点
  "surplusCount": 0,          剩余库存
  "title": "string",          产品名称
  "type": 0,
  "updateBy": 0,
  "video": "string",          线上视频：[{"video_title":"视频标题1","video_content":"视频地址1"},{"video_title":"视频标题2","video_content":"视频地址2"}]
  "videoEndTime": "string",
  "videoLevel": 0,            视频等级：0无、1级、2级、3级等
  "videoStartTime": "string",
  "videoType": 0              视频用途：0一般视频 1考级培训视频
}
   */
export default {
  components: {
    UEditor //挂载
  },
  props: [],
  name: "goods_setup",
  inject: ["reload"],
  data() {
    return {
      url_root: "",
      // img_url: "/store/file/img/upload",   // 代理
      img_url: "/file/img/upload",         // 本地配置 config
      //富文本配置设置
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
      addFormVisible: false,
      isUpSetClassTime: true, // 控制上课时间
      //今天之前不可选
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },

      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      dateArray: [],
      dateValue: [],
      temp: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      Video: "",
      videoFlag: false, //刚开始的时候显示为flase
      videoUploadPercent: "0%", //进度条刚开始的时候为0%
      paramsdata: {
        参数: "参数值" //添加其他参数
      },
      index: "",
      categoryList: [],
      orglist: [],
      repeat_state: 2,
      igroup: 1,
      icrowd: 0,
      standard: 0,
      way: 0,
      classType: 0,
      shelf_down: 0,
      time_state: true,
      time_state1: true,
      assemble_state: true,
      course_type: false,
      purpose_state: true,
      crowd_state: false,
      view_state: false,
      firstStep: true,
      endtime_state: false, //节课时间禁用
      img_state1: false,
      img_state2: false,
      img_state3: false,
      startTime: "",
      endTime: "",
      saleTime: 0,
      shelfDownTime: "",
      startTimeArray: [
        "10:00",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:15",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
        "17:00",
        "17:15",
        "17:30",
        "17:45",
        "18:00",
        "18:15",
        "18:30",
        "18:45",
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "20:45",
        "21:00"
      ],
      endTimeArray: [
        "10:00",
        "10:15",
        "10:30",
        "10:45",
        "11:00",
        "11:15",
        "11:30",
        "11:45",
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
        "14:00",
        "14:15",
        "14:30",
        "14:45",
        "15:00",
        "15:15",
        "15:30",
        "15:45",
        "16:00",
        "16:15",
        "16:30",
        "16:45",
        "17:00",
        "17:15",
        "17:30",
        "17:45",
        "18:00",
        "18:15",
        "18:30",
        "18:45",
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "20:45",
        "21:00"
      ],
      dateRange: [new Date(2019, 4, 1), new Date(2019, 4, 30)],
      date_state: true,
      teacherName: "",
      roomName: "",
      number: "",
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
      checkWeek: ["星期一"],
      iDays: "",
      isIndeterminate: true,
      activeName: "first",
      dialogImageUrl: "",
      dialogVisible: false,
      iShelf: 1,
      dialogFormVisible: false,
      classTimeState: false,
      imageUrl: "",
      imgList: [],
      activeIndex: "1",
      activeName: "first",
      disabled: true,
      value3: "",
      value: "",
      getName: "",
      tableData: [],
      campusArray: [{ name: "迪斯尼英语徐汇校区" }],
      className: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      options5: [
        {
          value: "初级基础",
          label: "初级基础"
        }
      ],
      labelArray: [],
      classStartTime: "",
      classStartTime1: "", // 上课起始时间
      classEndTime: "",
      tempimgVideo: [],
      courseTimeArray: [],
      courseStartTime: "",
      courseEndTime: "",
      groupTimeArray: [],
      groupStartTime: "",
      groupEndTime: "",
      cycleStartTime: "",
      cycleEndTime: "",
      saleStartTime: "",
      saleEndTime: "",
      ruleForm: {
        startTime:'',
        endTime:'',
        productTypeId: 13,
        title: "",          // 产品名称
        category: "",
        subtitle: "",
        courseId:0, // 课程id
        courseTimeList: [], // 课程列表
        classId:'', // 班级Id
        classList: [], // 班级列表
        courseLIst:[],
        labelArray:[],
        courseNum: "",
        courseTime: "",
        origPrice: "",
        disPrice: "",
        count: "",
        groupPrice: "",
        memberNum: "",
        lable: [],
        imgVideo: [],   // 图片列表
        tempImgVideo: [],
        limit: 1,
        videoCount: "",
        effectiveTime: "",
        description: "",
        imgList: "",
        classType: 0,
        courseStartTime: "",
        course: [],
      },
      rules: {
        title: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { max: 50, message: "最多50字" }
        ],
        imgVideo: [{ required: true, message: "请上传图片", trigger: "blur" }],
        course: [
          { required: true, message: "请设置上课时间", trigger: "blur" }
        ],
        count: [{ required: true, message: "请输入名额", trigger: "blur" }],
        limit: [{ required: true, message: "请输入限购人数", trigger: "blur" }],
        classType: [
          { required: true, message: "选择课程类型", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择产品分类", trigger: "blur" }
        ],
        courseNum: [
          { required: true, message: "请输入课节数", trigger: "blur" }
        ],
        courseTime: [
          { required: true, message: "请输入课程时长", trigger: "blur" }
        ],
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
      },
      edit_id: "",
      courseId: "",
      filterDate: [],
      tempFilterDate: [],
      editor_content: "",
      tempCourseTime: []
    };
  },
  activated() {
    let data = this.$route.query;
    console.log("接受数据", data);
    console.log("url", URL.root);
    this.url_root = URL.root;
    this.getCategory(); //获取分类
  },
  created() {
    this.getCategory(); //获取分类
    let data = this.$route.query;
    console.log("接受数据", data);
    console.log("url", URL.root);
    this.url_root = URL.root;
    // console.log('12312',this.data.row);
    // 编辑id
    this.edit_id = this.$route.query.id ? this.$route.query.id : "";
    console.log("门店id", this.edit_id);
    if (this.edit_id != "") {
      this.getEditInfo(); // 请求编辑内容   classStartTime
    } else {
      this.getOrgList(); //获取门店
    }
   
  },

  watch: {
    // 监听路由
    $route(to, from) {
      this.edit_id = this.$route.query.id ? this.$route.query.id : "";
      if (this.edit_id != "") {
        this.getEditInfo();
      }
    }
  },
  methods: {
    // 改变班级
    changeClass(e) {
      console.log(e);
    },
    // 改变课程
    changecourseList(e) {
      console.log('改变的课程',e);
      let courseLIst = this.ruleForm.courseLIst;
      // 查询班级
      if(!e || e==0){
          this.ruleForm.classList=[{name:'请选择',id:0}]
          this.ruleForm.classId=0;
          this.ruleForm.courseNum = '';
          this.ruleForm.courseTime ='';
          this.ruleForm.courseStartTime = '';
          this.ruleForm.courseEndTime=''
          this.ruleForm.startTime = '';
          this.ruleForm.endTime = '';
         return
      }
      let [{endDate,endTime,lessonNum,lessonTime,startDate,startTime}]= courseLIst.filter(item=>item.id==e);
      // 赋值
      this.ruleForm.courseNum = lessonNum;
      this.ruleForm.courseTime =lessonTime;
      this.ruleForm.courseStartTime = startDate;
      this.ruleForm.courseEndTime=endDate
      this.ruleForm.startTime = startTime;
      this.ruleForm.endTime = endTime;
      console.log('数据',startDate,this.ruleForm.courseStartTime)

      getCourseClass({id:e}).then(res=>{
        console.log('班级列表',res.result);
        let data = res.result;
        if(data){
          this.ruleForm.classList=data;
          this.ruleForm.classList.unshift({name:'请选择',id:0})
        }
      })
    },
    //获取文档内容
    getContent: function() {
      let content = this.$refs.ueditor.getUEContent();
      alert(content);
    },
    //
    setContent() {
      console.log(UE);
      this.$refs.ueditor.setContent("<p>要传入的值</p>");
    },

    changeTransfer(e) {
      // console.log("transfer", e);
      // console.log(this.dateArray,this.dateValue);
    },
    // /hotProduct/addHotOneLineProduct
    //获取分类
    getCategory() {
      getAllCourse().then(res=>{
        console.log('课程列表',res)
         let data = res.result;
         if(data){
           this.ruleForm.courseLIst=data
           this.ruleForm.courseLIst.unshift({name:'请选择',id:0})
         }else{
           return this.message({type:'warning',message:'课程暂无数据'})
         }
      })
      // this.$axios({
      //   method: "get",
      //   url: "/store/org/getOrgSubList",
      //   headers: { Authorization: sessionStorage.getItem("Authorization") }
      // }).then(res => {
      //     this.categoryList = res.data.result;
      //   })
      //   .catch(error => {
      //     console.log("error", error);
      //   });
    },
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
          console.log("门店id", temp);
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
            this.orglist[i].courseTime = []; // 给清空值
          }

          console.log("orglist", this.orglist);
          // var arr32 = [];
          // arr32 = temp.map(function(item,index){
          //   return {
          //     name: item.name,
          //   }
          // });
          // console.log(arr32);
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

    //上传图片成功
    uploadImg(response, file, fileList) {
      var temp = fileList;
      var tempArray = {}; //创建一个空对象
      for (var i = 0; i < temp.length; i++) {
        tempArray[i] = temp[i].response.result;
      }
      console.log('上传成功后的图片列表',tempArray)
      this.ruleForm.imgVideo = tempArray;
      console.log(this.ruleForm.imgVideo);
    },
    // 上传图片后展示
    previewImg(file) {
      this.dialogImageUrl = file.url;
      console.log('展示',this.dialogImageUrl)
      this.dialogVisible = true;
    },
    // 移除图片
    removeImg(file, fileList) {
      console.log(file, fileList);
      this.ruleForm.imgVideo = fileList;
    },

    //上传视频
    beforeUploadVideo(file) {
      //视频上传之前判断他的大小
      const isLt10M = file.size / 1024 / 1024 < 2000;
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过2000MB哦!");
        return false;
      }
    },

    uploadVideoProcess(event, file, fileList) {
      //视频上传的时候获取上传进度传给进度条
      this.videoFlag = true;
      this.videoUploadPercent = parseInt(file.percentage);
      console.log(this.videoUploadPercent);
    },

    handleVideoSuccess(res, file) {
      //视频上传成功之后返回视频地址
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      this.Video = res.result;
    },

    // 上传文件Excel
    beforeUpload(file) {
      console.log("beforeUpload");
      console.log(file.type);
      const isText = file.type === "application/vnd.ms-excel";
      const isTextComputer =
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      return isText | isTextComputer;
    },

    // 上传文件个数超过定义的数量
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`);
    },

    // 上传文件
    uploadFile(item) {
      console.log(item);
      const fileObj = item.file;
      // FormData 对象
      const form = new FormData();
      // 文件对象
      form.append("file", fileObj);
      form.append("comId", this.comId);
      console.log(JSON.stringify(form));
      // let formTwo = JSON.stringify(form)
      // EnterAPI.iExcel(form).then(response => {
      //   console.log("MediaAPI.upload");
      //   console.log(response);
      //   this.$message.info("文件：" + fileObj.name + "上传成功");
      // });
    },

    //添加上课门店
    addStore() {
      this.$router.push("/course");
    },
    //添加标签
    changeLabel(e) {
      var temp = this.ruleForm.labelArray;
      var tempArray = {}; //创建一个空对象
      for (var i = 0; i < temp.length; i++) {
        tempArray[i] = temp[i];
      }
      this.ruleForm.lable = tempArray;
    },
    // 预览-显示数据
    showMask() {
      this.view_state = true;
      this.editor_content = this.$refs.ueditor.getUEContent();
      console.log("获取内容", this.editor_content);
    },

    cancleMask() {
      this.view_state = false;
    },

    //各类状态
    changeAssemble(e) {
      this.assemble_state = !this.assemble_state;
      console.log("igroup", this.assemble_state);
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
    changeCourse(e) {
      this.course_type = !this.course_type;
      this.ruleForm.lable = "";
      (this.ruleForm.labelArray = ""), (this.ruleForm.subtitle = "");
      this.ruleForm.courseNum = "";
      this.ruleForm.courseTime = "";
      this.ruleForm.origPrice = "";
      this.ruleForm.disPrice = "";
    },

    changeCrowd() {
      this.crowd_state = !this.crowd_state;
    },

    changePurpose() {
      this.purpose_state = !this.purpose_state;
    },

    //收费标准
    changeStandard(e) {},

    //观看方式
    changeWay(e) {

    },
    changeSaleTime(e) {
      this.saleTime = e;
      if (e == 1) {
        this.time_state = false;
      } else {
        this.time_state = true;
      }
    },

    changeCourseTime(e) {
      this.courseTimeArray = e;
    },

    // orglist

    // 开课起始日期
    changeCourseStartTime(e) {
      // this.courseStartTime = e;

      this.ruleForm.courseStartTime =e;
      console.log("起始时间");
    },
    // 开课结束日期
    changeCourseEndTime(e) {
      // this.courseEndTime = e;
      this.ruleForm.courseEndTime = e;
      console.log("结束时间");
    },
    changeGroupTime(e) {
      this.groupTimeArray = e;
    },
    changeGroupStartTime(e) {
      this.groupStartTime = e;
    },
    changeGroupEndTime(e) {
      this.groupEndTime = e;
    },
    //设置开售时间
    changeSaleStartTime(e) {
      this.saleStartTime = e;
    },
    changeSaleEndTime(e) {
      this.saleEndTime = e;
    },
    changeCycleStartTime(e) {
      this.cycleStartTime = e;
    },
    changeCycleEndTime(e) {
      this.cycleEndTime = e;
    },

    //上课时间范围
    changeDate(e) {
      this.courseTimeArray = e;
    },

    setDate() {
      this.date_state = false;
    },

    changeRepeat(e) {
      this.repeat_state = e;
    },

    //设置上课时间
    setClassStartTime(e) {
      if (this.isUpSetClassTime) {
        this.week = new Date(e).getDay();
        console.log("周", this.week);
        var count = this.ruleForm.courseNum; //课程次数
        var repeatTime = this.checkWeek.length;
        var startTime = this.classStartTime;
        // var endTime = this.courseTimeArray[1];
        var endTime = this.courseEndTime;
        var dateSpan, iDays;
        startTime = Date.parse(startTime);
        endTime = Date.parse(endTime);
        dateSpan = endTime - startTime;
        dateSpan = Math.abs(dateSpan);
        console.log("设置", startTime, endTime, dateSpan);
        iDays = Math.floor(dateSpan / (24 * 3600 * 1000)) + 2;
        this.iDays = iDays;
        console.log("天", this.iDays);
        if (this.courseEndTime == "" || this.courseStartTime == "") {
          this.$message.error("请设置开课日期范围");
        } else {
          if (iDays < 7) {
            switch (this.week) {
              case 0:
                this.weekState = ["星期日"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期日"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期一", "星期二", "星期三", "星期日"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期一", "星期二", "星期日"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期一", "星期日"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期日"];
                }
                break;
              case 1:
                this.weekState = ["星期一"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期一", "星期二", "星期三", "星期四"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期一", "星期二", "星期三"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期一", "星期二"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期一"];
                }
                break;
              case 2:
                this.weekState = ["星期二"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期二", "星期三", "星期四", "星期五"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期二", "星期三", "星期四"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期二", "星期三"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期二"];
                }
                break;
              case 3:
                this.weekState = ["星期三"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期三", "星期四", "星期五", "星期六"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期三", "星期四", "星期五"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期三", "星期四"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期三"];
                }
                break;
              case 4:
                this.weekState = ["星期四"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期一",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期四", "星期五", "星期六", "星期日"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期四", "星期五", "星期六"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期四", "星期五"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期四"];
                }
                break;
              case 5:
                this.weekState = ["星期五"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期五",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期一", "星期五", "星期六", "星期日"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期五", "星期六", "星期日"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期五", "星期六"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期五"];
                }
                break;
              case 6:
                this.weekState = ["星期六"];
                if (iDays == 6) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 5) {
                  this.weekArray = [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期六",
                    "星期日"
                  ];
                } else if (iDays == 4) {
                  this.weekArray = ["星期一", "星期二", "星期六", "星期日"];
                } else if (iDays == 3) {
                  this.weekArray = ["星期一", "星期六", "星期日"];
                } else if (iDays == 2) {
                  this.weekArray = ["星期六", "星期日"];
                } else if (iDays == 1) {
                  this.weekArray = ["星期六"];
                }
                break;
            }
          } else {
            switch (this.week) {
              case 0:
                this.weekState = ["星期日"];
                break;
              case 1:
                this.weekState = ["星期一"];
              case 2:
                this.weekState = ["星期二"];
                break;
              case 3:
                this.weekState = ["星期三"];
                break;
              case 4:
                this.weekState = ["星期四"];
                break;
              case 5:
                this.weekState = ["星期五"];
                break;
              case 6:
                this.weekState = ["星期六"];
                break;
            }
            //
            this.weekArray = [
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
              "星期日"
            ];
            var tempTime = parseInt((iDays / 7) * repeatTime);
            if (tempTime < count) {
              this.$message.error("请重新设置开课日期或重复天");
            }
          }
        }
        //
        this.classStartTime = e;
        this.classStartTime1 = e;
        console.log("classstarttime", this.classStartTime);
        console.log("classStartTime1", this.classStartTime1);
      } else {
        console.log("有时间不能修改");
      }
    },

    // orglist

    //设置重复
    changeWeekAll(val) {
      this.weekState = val ? this.weekArray : [];
      this.isIndeterminate = false;
    },
    //设置重复星期
    changeWeek(array) {
      console.log(this.week);
      var count = this.ruleForm.courseNum; //课程次数
      this.checkWeek = array;
      let checkedCount = array.length;
      this.checkAll = checkedCount === this.weekArray.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.weekArray.length;
      var tempTime = parseInt((this.iDays / 7) * checkedCount);
      if (tempTime < count) {
        this.$message.error("请重新设置开课日期或重复天");
      }

      //  this.getWeek(this.classStartTime, this.courseTimeArray[1],this.week)
    },

    // 设置时间
    setClassTime(index, row) {
      console.log(index, row);
      this.className = row.name;
      this.class_id = row.id;
      this.dialogFormVisible = true;
    },

    // 计算续住的总日期列表
    getAll(begin, end) {
      let arr1 = begin.split("-");
      let arr2 = end.split("-");
      let arr1_ = new Date();
      let arrTime = [];
      arr1_.setUTCFullYear(arr1[0], arr1[1] - 1, arr1[2]);
      let arr2_ = new Date();
      arr2_.setUTCFullYear(arr2[0], arr2[1] - 1, arr2[2]);
      let unixDb = arr1_.getTime();
      let unixDe = arr2_.getTime();
      for (let k = unixDb; k <= unixDe; ) {
        arrTime.push(this.datetimeparse(k, "YYYY-MM-DD"));
        k = k + 24 * 60 * 60 * 1000;
      }
      return arrTime;
    },
    // 时间格式处理
    datetimeparse(timestamp, format, prefix) {
      if (typeof timestamp == "string") {
        timestamp = Number(timestamp);
      }
      //转换时区
      let currentZoneTime = new Date(timestamp);
      let currentTimestamp = currentZoneTime.getTime();
      let offsetZone = currentZoneTime.getTimezoneOffset() / 60; //如果offsetZone>0是西区，西区晚
      let offset = null;
      //客户端时间与服务器时间保持一致，固定北京时间东八区。
      offset = offsetZone + 8;
      currentTimestamp = currentTimestamp + offset * 3600 * 1000;

      let newtimestamp = null;
      if (currentTimestamp) {
        if (currentTimestamp.toString().length === 13) {
          newtimestamp = currentTimestamp.toString();
        } else if (currentTimestamp.toString().length === 10) {
          newtimestamp = currentTimestamp + "000";
        } else {
          newtimestamp = null;
        }
      } else {
        newtimestamp = null;
      }
      let dateobj = newtimestamp
        ? new Date(parseInt(newtimestamp))
        : new Date();
      let YYYY = dateobj.getFullYear();
      let MM =
        dateobj.getMonth() > 8
          ? dateobj.getMonth() + 1
          : "0" + (dateobj.getMonth() + 1);
      let DD =
        dateobj.getDate() > 9 ? dateobj.getDate() : "0" + dateobj.getDate();
      let HH =
        dateobj.getHours() > 9 ? dateobj.getHours() : "0" + dateobj.getHours();
      let mm =
        dateobj.getMinutes() > 9
          ? dateobj.getMinutes()
          : "0" + dateobj.getMinutes();
      let ss =
        dateobj.getSeconds() > 9
          ? dateobj.getSeconds()
          : "0" + dateobj.getSeconds();
      let output = "";
      let separator = "/";
      if (format) {
        separator = format.match(/-/) ? "-" : "/";
        output += format.match(/yy/i) ? YYYY : "";
        output += format.match(/MM/)
          ? (output.length ? separator : "") + MM
          : "";
        output += format.match(/dd/i)
          ? (output.length ? separator : "") + DD
          : "";
        output += format.match(/hh/i) ? (output.length ? " " : "") + HH : "";
        output += format.match(/mm/) ? (output.length ? ":" : "") + mm : "";
        output += format.match(/ss/i) ? (output.length ? ":" : "") + ss : "";
      } else {
        output += YYYY + separator + MM + separator + DD;
      }
      output = prefix ? prefix + output : output;

      console.log("output", output);
      // var temp=[]
      this.temp.push(output);
      console.log(this.temp, this.temp.length);
      var test = [];
      for (var i = 0; i < this.temp.length; i++) {
        console.log(i);
        test.push({
          id: i,
          name: this.temp[i]
        });
      }
      this.dateArray = test;
      return newtimestamp ? output : "";
    },

    /* 获取时间段内属于星期一(*)的日期们
     * begin: 开始时间
     * end：结束时间
     * weekNum：星期几 {number}
     */
    // 获取日期周
    getWeek(begin, end, weekNum) {
      var dateArr = new Array();
      var stimeArr = begin.split("-");
      var etimeArr = end.split("-");
      var stoday = new Date();
      stoday.setUTCFullYear(stimeArr[0], stimeArr[1] - 1, stimeArr[2]);
      var etoday = new Date();
      etoday.setUTCFullYear(etimeArr[0], etimeArr[1] - 1, etimeArr[2]);
      var unixDb = stoday.getTime(); //开始时间的毫秒数
      var unixDe = etoday.getTime(); //结束时间的毫秒数

      for (var k = unixDb; k <= unixDe; ) {
        let needJudgeDate = this.msToDate(parseInt(k)).withoutTime;
        //不加这个if判断直接push的话就是已知时间段内的所有日期
        if (new Date(needJudgeDate).getDay() === weekNum) {
          dateArr.push(needJudgeDate);
        }
        k = k + 24 * 60 * 60 * 1000;
      }

      this.temp.push(dateArr);
      var arr2 = [].concat.apply([], this.temp);
      this.filterDate = arr2;
      console.log("this.filterDate", this.filterDate, dateArr, arr2);
      var test = [];
      for (var i = 0; i < arr2.length; i++) {
        test.push({
          id: i,
          name: arr2[i]
        });
      }
      this.dateArray = test;

      return dateArr;
    },

    //根据毫秒数获取日期
    msToDate(msec) {
      let datetime = new Date(msec);
      let year = datetime.getFullYear();
      let month = datetime.getMonth();
      let date = datetime.getDate();
      let hour = datetime.getHours();
      let minute = datetime.getMinutes();
      let second = datetime.getSeconds();
      let result1 =
        year +
        "-" +
        (month + 1 >= 10 ? month + 1 : "0" + (month + 1)) +
        "-" +
        (date + 1 < 10 ? "0" + date : date) +
        " " +
        (hour + 1 < 10 ? "0" + hour : hour) +
        ":" +
        (minute + 1 < 10 ? "0" + minute : minute) +
        ":" +
        (second + 1 < 10 ? "0" + second : second);

      let result2 =
        year +
        "-" +
        (month + 1 >= 10 ? month + 1 : "0" + (month + 1)) +
        "-" +
        (date + 1 < 11 ? "0" + date : date);

      let result = {
        hasTime: result1,
        withoutTime: result2
      };
      return result;
    },

    //上课时间弹窗
    cancleDialog() {
      this.dialogFormVisible = false;
      this.firstStep = true;
      this.classStartTime = "";
      this.courseTimeArray = "";
      this.courseEndTime = "";
      this.courseStartTime = "";
      this.startTime = "";
      this.endTime = "";
      this.teacherName = "";
      this.roomName = "";
      this.number = "";
      this.checkWeek = ["星期一"];
      this.filterDate = [];
      this.temp = [];
    },

    cancleDialog1() {
      this.classTimeState = false;
    },
    // 看班级时间
    lookClassTime(id, sindex, row) {
      console.log("look", id, sindex, row);
      this.classTimeState = true;
      var list = this.orglist;
      list.forEach(item => {
        if (item.id == id) {
          for (var i in item.courseTime) {
            if (i == sindex) {
              this.tempFilterDate = item.courseTime[i].courseDate;
            }
          }
        }
      });
      console.log("tempFilterDate", this.tempFilterDate);
    },
    // 删除班级时间
    delClassTime(id, sindex) {
      var list = this.orglist;
      list.forEach(item => {
        if (item.id == id) {
          for (var i in item.courseTime) {
            if (i == sindex) {
              item.courseTime.splice(sindex, 1);
            }
          }
        }
      });
      this.orglist = list;
    },

    prevStep() {
      this.firstStep = true;
      this.temp = [];
      this.dateValue = [];
    },
    nextStep() {
      if (this.classStartTime == "") {
        this.$message.error("请设置开课日期");
      } else if (this.startTime == "") {
        this.$message.error("请设置上课时间");
      } else if (this.endTime == "") {
        this.$message.error("请设置上课时间");
      } else if (this.teacherName == "") {
        this.$message.error("请输入教师");
      } else if (this.roomName == "") {
        this.$message.error("请输入教室");
      } else if (this.number == "") {
        this.$message.error("请输入预约人数");
      } else {
        this.firstStep = false;
        var checkWeek = this.checkWeek;
        var week_state = "";
        for (var i in checkWeek) {
          if (checkWeek[i] == "星期一") {
            week_state = 1;
          } else if (checkWeek[i] == "星期二") {
            week_state = 2;
          } else if (checkWeek[i] == "星期三") {
            week_state = 3;
          } else if (checkWeek[i] == "星期四") {
            week_state = 4;
          } else if (checkWeek[i] == "星期五") {
            week_state = 5;
          } else if (checkWeek[i] == "星期六") {
            week_state = 6;
          } else if (checkWeek[i] == "星期日") {
            week_state = 0;
          }
          this.getWeek(
            this.classStartTime,
            // this.courseTimeArray[1],
            this.courseEndTime,
            week_state
          );
        }
      }
    },

    // 存班级时间
    saveClassTime() {
      var orglist = this.orglist; //原数据
      var count = this.ruleForm.courseNum; //课程次数
      //计算可不可以排课
      var tempTime = parseInt((this.iDays / 7) * this.checkWeek.length);
      if (tempTime < count) {
        this.$message.error("请重新设置开课日期或重复天");
      } else {
        // //添加排课
        if (this.classStartTime == "") {
          this.$message.error("请设置开课日期");
        } else {
          //过滤日期
          var list = this.filterDate;
          console.log("filterDate", filterDate);
          var templist = this.dateValue;
          console.log("templist", templist);
          let newArr = [];
          // 数组去重
          for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < templist.length; j++) {
              if (i == templist[j]) {
                newArr.push(list[i]);
              }
            }
          }
          // 过滤 filterDate日期   返回没有重复的日期
          let tempArr = list.filter(items => {
            // includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
            if (!newArr.includes(items)) return items;
          });
          console.log(tempArr);

          // for (let i = 0; i < newArr.length; i++) {
          //   for (let j = 0; j < list.length; j++) {
          //     if (list[j] == newArr[i]) {
          //       list.splice(j, 1);
          //       j = j - 1;
          //     }
          //   }
          // }

          this.filterDate = tempArr;

          for (var i in orglist) {
            if (orglist[i].id == this.class_id) {
              var courseTime = {};
              courseTime.classStartTime = this.classStartTime;
              courseTime.classEndTime = this.courseEndTime;
              courseTime.startTime = this.startTime;
              courseTime.endTime = this.endTime;
              courseTime.weekday = this.checkWeek;
              courseTime.teacherName = this.teacherName;
              courseTime.roomName = this.roomName;
              courseTime.number = this.number;
              courseTime.courseDate = this.filterDate;
              courseTime.courseDateStr = this.filterDate;
              courseTime.iedit = false;
              orglist[i].courseTime.push(courseTime);
            }
          }
          this.orglist = orglist;
          console.log("orglist", this.orglist);
        }
        this.dialogFormVisible = false;

        setTimeout(() => {
          this.firstStep = true;
          this.classStartTime = "";
          this.startTime = "";
          this.endTime = "";
          this.teacherName = "";
          this.roomName = "";
          this.number = "";
          this.checkWeek = ["星期一"];
          this.filterDate = [];
          this.temp = [];
          this.dateValue = [];
        }, 500);
      }
    },
    // 返回上一级
    goList() {
      this.$router.go(-1);
    },
    // 获取请求编辑信息             
    getEditInfo() {
      //
      this.$axios({
        method: "get",
        url: "/store/hotProduct/getHotProductInfo/" + this.edit_id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      }).then(res => {
          //设置富文本内容
          console.log("设置富文本内容", res.data.result.descr);
          setTimeout(() => {
            this.$refs.ueditor.setContent(res.data.result.descr);
          }, 1000);
          //重组图片
          this.ruleForm.imgVideo = JSON.parse(res.data.result.imgVideo);
          var temp = Object.values(JSON.parse(res.data.result.imgVideo));
          this.tempImgVideo = res.data.result.imgVideo;
          if (temp.length > 0) {
            // 初始化图片
            this.imgList = [];
            for (let t = 0; t < temp.length; t++) {
              // 设置图片
              this.imgList.push({
                name: "",
                url: temp[t],
                response: { result: temp[t] }
              });
            }
          }
          let courseId = res.data.result.courseId;
          this.ruleForm.courseId = courseId;
           getCourseClass({id:courseId}).then(data=>{
            console.log('班级列表班级列表',data.result);
            var data = data.result;
            if(data){
              this.ruleForm.classList=data;
              this.ruleForm.classList.unshift({name:'请选择',id:0});
              this.ruleForm.classId = res.data.result.classId;
            }
          })
         
          //重组标签
          var tempLabel = Object.values(JSON.parse(res.data.result.lable));
          this.ruleForm.labelArray = tempLabel;
          this.ruleForm.lable = tempLabel;
          //设置拼团状态
          if (res.data.result.igroup == 0) {
            this.assemble_state = false;
            this.igroup = 0;
          }
          this.ruleForm.title = res.data.result.title;
          this.ruleForm.productTypeId = res.data.result.subjectId;
          this.ruleForm.subtitle = res.data.result.subtitle;

          this.ruleForm.origPrice = res.data.result.origPrice;
          this.ruleForm.disPrice = res.data.result.disPrice;
          this.ruleForm.count = res.data.result.count;
          this.groupStartTime = res.data.result.groupEndTime;
          this.groupEndTime = res.data.result.groupStartTime;
          this.ruleForm.groupPrice = res.data.result.groupPrice;
          this.ruleForm.memberNum = res.data.result.memberNum;

          getAllCourse().then(res=>{
              let data = res.result;
              if(data){
                let [{endDate,endTime,lessonNum,lessonTime,startDate,startTime}]= data.filter(item=>item.id==courseId);
                // 赋值
                this.ruleForm.courseNum = lessonNum;
                this.ruleForm.courseTime =lessonTime;
                this.ruleForm.courseStartTime = startDate;
                this.ruleForm.courseEndTime=endDate
                this.ruleForm.startTime = startTime;
                this.ruleForm.endTime = endTime;
                this.ruleForm.courseLIst.unshift({name:'请选择',id:0})
              }else{
                return this.message({type:'warning',message:'课程暂无数据'})
              }
          })
       
          console.log("开始结束时间", this.ruleForm);
          //处理上课时间
          this.orglist = res.data.result.courseTimeList;
         
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    // 保存时获取列表   2
    tempOrgList() {
      var orglist = this.orglist;
      var tempList = JSON.parse(JSON.stringify(orglist));
      console.log("list列表时间", orglist, tempList);
      //  orglist.forEach((value, index) => {
      //   tempList[index].orgId = value.orgId;
      //   tempList[index].orgName = value.orgName;
      //   // 过滤
      //   tempList[index].courseTime = value.courseTime.filter(
      //     item => item.iedit != "true"
      //   );
      // });
      //  orglist.forEach((value, index) => {
      //   // 过滤  iedit=true  显示还是不显示呢
      //   tempList[index].courseTime = value.courseTime.filter(
      //     item =>{ return item.iedit != "true"}
      //   );
      // });
      this.tempCourseTime = tempList;

      console.log("list列表时间", orglist, tempList);
    },
    // 保存数据                                          3
    submitForm(formName) {
      // 表单 验证 jQuery
      this.$refs[formName].validate(valid => {
        console.log("valid", valid, this.ruleForm);
        let content = this.$refs.ueditor.getUEContent();

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
        // 判断输入的课程名称
        let {courseId,classId} =this.ruleForm;
        if(!courseId){
          return this.$message({type:'warning',message:'请选择课程'})
        }else if( !classId){
          return this.$message({type:'warning',message:'请选择班级'})
        }
        if (this.edit_id != "") {
          this.tempOrgList(); // 获取列表时间
          //处理上课时间
          var orglist = this.tempCourseTime; // 为啥从这获取数据呢
          console.log("orglist测试", orglist);
          // 你干了啥
          for (var i in orglist) {
            console.log(orglist[i]);
            for (var j in orglist[i].courseTime) {
              orglist[i].courseTime[j].weekday = JSON.stringify(
                orglist[i].courseTime[j].weekday
              );
              console.log(orglist[i].courseTime[j].weekday);
              orglist[i].courseTime[j].courseDateStr = JSON.stringify(
                orglist[i].courseTime[j].courseDateStr
              );
            }
          }
          console.log("orglist测试1", orglist);
        } else {
          //处理上课时间
          var orglist = this.orglist;
          for (var i in orglist) {
            for (var j in orglist[i].courseTime) {
              orglist[i].courseTime[j].weekday = JSON.stringify(
                orglist[i].courseTime[j].weekday
              );
              orglist[i].courseTime[j].courseDateStr = JSON.stringify(
                orglist[i].courseTime[j].courseDateStr
              );
            }
          }
        }
        // 是传过来的id？   orglist
        var params = {
          id: parseInt(this.edit_id),
          title: this.ruleForm.title,
          subjectId: this.ruleForm.productTypeId,
          imgVideo: temp_img,
          lable: JSON.stringify(this.ruleForm.lable),
          subtitle: this.ruleForm.subtitle,
          courseNum: this.ruleForm.courseNum,
          courseTime: this.ruleForm.courseTime, // 是这个吗
          origPrice: this.ruleForm.origPrice,
          disPrice: this.ruleForm.disPrice,
          igroup: this.igroup,
          groupPrice: this.ruleForm.groupPrice,
          groupStartTime: this.groupStartTime ? this.groupStartTime : null,
          groupEndTime: this.groupEndTime ? this.groupEndTime : null,
          count: this.ruleForm.count,
          surplusCount: this.ruleForm.courseTime,
          ishelf: this.iShelf,
          courseId: courseId,
          classId: classId,
          course: orglist, 
          descr: content, // 文本
          startTime: this.saleStartTime ? this.saleStartTime : null, // 开始时间
          endTime: this.saleEndTime ? this.saleEndTime : null, // 结束时间
          memberNum: this.ruleForm.memberNum,
          courseEndDate: this.ruleForm.courseEndTime, //  课程结束时间
          courseStartDate: this.ruleForm.courseStartTime //  课程起始时间
        };

        console.log("参数2", params);
        /**
         * 问题   id 为获取    创建不需要id
         * 问题2  startTime  为null
         */
        // 请求验证
        // if (valid) {
          // 有id  进行修改
          if (this.edit_id != "") {
            this.$axios({
              method: "post",
              url: "/store/hotProduct/updateHotProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                console.log("编辑信息", res.data);
                if (res.data.errorCode == "2") {
                  this.$message("上课时间设置不能为空"); //courseStartDate  为空
                } else {
                  this.$router.go(-1);
                  this.ruleForm.veryify_code = "";
                }
              })
              .catch(error => {
                console.log("error", error);
              });
          } else {
            // 没有id   进行添加
            this.$axios({
              method: "post",
              url: "/store/hotProduct/addHotProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                let e = res.data;

                console.log("add-success", res);
                if (e.errorCode == 0 ) {
                  // 确认添加成功才返回商品类表
                  this.$router.push("/host_product");
                  this.ruleForm.veryify_code = "";
                }
              })
              .catch(error => {
                console.log("error", error);
              });
          }
          
        // } else {

          // if (this.ruleForm.title == "") {
          //   this.$message.error("请输入产品名称");
          // } else if (this.ruleForm.productTypeId == "") {
          //   this.$message.error("请选择产品分类");
          // } else if (this.ruleForm.imgVideo == "") {
          //   this.$message.error("请上传图片");
          // } else if (this.ruleForm.courseNum == "") {
          //   this.$message.error("请输入课节数");
          // } else if (this.ruleForm.courseTime == "") {
          //   this.$message.error("请输入课程时长");
          // } else if (this.ruleForm.origPrice == "") {
          //   this.$message.error("请输入产品原价");
          // } else if (this.ruleForm.disPrice == "") {
          //   this.$message.error("请输入产品优惠价格");
          // } else if (this.ruleForm.count == "") {
          //   this.$message.error("请输入名额");
          // } else if (this.ruleForm.courseStartTime == "") {
          //   this.$message.error("请设置开课日期");
          // } else if (this.ruleForm.groupPrice == "") {
          //   this.$message.error("请输入拼团价格");
          // } else if (this.ruleForm.memberNum == "") {
          //   this.$message.error("请输入拼团人数");
          // }
        // }
      });
    }
  }
};
</script >

<style scoped>
.dialog_box >>> .el-dialog {
  width: 65% !important;
}
#editor_s {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
#editor_s p img {
  width: 100% !important;
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
/**预览手机 */
.device-ios {
  width: 380px;
  height: 730px;
  background: #111;
  border-radius: 50px;
  box-shadow: 0px 0px 0px 2px #aaa;
  padding: 20px 15px;
  position: relative;
  /* margin-right: 80px; */
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

.isclasscolors {
  color: #999;
}
</style>


