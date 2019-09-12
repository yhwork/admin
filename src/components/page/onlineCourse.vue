<template>
  <div class="campus">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品中心</el-breadcrumb-item>
      <el-breadcrumb-item>线上爆款</el-breadcrumb-item>
      <el-breadcrumb-item v-if=" edit_id=='' ">新建爆品</el-breadcrumb-item>
      <el-breadcrumb-item v-else>线上编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content_box1">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <div>
          <div class="title">
            基本信息
            <!-- <span>收起</span> -->
          </div>
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
          <!-- v-if="course_type" -->
          <div>
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
                    width="200"
                    height="160"
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
                  <div>
                    <!-- <el-form-item label="视频等级" prop="grade">
                      <el-select
                        v-model="ruleForm.grade"
                        value-key="id"
                        placeholder="请选择"
                        @change="changeGrade"
                      >
                        <el-option
                          v-for="item in gradelist"
                          :label="item.name"
                          :key="item.id"
                          :value="item.id"
                        ></el-option>
                      </el-select>
                    </el-form-item>-->
                    <el-form-item>
                      视频名称：
                      <el-input
                        style="width:300px;"
                        v-model="ruleForm.videotitle"
                        placeholder="请填入该视屏名称"
                      ></el-input>
                    </el-form-item>
                  </div>
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
            <el-form-item label="级别选择：" :required="true" v-if="!purpose_state">
              <!-- value-key="id" -->
              <el-select v-model="videoLevel" placeholder="请选择" @change="changeLevel">
                <el-option v-for="item in levelList" :label="item" :key="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </div>
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
          <!-- 
          <div>
            <div v-if="!course_type">
              <!<el-form-item label="课程规格：" :required="true"> 
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
                        style="width:200px"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="courseTime">
                      <el-input
                        v-model="ruleForm.courseTime"
                        placeholder="输入每次课时"
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
                --><!-- <el-date-picker
                  v-model="courseTimeArray"
                  value-format="yyyy-MM-dd"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="changeCourseTime"
                ></el-date-picker>

                <el-date-picker
                  v-model="courseStartTime"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="开始日期"
                  :picker-options="pickerOptions0"
                  @change="changeCourseStartTime"
                ></el-date-picker>
                <span>至</span>
                <el-date-picker
                  v-model="courseEndTime"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="结束日期"
                  :picker-options="pickerOptions0"
                  @change="changeCourseEndTime"
                ></el-date-picker>
              </el-form-item>

              <div class="store_box">
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
                <el-form-item label="上课时间：" :required="true" style="width: 73%">
                  <el-table :data="orglist" :default-expand-all="true">
                    <el-table-column type="expand" :default-expand-all="true">
                      <template slot-scope="props">
                        <el-form label-position="left" inline class="expand_box">
                          <div label v-for="(item,index) in props.row.courseTime" :key="index">
                            <el-form-item>{{item.classStartTime}}~{{item.classEndTime}}</el-form-item>
                            <el-form-item>{{item.startTime}}~{{item.endTime}}</el-form-item>
                            <el-form-item class="week_content">
                              <span v-for="i in item.week">{{i}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>{{item.teacher}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>{{item.room}}</span>
                            </el-form-item>
                            <el-form-item label>
                              <span>可预约人数 {{item.num}} 人</span>
                            </el-form-item>
                          </div>
                        </el-form>
                      </template>
                    </el-table-column>
                    <el-table-column label="门店名称：" prop="name"></el-table-column>
                    <el-table-column label="操作" width="280" align="center">
                      <template slot-scope="scope">
                        <el-button type="text" @click="setClassTime(scope.$index,scope.row)">设置上课时间</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form-item>
                <div style="margin-left:70px;">
                  <el-button type="primary" @click="addStore">增加上课门店</el-button>
                  <div class="hint_info" style="margin-top:20px;">如果选择门店中没有相应门店，则点击设置门店</div>
                </div>
          </div>-->
          <!-- 上课时间弹窗 -->

              <!--  <el-dialog title="设置上课时间" :visible.sync="dialogFormVisible" class="dialog_box">
                <div label-width="65px" size="medium">
                  <div v-if="firstStep">
                    <el-form-item label="开课日期范围：">
                     <el-date-picker
                        v-model="courseTimeArray"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :disabled="date_state"
                        @change="changeDate"
                      ></el-date-picker>

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
                        <el-input v-model="teacherName" placeholder="教师"/>
                        <el-input v-model="roomName" placeholder="请输入教室"/>
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
                    <! <el-table border :data="classInfo" style="width: 100%">
                      <el-table-column prop="date" label="上课时间" width="180"></el-table-column>
                      <el-table-column prop="name" label="教师名称" width="180"></el-table-column>
                      <el-table-column prop="address" label="教室"></el-table-column>
                      <el-table-column prop="num" label="预约人数"></el-table-column>
                    </el-table>
                    <div>
                      <!<el-alert
                        style="margin-top:20px;"
                        title="预约时间再次确认"
                        type="warning"
                        :closable="false"
                      ></el-alert>
                      <div class="transfer_box">
                        <el-transfer
                          v-model="dateValue"
                          :props="{key: 'id',label: 'name'}"
                          :titles="['已选日期', '过滤日期']"
                          :data="dateArray"
                          @change="changeTransfer"
                        ></el-transfer>
                      </div>
                      <div class="hint_info">如果上课日期遇到节假日，则点击取消，上课日期和时间一旦确定不能修改，否则相应用户预约</div>
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
              
            </div>
            <el-form-item label="有效期：" :required="true">开课日期内都有效</el-form-item>
          </div>
          -->
          <!-- v-if="course_type" -->
          <div>
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
          <!-- <el-form-item v-if="!course_type" label="生效时间：" :required="true">
            首次上课签到后生效
             <el-input v-model="ruleForm.legal_name" placeholder="首次上课签到后生效" ></el-input> 
          </el-form-item>-->
          <!-- v-else -->
          <el-form-item label="有效时间：" prop="effectiveTime">
            购买即生效，不支持退款
            <!-- <el-input
              v-model="ruleForm.effectiveTime"
              placeholder="购买即生效，不支持退款"
              style="width: 300px"
            ></el-input>-->
          </el-form-item>
          <el-form-item label="限购：" prop="limit">
            <div class="info_box">
              <span>每人累计可购买</span>
              <el-input v-model="ruleForm.limit" type="number" style="width:100px;font-size:14px"></el-input>
              <span>次</span>
            </div>
            <div class="hint_info">如果填写0，则不限购</div>
          </el-form-item>
          <!-- v-if="course_type" -->
          <div>
            <el-form-item label="购买人群：" :required="true">
              <el-radio-group v-model="icrowd" @change="changeCrowd">
                <el-radio :label="0">没有限制</el-radio>
                <el-radio :label="1">指定人员名单</el-radio>
              </el-radio-group>
              <div v-if="crowd_state">
                <!-- <el-upload   
                  action="/store/file/img/upload"
                  :multiple='false'
                  :auto-upload='true'
                  list-type='text'
                  :show-file-list='true'
                  :before-upload="beforeUpload"
                  :drag='true'
                  :limit="1"
                  :on-exceed="handleExceed"
                  :http-request="uploadFile">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div class="el-upload__text">上传名单</div> 
                </el-upload>-->

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
              <!-- <el-form-item label="拼团日期：" prop style="margin-bottom:20px;margin-left:10px;">
                <div class="info_box">
                  <!<el-date-picker
                    v-model="groupTimeArray"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd"
                    @change="changeGroupTime"
                  ></el-date-picker> 
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
              </el-form-item>-->
            </div>
          </el-form-item>
          <el-form-item label="课程详情：" :required="true">
            <!-- ======================================================================================================================================================== -->
            <!-- <UE :defaultMsg="defaultMsg" :config="config" :id="ue1" ref="ue" :init="myInit"></UE> -->
            <UEditor :config="config" ref="ueditor"></UEditor>
            <!-- <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button> -->
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
          <!-- v-if="course_type" -->
          <!-- <div >
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
          </div>-->
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
                  <div class="label_item" v-for="(item,index) in this.ruleForm.lable" :key="index">{{item}}</div>
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
// import TinymceEditor from "./tinymce-editor";
// import UE from "@/components/page/UE.vue";
import UEditor from "@/components/page/ueditor.vue";
import URL  from '@/api/config';
export default {
  components: {
    // TinymceEditor,
    // UE
    UEditor
  },
  name: "online_setup",
  inject: ["reload"],
  data() {
    return {
       url_root:'',
      img_url:'/store/file/img/upload',
      config: {
        //可以在此处定义工具栏的内容
        // toolbars: [
        //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
        //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
        //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
        // ],
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent: "请输入内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        // autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: 900,
        initialFrameHeight: 400,
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/ueditor/"
      },
      addFormVisible: false,

      // myInit: "",
      // defaultMsg: "请输入",
      // ue1: "ue1", // 不同编辑器必须不同的id
      // config: {
      //   initialFrameWidth: 900,
      //   initialFrameHeight: 400,
      //   autoHeightEnabled: false,
      //   autoFloatEnabled: true
      // },

      //今天之前不可选
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },

      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      // {id:1,name:'测试1'},{id:2,name:'测试2'},{id:3,name:'测试3'}
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
      //          childSub: null
      // id: 1
      // name: "课程"
      // pid:
      gradelist: [
        {
          childSub: null,
          id: 0,
          name: "无",
          pid: 0
        },
        {
          childSub: null,
          id: 1,
          name: "一级",
          pid: 0
        },
        {
          childSub: null,
          id: 2,
          name: "二级",
          pid: 0
        },
        {
          childSub: null,
          id: 3,
          name: "三级",
          pid: 0
        },
        {
          childSub: null,
          id: 4,
          name: "四级",
          pid: 0
        },
        {
          childSub: null,
          id: 5,
          name: "五级",
          pid: 0
        },
        {
          childSub: null,
          id: 6,
          name: "六级",
          pid: 0
        },
        {
          childSub: null,
          id: 7,
          name: "七级",
          pid: 0
        },
        {
          childSub: null,
          id: 8,
          name: "八级",
          pid: 0
        },
        {
          childSub: null,
          id: 9,
          name: "九级",
          pid: 0
        },
        {
          childSub: null,
          id: 10,
          name: "十级",
          pid: 0
        }
      ], // 视频等级
      categoryList: [],
      levelList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      videoLevel: "",    // 视频级别
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
      assemble_state: true,   // 视频拼团
      course_type: false,
      purpose_state: true,
      crowd_state: false,
      view_state: false,
      firstStep: true,
      endtime_state: true,
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
      classInfo: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          num: 10
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          num: 10
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          num: 10
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          num: 10
        }
      ],
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
      hotCourseId:'',  //视频id
      ruleForm: {
        grade: "",
        title: "",
        category: "",
        category:'',  // 分类
        subtitle: "",
        courseNum: "",
        courseTime: "",    // 上课时间
        origPrice: "",
        disPrice: "",
        count: "",
        groupPrice: "",
        memberNum: "",    // 拼团价格
        lable: [],
        imgVideo: [],     
        tempImgVideo: [],
        limit: 1,
        videoCount: "",    // 观看视频次数
        effectiveTime: "",
        description: "",
        imgList: "",
        classType: 0,
        // courseStartTime:'',
        course: [],
        count: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入产品名称", trigger: "blur" },
          { max: 50, message: "最多50字" }
        ],
        imgVideo: [{ required: true, message: "请上传图片", trigger: "blur" }],
        // courseStartTime:[
        //   { required: true, message: "请选择开课日期", trigger: "blur" }
        // ],
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
        grade: [{ required: true, message: "请选视频等级", trigger: "blur" }],
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
      editor_content: ""
    };
  },
   activated() {
    console.log('url',URL.root);
    this.url_root = URL.root;
  },
  created() {
    this.edit_id = this.$route.query.id ? this.$route.query.id : "";
    // 编辑
    // console.log(this.edit_id)
    if (this.edit_id != "") {
      // 调取信息
      this.getEditInfo();
      // 获取产品分类列表
      this.getOneLineProductSubList();
    }
    //
    // this.getCategory();
    // this.getOrgList();
    console.log("creater");
    // 获取产品分类列表
    this.getOneLineProductSubList();
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
    // 等级
    changeGrade(e) {
      this.ruleForm.grade = e;
      //          childSub: null
      // id: 1
      // name: "课程"
      // pid:
    },
    changeTransfer(e) {
      // console.log("transfer", e);
      // console.log(this.dateArray,this.dateValue);
    },

    //获取分类
    // getCategory() {
    //   this.$axios({
    //     method: "get",
    //     url: "/store/org/getOrgSubList",
    //     headers: { Authorization: sessionStorage.getItem("Authorization") }
    //   })
    //     .then(res => {
    //       this.categoryList = res.data.result;
    //     })
    //     .catch(error => {
    //       console.log("error", error);
    //     });
    // },
    //改变种类
    changeCategory(e) {
      console.log("选择", e);
      this.ruleForm.category = e;
      // console.log(this.categoryList)
    },

    //获取门店
    getOrgList() {
      this.$axios({
        method: "get",
        url: "/store/org/getOrgListByOrgid",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log(res);
          if (res) var arr3 = [];
          var arr32 = [];
          var temp = res.data.result;

          temp.forEach(function(item, index) {
            arr3.push({
              name: temp[index].name,
              id: temp[index].id,
              orgId: sessionStorage.getItem("orgId")
            });
          });
          this.orglist = arr3;
          for (var i in this.orglist) {
            this.orglist[i].courseTime = [];
          }

          // console.log("orglist", this.orglist);

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

    //上传图片
    uploadImg(response, file, fileList) {
      var temp = fileList;
      var tempArray = {}; //创建一个空对象
      for (var i = 0; i < temp.length; i++) {
        tempArray[i] = temp[i].response.result;
      }
      this.ruleForm.imgVideo = tempArray;
      console.log("上传图片", this.ruleForm.imgVideo);
    },

    previewImg(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

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
      console.log(this.editor_content);
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
    // 改变课程
    changeCourse(e) {
      this.course_type = !this.course_type;
      this.ruleForm.lable = "";
      (this.labelArray = ""), (this.ruleForm.subtitle = "");
      this.ruleForm.courseNum = "";
      this.ruleForm.courseTime = "";
      this.ruleForm.origPrice = "";
      this.ruleForm.disPrice = "";
    },

    changeCrowd() {
      this.crowd_state = !this.crowd_state;
    },

    changePurpose(e) {
      console.log(e)
      this.purpose_state = !this.purpose_state;
      this.classType = e;
    },

    //收费标准
    changeStandard(e) {},

    //观看方式
    changeWay(e) {},

    changeSaleTime(e) {
      this.saleTime = e;
      if (e == 1) {
        this.time_state = false;
      } else {
        this.time_state = true;
      }
      // this.gendTime = this.courseTimeArray[1] + " 00:00:00";
      // this.gendTime = this.courseEndTime + " 00:00:00";
    },

    changeCourseTime(e) {
      this.courseTimeArray = e;
    },
    changeCourseStartTime(e) {
      this.courseStartTime = e;
    },
    changeCourseEndTime(e) {
      this.courseEndTime = e;
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
      this.week = new Date(e).getDay();
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
      iDays = Math.floor(dateSpan / (24 * 3600 * 1000)) + 2;
      this.iDays = iDays;

      if (this.courseEndTime == "" || this.courseStartTime == "") {
        this.$message.error("请设置开课日期范围");
      } else {
        //计算过滤日期
        // this.getAll(this.classStartTime, this.courseTimeArray[1]);

        //计算过滤掉星期的日期
        // this.getWeek(this.classStartTime, this.courseTimeArray[1],this.week)

        console.log(this.week, "ll");

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
            case 6:
              this.weekState = ["星期六"];
              break;
          }
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
      this.classStartTime = e;
    },

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
      // console.log(arr2);
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

    saveClassTime() {
      var orglist = this.orglist;
      var count = this.ruleForm.courseNum; //课程次数

      //计算可不可以排课
      var tempTime = parseInt((this.iDays / 7) * this.checkWeek.length);
      if (tempTime < count) {
        this.$message.error("请重新设置开课日期或重复天");
      } else {
        // this.firstStep = false;
        // //添加排课
        if (this.classStartTime == "") {
          this.$message.error("请设置开课日期");
        } else {
          //过滤日期
          var list = this.filterDate;
          var templist = this.dateValue;
          let newArr = [];
          for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < templist.length; j++) {
              if (i == templist[j]) {
                newArr.push(list[i]);
              }
            }
          }

          let tempArr = list.filter(items => {
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
              courseTime.week = this.checkWeek;
              courseTime.teacher = this.teacherName;
              courseTime.room = this.roomName;
              courseTime.num = this.number;
              courseTime.filterDate = this.filterDate;
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
    // 改变视频级别
    changeLevel(e) {
      this.videoLevel = e;
    },

    goList() {
      this.$router.go(-1);
    },
    // 获取线上主营类列表
    getOneLineProductSubList() {
      this.$axios({
        method: "get",
        url: "/store/org/getOneLineProductSubList/",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      }).then(res => {
        console.log("主营类列表", res.data);
        this.categoryList = res.data.result;
      });
    },
        //获取文档内容
    getContent:()=> {
      let content = this.$refs.ueditor.getUEContent();
      return content
    },
    //
    setContent:(txt)=> {
      console.log("内容",txt);
      this.$refs.ueditor.setContent(txt);
    },
    // 请求获取编辑内容
    getEditInfo() {
      this.$axios({
        method: "get",
        url: "/store/hotProduct/getHotOneLineProductInfoById/" + this.edit_id,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
            // content: "[{"video_logo":"视频logo","video_title":"视频1","video_content":"地址1"},{"video_logo":"视频logo","video_title":"视频2","video_content":"地址2"}]"
            // count: 100000   // 库存
            // descr: "<p style="line-height: 1.75em;">以五线谱基础知识及音程、调式、和弦为主。</p><p style="line-height: 1.75em;">特殊说明：</p><p style="line-height: 1.75em;">1.每个级别考生只能购买与自己相对应的级别</p><p style="line-height: 1.75em;">2.培训将在7月6日开始</p><p><br/></p>"
            // disPrice: 350    // 实际价格
            // origPrice: 500   
            // groupEndTime: null     
            // groupPrice: null
            // groupStartTime: null
            // hotCourseId: 49       // 视频id
            // id: 123       // 产品id
            // igroup: 0     // 是否拼团
            // imgVideo: "{"0":"https://qa.oss.iforbao.com/store/63/201906100106348070.png?Expires=4713771994&OSSAccessKeyId=LTAIAjysqrPPyNVJ&Signature=ln3XuQzYkaKK6nn%2FygaPilQxURU%3D"}"
            // lable: "[]"
            // subtitle: ""    // 卖点
            // memberNum: 0  
            // subjectId: 7   // 产品分类
            // surplusCount: 99945   // 剩余库存
            // title: "上海音乐家协会电子琴乐理7级培训课程"
            // videoLevel: 7     // 视频等级
            // videoType: 0   1  // 视频用途
// content
          var result = res.data.result
          console.log("info",result);
          if (res.data.errorCode == 0) {
            this.defaultMsg =result.descr;
            //视频内容显示
            this.video_content = result.content;
            // 富文本内容
            this.editor_content = result.descr;
            // 标题
            this.ruleForm.title =  result.title
            // 富文本内容
            this.config.initialContent = this.editor_content;   // 不行啊
            console.log('内容',this.config.initialContent)
            var atime =null;
            // this.setContent(this.editor_content)
            atime= setTimeout(() => {
              this.$refs.ueditor.setContent(res.data.result.descr);
              atime = null  
            },1500);
            // 重组图片
            this.ruleForm.imgVideo = JSON.parse(result.imgVideo);
            // 视频等级
            this.videoLevel = result.videoLevel;
            this.hotCourseId = result.hotCourseId;
            // 视频用途
            this.classType = result.videoType;
            // 是否拼团
            if(result.igroup  == 0){
              this.assemble_state = false
              this.igroup = 0;
            }else{
               this.assemble_state = true
               this.igroup = 1;
            }
            
            var temp = Object.values(JSON.parse(result.imgVideo));
            if (temp.length > 0) {
              for (let t = 0; t < temp.length; t++) {
                this.imgList.push({
                  name: "",
                  url: temp[t],
                  response: { result: temp[t] }
                });
              }
            }
            // 视频等级链接
            this.tempImgVideo = result.imgVideo;
            //重组标签
            var tempLabel = Object.values(JSON.parse(res.data.result.lable));
            this.labelArray = tempLabel;
            console.log(tempLabel);
            this.ruleForm.lable = tempLabel;  // 标签
            this.ruleForm.category = res.data.result.subjectId; // 分类id
            this.ruleForm.subtitle = res.data.result.subtitle;   // 点
            this.ruleForm.origPrice = res.data.result.origPrice;
            this.ruleForm.disPrice = res.data.result.disPrice;
            this.ruleForm.count = res.data.result.count;
            this.groupStartTime = res.data.result.groupEndTime;
            this.groupEndTime = res.data.result.groupStartTime;
            this.ruleForm.groupPrice = res.data.result.groupPrice;
            this.ruleForm.memberNum = res.data.result.memberNum;    //videoCount
            // 视频观看次数
            // videoCount
            // console.log(333,this.config.initialContent)
            //    var ue = UE.getEditor('editor');
            // // editor准备好之后才可以使用
            // ue.addListener("ready", function () {
            //     //赋值
            //     ue.setContent("<i>要传入的值</i>");
            //     //取值
            //     var content = ue.getContent();
            // })

            //开售时间
            // if (res.data.result.ishelf == 1) {
            //   if (res.data.result.startTime == "2080-01-01 00:00:00") {
            //     this.saleTime = 2;
            //     this.time_state = true;
            //   } else {
            //     this.saleTime = 1;
            //     this.saleStartTime = res.data.result.startTime;
            //     this.saleEndTime = res.data.result.endTime;
            //     this.time_state = false;
            //   }
            // } else {
            //   this.saleTime = 0;
            //   this.time_state = true;
            // }


            //截取开课时间
            // var startTime = new Date(res.data.result.courseDetail.startTime);
            // var yy = parseInt(startTime.getFullYear());
            // var mm =
            //   startTime.getMonth() + 1 < 10
            //     ? "0" + (startTime.getMonth() + 1)
            //     : startTime.getMonth() + 1;
            // var dd = parseInt(startTime.getDate());
            // var start_time = yy + "-" + mm + "-" + dd;

            // var endTime = new Date(res.data.result.courseDetail.endTime);
            // var y = parseInt(endTime.getFullYear());
            // var m =
            //   endTime.getMonth() + 1 < 10
            //     ? "0" + (endTime.getMonth() + 1)
            //     : endTime.getMonth() + 1;
            // var d = parseInt(endTime.getDate());
            // var end_time = y + "-" + m + "-" + d;
            // this.courseStartTime = start_time;
            // this.courseEndTime = end_time;

            //截取拼团日期
            // var startTime = new Date(res.data.result.groupStartTime);
            // var y = parseInt(startTime.getFullYear());
            // var m =
            //   startTime.getMonth() + 1 < 10
            //     ? "0" + (startTime.getMonth() + 1)
            //     : startTime.getMonth() + 1;
            // var d = parseInt(startTime.getDate());
            // var h =
            //   startTime.getHours() + 1 < 10
            //     ? "0" + startTime.getHours()
            //     : startTime.getHours() + 1;
            // var minute =
            //   startTime.getMinutes() + 1 < 10
            //     ? "0" + startTime.getMinutes()
            //     : startTime.getMinutes() + 1;
            // var s =
            //   startTime.getSeconds() + 1 < 10
            //     ? "0" + startTime.getSeconds()
            //     : startTime.getSeconds() + 1;
            // var start_time =
            //   y + "-" + m + "-" + d + "  " + h + ":" + minute + ":" + s;

            // var endTime = new Date(res.data.result.groupEndTime);
            // var y = parseInt(endTime.getFullYear());
            // var m =
            //   endTime.getMonth() + 1 < 10
            //     ? "0" + (endTime.getMonth() + 1)
            //     : endTime.getMonth() + 1;
            // var d = parseInt(endTime.getDate());
            // var h =
            //   endTime.getHours() + 1 < 10
            //     ? "0" + endTime.getHours()
            //     : endTime.getHours() + 1;
            // var minute =
            //   endTime.getMinutes() + 1 < 10
            //     ? "0" + endTime.getMinutes()
            //     : endTime.getMinutes() + 1;
            // var s =
            //   endTime.getSeconds() + 1 < 10
            //     ? "0" + endTime.getSeconds()
            //     : endTime.getSeconds() + 1;

            // var end_time =
            //   y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + s;

            //  this.courseStartTime = res.data.result.startDate;
            // this.courseEndTime = res.data.result.endDate;

            // this.ruleForm.courseNum = res.data.result.num;
            // this.ruleForm.courseTime = res.data.result.time;
            // this.courseId = res.data.result.courseDetail.courseId;

          }else{
            console.log('没找到数据')
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    submitForm(formName) {
      // jquery  表单验证
      this.$refs[formName].validate(valid => {
        console.log("valid", valid, this.ruleForm);
        let content = this.$refs.ueditor.getUEContent()
        if (this.edit_id != "") {
          if (this.ruleForm.imgVideo == "") {
            var temp_img = this.tempImgVideo;
          } else {
            var temp_img = JSON.stringify(this.ruleForm.imgVideo);
          }
        } else {
          var temp_img = JSON.stringify(this.ruleForm.imgVideo);
          console.log("图片", temp_img);
        }

        if (this.assemble_state) {
          this.igroup = 1;
        } else {
          this.igroup = 0;
        }
        var params = {
          id: parseInt(this.edit_id),
          title: this.ruleForm.title,
          subjectId: this.ruleForm.category, // 分类id
          imgVideo: temp_img,
          video:'[{"video_title":"视频1","video_content":"地址1"},{"video_title":"视频2","video_content":"地址2"}]',
          videoType: this.classType,    // 视频用途
          lable: JSON.stringify(this.ruleForm.lable),
          subtitle: this.ruleForm.subtitle,
          // courseNum: this.ruleForm.courseNum,
          // courseTime: this.ruleForm.courseTime,
          origPrice: this.ruleForm.origPrice,
          disPrice: this.ruleForm.disPrice,
          igroup: this.igroup,                                                // 是否团购
          groupPrice: this.ruleForm.groupPrice,
          groupStartTime: this.groupStartTime ? this.groupStartTime : null,
          groupEndTime: this.groupEndTime ? this.groupEndTime : null,
          count: this.ruleForm.count,
          surplusCount: this.ruleForm.courseTime,      // 上课时间
          // courseStartTime: this.courseStartTime,
          // courseEndTime: this.courseEndTime,
          ishelf: this.iShelf,
          // courseId: this.courseId,
          // course: this.orglist,
          descr: content,
          startTime: this.saleStartTime ? this.saleStartTime : null,
          endTime: this.saleEndTime ? this.saleEndTime : null,
          memberNum: this.ruleForm.memberNum,
          videoLevel: this.videoLevel,    // 视频级别
          courseId:this.hotCourseId
        };
        console.log("保存参数", params);
        if (valid) {
          if (this.edit_id != "") {
            this.$axios({
              method: "post",
              url: "/store/hotProduct/updateHotOneLineProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                if(res.data.errorCode == 0){
                   this.$router.go(-1);
                   this.ruleForm.veryify_code = "";
                }else{
                  this.$message(res.data.errorMessage)
                }
               
              })
              .catch(error => {
                console.log("error", error);
              });
          } else {
            // 新建活动
            this.$axios({
              method: "post",
              url: "/store/hotProduct/updateHotOneLineProduct",
              data: params,
              headers: {
                Authorization: sessionStorage.getItem("Authorization")
              }
            })
              .then(res => {
                console.log("add-success");
                this.$router.push("/online_course");
                this.ruleForm.veryify_code = "";
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
          } else if (this.ruleForm.grade == "") {
            this.$message.error("请输入视频等级");
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
</style>


