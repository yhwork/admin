<template>
  <div class="home">
    <div>
      <!-- 主窗口 -->
      <v-header></v-header>
      <!--
         左边菜单栏    请求后台给的 
      -->
      <v-aside v-bind:menuList="menuList"></v-aside>
      <!-- 内容部分 -->
      <v-center></v-center>
      <div class="content_box" :class="{'content_box2':collapse}">
        <v-tags></v-tags>
        <div class="content">
          <!-- keep-alive: 用来缓存组件,避免多次加载相应的组件,减少性能消耗 -->
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
              <!-- v-if="$route.meta.keepAlive" -->
            </keep-alive>
            <!-- <router-view v-if="!$route.meta.keepAlive"/> -->
          </transition>
        </div>
      </div>
    </div>
    <div class="mask_box" v-if="mask_state">
      <!-- <el-form class="popup_box" :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="content_left">
          <!-- <span>企业认证信息</span> 
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div v-else>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">营业执照上传</div>
            </div>
          </el-upload>
        </div>
        <div class="content_right">
          <div class="input_item">
            <div class="symbol_box">
              <span class="input_symbol">*</span>
              <span>名称</span>
            </div>
            <el-input class="input_box" placeholder="请输入名称"   v-model="ruleForm.name"></el-input>
          </div>
          <div class="input_item">
            <div class="symbol_box">
              <span class="input_symbol2">*</span>
              <span>简称</span>
            </div>
            <el-input class="input_box" placeholder="请输入名称" v-model="ruleForm.subname"></el-input>
          </div>
          <div class="input_item">
            <div class="symbol_box">
              <span class="input_symbol">*</span>
              <span>电话</span>
            </div>
            <el-input class="input_box" placeholder="请输入电话"  v-model="ruleForm.phone"></el-input>
          </div>
          <div class="input_item">
            <div class="symbol_box">
              <span class="input_symbol">*</span>
              <span>地址</span>
            </div>
            <!-- <el-input class="input_box" placeholder="请输入地址" v-model="getAddress"></el-input>
            <el-button style="margin-left:20px;">搜索地图</el-button>
            <el-amap-search-box
              class="search-box"
              :search-option="searchOption"
              :on-search-result="onSearchResult"
            ></el-amap-search-box>
          </div>
          <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="amap_vue">
              <el-amap-marker v-for="marker in markers" :position="marker"></el-amap-marker>
              <el-amap-info-window
                :position="currentWindow.position"
                :content="currentWindow.content"
                :visible="currentWindow.visible"
                :events="currentWindow.events"
              ></el-amap-info-window>
            </el-amap>
          </div>

          <div class="btn_box">
            <!-- <el-button @click="cancelMask">取消</el-button> 
            <el-button type="primary" @click.prevent="saveInfo('ruleForm')">保存</el-button>
          </div>
        </div>
      </el-form>-->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="popup_box"
      >
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="主体信息认证"></el-step>
          <el-step title="账号认证"></el-step>
          <el-step title="门店信息"></el-step>
          <el-step title="金额认证"></el-step>
        </el-steps>
        <div v-if="active==0">
          <div class="title">主体信息</div>
          <el-form-item label="我是：" prop="orgType">
            <el-radio-group v-model="ruleForm.orgType" @change="radioState(ruleForm.orgType)">
              <el-radio label="0">公司</el-radio>
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">公益组织</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="orgType==0">
            <div>
              <el-form-item label="企业名称：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称"></el-input>
              </el-form-item>
              <el-form-item label="企业法人：" prop="legal_person">
                <el-input v-model="ruleForm.legal_person" placeholder="请输入企业法人姓名"></el-input>
              </el-form-item>
              <el-form-item label="法人证件： " prop="positive">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadPositive"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="positive" :src="positive" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">身份证正面</div>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="法人证件： " prop="back">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadBack"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="back" :src="back" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">身份证背面</div>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="营业执照：" prop="license_img">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :headers="headers"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="license_img" :src="license_img" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">营业执照上传</div>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="营业执照号：" prop="license_num">
                <el-input v-model="ruleForm.license_num" placeholder="请输入营业执照号"></el-input>
              </el-form-item>
              <el-form-item label="证件有效期：" prop="startTime">
                <el-date-picker
                  v-model="ruleForm.startTime"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  @change="getLicencesDate"
                ></el-date-picker>
                <span v-if="!licences_checked">至</span>
                <el-date-picker
                  v-model="ruleForm.endTime"
                  type="date"
                  placeholder="选择日期"
                  v-if="!licences_checked"
                  value-format="yyyy-MM-dd"
                  @change="getLicencesDate1"
                ></el-date-picker>
                <el-checkbox v-model="licences_checked" @change="licences_change">长期</el-checkbox>
              </el-form-item>
            </div>
          </div>
          <div v-else-if="orgType==1">
            <div>
              <el-form-item label="企业名称：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称"></el-input>
              </el-form-item>
              <el-form-item label="身份证号码：" prop="idcardNum">
                <el-input v-model="ruleForm.idcardNum" placeholder="请输入身份证号码"></el-input>
              </el-form-item>
              <el-form-item label="身份证有效期：" prop>
                <el-date-picker
                  v-model="ruleForm.startTime1"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  @change="getidcardDate"
                ></el-date-picker>
                <span v-if="!licences_checked">至</span>
                <el-date-picker
                  v-model="ruleForm.endTime1"
                  type="date"
                  placeholder="选择日期"
                  v-if="!licences_checked"
                  value-format="yyyy-MM-dd"
                  @change="getidcardDate1"
                ></el-date-picker>
                <el-checkbox v-model="licences_checked" @change="licences_change">长期</el-checkbox>
              </el-form-item>
              <el-form-item label="证件照： " prop="holdIdcard">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadHoldIdcard"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="holdIdcard" :src="holdIdcard" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">手持证件照</div>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="证件照： " prop="positive">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadPositive"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="positive" :src="positive" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">身份证正面</div>
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </div>
          <div v-else>
            <div>
              <el-form-item label="组织名称：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入组织名称"></el-input>
              </el-form-item>
              <el-form-item label="负责人：" prop="personInCharge">
                <el-input v-model="ruleForm.personInCharge" placeholder="请输入负责人"></el-input>
              </el-form-item>
              <el-form-item label="企业证件： " prop="positive">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadPositive"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="positive" :src="positive" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">身份证正面</div>
                  </div>
                </el-upload>
              </el-form-item>
              <el-form-item label="企业证件： " prop="back">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadBack"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="back" :src="back" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">身份证背面</div>
                  </div>
                </el-upload>
              </el-form-item>

              <el-form-item label="企业证件： " prop="ngoImg">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadNgoImg"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="ngoImg" :src="ngoImg" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">只需上传是公益性质的相关证件即可</div>
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </div>
        </div>
        <div v-else-if="active==1">
          <div v-if="orgType==0">
            <div>
              <div class="title">主体信息</div>
              <el-form-item label="企业名称：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称" disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="企业法人：" prop="legal_person">
                <el-input
                  v-model="ruleForm.legal_person"
                  placeholder="请输入企业法人姓名"
                  disabled="disabled"
                ></el-input>
              </el-form-item>
              <el-form-item label="营业执照号：" prop="license_num">
                <el-input v-model="ruleForm.license_num" placeholder="请输入营业执照号" disabled="disabled"></el-input>
              </el-form-item>
            </div>
            <div>
              <div class="title">银行账号信息</div>
              <el-form-item label="银行账号：" prop="bankCard">
                <el-input v-model="ruleForm.bankCard" placeholder="请输入银行账号"></el-input>
              </el-form-item>
              <el-form-item label="开户银行：" prop="bankName">
                <el-select v-model="ruleForm.bankName" @change="changeBank" placeholder="请选择">
                  <el-option
                    v-for="item in bankList"
                    :label="item.bankName"
                    :key="item.bankId"
                    :value="item.bankId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户支行：" prop="name">
                <el-select
                  v-model="ruleForm.name"
                  value-key="code"
                  placeholder="请选择"
                  @change="changeCity"
                >
                  <el-option
                    v-for="item in provinceList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select v-model="name" value-key="name" placeholder="请选择" @change="changeArea">
                  <el-option
                    v-for="item in cityList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  value-key="subBranchId"
                  @change="changeSubBank"
                >
                  <el-option
                    v-for="item in banksListByCity"
                    :key="item.subBranchId"
                    :label="item.subBranchName"
                    :value="item.subBranchId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户许可证：" prop="openingPermit">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadPermit"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="openingPermit" :src="openingPermit" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">开户许可证上传</div>
                  </div>
                </el-upload>
                <div class="hint_info">请真实填写银行账号和开户行，保证自身收益权益</div>
              </el-form-item>
            </div>
          </div>
          <div v-else-if="orgType==1">
            <div>
              <div class="title">主体信息</div>
              <el-form-item label="姓名：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称" disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="身份证号码：" prop="idcardNum">
                <el-input v-model="ruleForm.idcardNum" placeholder="请输入企业法人姓名"></el-input>
              </el-form-item>
            </div>
            <div>
              <div class="title">银行账号信息</div>
              <el-form-item label="银行账号：" prop="bankCard">
                <el-input v-model="ruleForm.bankCard" placeholder="请输入银行账号"></el-input>
              </el-form-item>
              <el-form-item label="开户银行：" prop="bankName">
                <el-select v-model="ruleForm.bankName" @change="changeBank" placeholder="请选择">
                  <el-option
                    v-for="item in bankList"
                    :label="item.bankName"
                    :key="item.bankId"
                    :value="item.bankId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户支行：" prop="name">
                <el-select
                  v-model="ruleForm.name"
                  value-key="code"
                  placeholder="请选择"
                  @change="changeCity"
                >
                  <el-option
                    v-for="item in provinceList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select v-model="name" value-key="name" placeholder="请选择" @change="changeArea">
                  <el-option
                    v-for="item in cityList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  value-key="subBranchId"
                  @change="changeSubBank"
                >
                  <el-option
                    v-for="item in banksListByCity"
                    :key="item.subBranchId"
                    :label="item.subBranchName"
                    :value="item.subBranchId"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div v-else>
            <div>
              <div class="title">主体信息</div>
              <el-form-item label="组织名称：" prop="legal_name">
                <el-input v-model="ruleForm.legal_name" placeholder="请输入企业名称" disabled="disabled"></el-input>
              </el-form-item>
              <el-form-item label="负责人：" prop="personInCharge">
                <el-input v-model="ruleForm.personInCharge" placeholder="请输入企业法人姓名"></el-input>
              </el-form-item>
            </div>
            <div>
              <div class="title">银行账号信息</div>
              <el-form-item label="银行账号：" prop="bankCard">
                <el-input v-model="ruleForm.bankCard" placeholder="请输入银行账号"></el-input>
              </el-form-item>
              <el-form-item label="开户银行：" prop="bankName">
                <el-select v-model="ruleForm.bankName" @change="changeBank" placeholder="请选择">
                  <el-option
                    v-for="item in bankList"
                    :label="item.bankName"
                    :key="item.bankId"
                    :value="item.bankId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户支行：" prop="name">
                <el-select
                  v-model="ruleForm.name"
                  value-key="code"
                  placeholder="请选择"
                  @change="changeCity"
                >
                  <el-option
                    v-for="item in provinceList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select v-model="name" value-key="name" placeholder="请选择" @change="changeArea">
                  <el-option
                    v-for="item in cityList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  ></el-option>
                </el-select>
                <el-select
                  v-model="value"
                  placeholder="请选择"
                  value-key="subBranchId"
                  @change="changeSubBank"
                >
                  <el-option
                    v-for="item in banksListByCity"
                    :key="item.subBranchId"
                    :label="item.subBranchName"
                    :value="item.subBranchId"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户许可证：" prop="openingPermit">
                <el-upload
                  class="upload_box1"
                  action="/store/file/img/upload"
                  :show-file-list="false"
                  :on-success="uploadPermit"
                  :headers="headers"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="openingPermit" :src="openingPermit" class="avatar">
                  <div v-else>
                    <i class="el-icon-plus"></i>
                    <div class="el-upload__text">开户许可证上传</div>
                  </div>
                </el-upload>
                <div class="hint_info">请真实填写银行账号和开户行，保证自身收益权益</div>
              </el-form-item>
            </div>
          </div>
        </div>
        <div v-else-if="active==2" style="margin-top:20px">
          <el-form-item label="门店名称：" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入门店名称"></el-input>
          </el-form-item>

          <el-form-item label="门店 logo： " prop="logo">
            <el-upload
              class="upload_box1"
              action="/store/file/img/upload"
              :show-file-list="false"
              :on-success="uploadlogo"
              :headers="headers"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="logo" :src="logo" class="avatar">
              <div v-else>
                <i class="el-icon-plus"></i>
                <div class="el-upload__text">上传logo</div>
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item label="主营类目：" prop="category">
            <el-select v-model="ruleForm.category" value-key="id" placeholder>
              <el-option
                v-for="item in categoryList"
                :label="item.name"
                :key="item.id"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="门店负责人：" prop="personInCharge">
            <el-input v-model="ruleForm.personInCharge" placeholder="请输入负责人姓名"></el-input>
          </el-form-item>
          <el-form-item label="负责人手机号：" prop="picPhone">
            <el-input v-model="ruleForm.picPhone" placeholder="请输入负责人手机号"></el-input>
          </el-form-item>
          <el-form-item label="短信验证码：" prop="veryify_code">
            <div class="input_box">
              <el-input v-model="ruleForm.veryify_code" placeholder="请输入短信验证码"></el-input>
              <el-button
                :plain="true"
                v-if="btnTitle"
                class="ml"
                @click="getVerificationCode()"
                :disabled="code_state"
              >{{btnTitle}}</el-button>
            </div>
            <span class="hint_info">验证短信将发送到你绑定的手机：{{user_tel}}，请注意查收</span>
          </el-form-item>

          <el-form-item label="选择门店类型：" prop="companyType">
            <el-radio-group v-model="companyType" @change="changeType">
              <el-radio-button label="0">直营店</el-radio-button>
              <el-radio-button label="1">加盟店</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <div v-if="veryifyType">
            <div class="title">请选择你可提供的认证信息</div>
            <el-form-item label="加盟授权书： " prop="joinImg">
              <el-upload
                class="upload_box1"
                action="/store/file/img/upload"
                :show-file-list="false"
                :on-success="uploadJoinImg"
                :headers="headers"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="joinImg" :src="joinImg" class="avatar">
                <div v-else>
                  <i class="el-icon-plus"></i>
                  <div class="el-upload__text">非原件照片需加盖公司红色公章</div>
                </div>
              </el-upload>
            </el-form-item>
          </div>
          <el-form-item label="门店地址：" prop="address">
            <el-input v-model="keyword"></el-input>
          </el-form-item>

          <div>
            <baidu-map
              class="map"
              id="mapID"
              center="上海市"
              :zoom="zoom"
              :scroll-wheel-zoom="true"
              @click="getMarker"
              style="witdth:400px;height:300px;"
            >
              <bm-local-search
                :keyword="keyword"
                :auto-viewport="true"
                :location="location"
                zoom="12.8"
                style="display: none"
              ></bm-local-search>
            </baidu-map>
          </div>
        </div>

        <div v-else-if="active==3" style="margin-top:20px">
          <div style="margin-bottom:20px;">
            请在 {{orgAuthCommitTime}} 前使用户名为
            <span style="color:#67c571">{{orgCompanyName}}</span>
            的银行账户汇款至下述账户。
          </div>
          <el-form-item label="汇款金额：" prop="orgAuthMoney">
            <el-input v-model="ruleForm.orgAuthMoney" disabled="disabled"></el-input>
            <span class="hint_info">请汇入指定金额，非指定金额将验证失败。验证结束后，汇款金额将全额退还至汇款账户</span>
          </el-form-item>
          <el-form-item label="收款卡号：" prop="bankCard1">
            <el-input v-model="ruleForm.bankCard1" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="收款户名：" prop="payee">
            <el-input v-model="ruleForm.payee" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="开户银行：" prop="bank">
            <el-input v-model="ruleForm.bank" disabled="disabled"></el-input>
            <span class="hint_info">对应联行号为 {{orgBankCode}}</span>
          </el-form-item>
          <el-form-item label="省市信息：" prop="city">
            <el-input v-model="ruleForm.city" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="备注信息：" prop="info">
            <el-input v-model="ruleForm.info" disabled="disabled"></el-input>
          </el-form-item>
        </div>

        <div class="wait_box" v-else>
          <div>
            <img src="../../assets/images/wait.png" alt srcset class="wait_img">
            <div>提交成功，请耐心等待审核</div>
          </div>
        </div>

        <div v-if="next_state">
          <el-button
            v-if="active==1||active==2||active==3"
            style="margin-top: 12px;"
            @click="prev"
          >上一步</el-button>
        </div>

        <el-button
          style="margin-top: 12px;"
          type="primary"
          v-if="active==0||active==1"
          @click="submitForm('ruleForm')"
        >下一步</el-button>

        <el-button
          type="primary"
          v-if="active==2"
          style="margin-top: 12px;"
          @click="submitForm('ruleForm')"
        >提交认证</el-button>

        <div v-if="next_state">
          <el-button
            type="primary"
            v-if="active==3"
            style="margin-top: 12px;"
            @click="submitForm('ruleForm')"
          >完成</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>


<script>
import vHeader from "@/components/common/Header.vue";
import vAside from "@/components/common/Aside.vue";
import vTags from "@/components/common/Tags.vue";
import vCenter from "@/components/common/helpCenter.vue";
import bus from "./bus";

export default {
  components: { vHeader, vAside, vTags, vCenter },
  data() {
    return {
       collapse: false,   // 默认
      jgNameDialog: false,
      show: false,
      postionMap: {
        //地图坐标
        lng: 120.211486,
        lat: 30.256576
      },
      location: "",
      keyword: "", //搜索框关键词
      zoom: 12.8, //放大比例
      address: "", //位置详细信息
      add: {
        siteName: "",
        site: "",
        jd: "",
        wd: "",
        desce: "",
        type: "",
        jgName: "",
        jgNum: ""
      },
      organizationData: [],
      jgName: "",
      jgNum: "",

      headers: {
        Authorization: sessionStorage.getItem("Authorization") //从cookie里获取token，并赋值  Authorization ，而不是token
      },
      tagsList: [],
      menuList: [],
      mask_state: false,

      imageUrl: "",
      license_img: "",
      positive: "",
      back: "",
      radio: "1",
      value: "",
      checked: "",
      getAddress: "",
      active: 0,
      categoryList: [],
      bankList: [],
      provinceList: [],
      cityList: [],
      banksListByCity: [],
      bankId: "",
      cityId: "",
      bankType: "",
      bank: "",
      bankTypeCode: "",
      bankCode: "",
      veryifyType: false,
      user_tel: "",
      btnTitle: "获取验证码",
      code_state: false, //是否可点击
      orgAuthCommitTime: "",
      orgBankCode: "",
      orgCompanyName: "",

      org: "",
      id: "", //修改的机构id(必填)
      type: "0", //类型：0-总部 1-分校区(必填)
      orgType: "0", //机构类型：0公司 1个人 2公益组织(必填)
      name: "", //机构名称(必填)
      alias: "", //机构别名
      tel: "", //电话(必填)
      logo: "", //logo
      companyName: "", //企业名称(必填)
      companyLegalPerson: "", //企业法人(必填)
      licences: "", //营业执照(必填)
      licencesNum: "", //营业执照号(必填)
      openingPermit: "", // 开户许可证(必填)
      idcarda: "", //身份证正面(必填)
      idcardb: "", //身份证背面(必填)
      holdIdcard: "", //手持身份证照片(必填)
      bankCardType: "", //银行卡类别(1中国 2工行 3招行...)(必填)
      bankCard: "", //银行卡账号(必填)
      slogan: "", //口号
      address: "", //简介
      descr: "", //简介
      longitude: "", //经度(必填)
      latitude: "", //纬度(必填)
      subjectId: "", //主营类目id(必填)
      authStatus: "", //认证状态:1-提交主体认证 2-提交账号认证 5-提交金额认证 9-提交门店认证(必填)
      licencesExpiryDate: "",
      idcardExpiryDate: "",
      next_state: true,
      disabled: true,
      licences_checked: false,
      joinImg: "",
      companyType: "0",
      personInCharge: "",
      picPhone: "",
      idcardNum: "",
      ngoImg: "",

      ruleForm: {
        orgType: "0",
        legal_name: "",
        legal_person: "",
        certificates: "",
        positive: "",
        back: "",
        license_img: "",
        license: "",
        license_num: "",
        store_info: "",
        category: "",
        veryify_code: "",
        bankCard: "",
        bankCardType: "",
        openingPermit: "",
        orgAuthMoney: "",
        bankCard1: "",
        payee: "",
        bank: "",
        city: "",
        info: "入驻账户认证",
        tel: "",
        licencesExpiryDate: "",
        idcardExpiryDate: "",
        startTime: "",
        endTime1: "",
        startTime1: "",
        endTime: "",
        bankName: "",
        joinImg: "",
        name: "",
        logo: "",
        address: "",
        longitude: "",
        latitude: "",
        personInCharge: "",
        picPhone: "",
        joinImg: "",
        idcardNum: "",
        holdIdcard: "",
        ngoImg: ""
      },

      rules: {
        ngoImg: [
          { required: true, message: "请上传组织证件", trigger: "blur" }
        ],
        holdIdcard: [
          { required: true, message: "请上传手持证件照", trigger: "blur" }
        ],
        idcardNum: [
          { required: true, message: "请输入身份证号码", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入门店名称", trigger: "blur" }],
        logo: [{ required: true, message: "请上传门店照片", trigger: "blur" }],
        personInCharge: [
          { required: true, message: "请输入负责人", trigger: "blur" }
        ],
        picPhone: [
          { required: true, message: "请输入负责人手机号", trigger: "blur" }
        ],
        tel: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        bankName: [
          { required: true, message: "请选择开户银行", trigger: "blur" }
        ],
        bankCard: [
          { required: true, message: "请输入银行账号", trigger: "blur" }
        ],
        bankCardType: [
          { required: true, message: "请输入开户行", trigger: "blur" }
        ],
        openingPermit: [
          { required: true, message: "请上传开户许可证", trigger: "blur" }
        ],
        positive: [
          { required: true, message: "请上传身份证正面", trigger: "blur" }
        ],
        back: [
          { required: true, message: "请上传身份证背面", trigger: "blur" }
        ],
        license_img: [
          { required: true, message: "请上传营业执照", trigger: "blur" }
        ],
        legal_name: [
          { required: true, message: "请输入企业名称", trigger: "blur" }
        ],
        legal_person: [
          { required: true, message: "请输入企业法人", trigger: "blur" }
        ],
        certificates: [
          { required: true, message: "请上传企业证件", trigger: "blur" }
        ],
        license: [
          { required: true, message: "请上传营业执照", trigger: "blur" }
        ],
        license_num: [
          { required: true, message: "请输入营业执照号", trigger: "blur" }
        ],
        store_info: [
          { required: true, message: "请输入门店名称", trigger: "blur" }
        ],
        category: [
          { required: true, message: "请选择主营类目", trigger: "blur" }
        ],
        veryify_code: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    // 监听状态
    bus.$on("collapse", msg => {
      this.collapse = msg;
      console.log("msg",msg)
    });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });

    this.getList();
    this.getUserInfo();
    this.getCategory();
    this.getBankList();
  },

  methods: {
    //获取当前用户信息
    getUserInfo() {
      this.$axios({
        method: "get",
        url: "/store/storeUser/getCurrentUserInfo",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
         
          if (res.data.errorCode != "400001") {
             console.log("userinfo", res,res.data.errorCode);
          sessionStorage.setItem("id", res.data.result.userInfo.id);
          sessionStorage.setItem("orgId", res.data.result.userInfo.orgId);
          this.user_tel = res.data.result.userInfo.account;
            this.id = res.data.result.userInfo.orgId;
             this.orgId = res.data.result.userInfo.orgId;
            // this.orgType = res.data.result.orgInfo.orgType
            //   ? res.data.result.orgInfo.orgType
            //   : 0;
          }
          if (res.data.errorCode == "400000") {
            console.log("用户登录过期，重新登录");
            this.$router.push("/login");
          } else if (res.data.errorCode == "400001") {
            console.log("用户登录过期，重新登录");
            this.$router.push("/login");
          } else if (res.data.errorCode == "300000") {
            console.log("跳转到填写主体认证信息页面");
            this.mask_state = true;
            this.active = 0;
          } else if (res.data.errorCode == "300001") {
            console.log("跳转到填写账号认证信息页面");
            this.mask_state = true;
            this.active = 1;
            this.ruleForm.legal_name = res.data.result.orgInfo.orgCompanyName;
            this.ruleForm.legal_person =
              res.data.result.orgInfo.orgCompanyLegalPerson;
            this.ruleForm.license_num = res.data.result.orgInfo.orgLicencesNum;
          } else if (res.data.errorCode == "300002") {
            console.log("跳转到填写门店认证信息页面");
            this.mask_state = true;
            this.active = 2;
            this.ruleForm.orgAuthMoney = res.data.result.orgInfo.orgAuthMoney;
            this.ruleForm.bankCard1 = res.data.result.orgInfo.bankCard;
            this.ruleForm.payee = res.data.result.orgInfo.payee;
            this.ruleForm.bank = res.data.result.orgInfo.bank;
            this.ruleForm.city = res.data.result.orgInfo.city;
          } else if (res.data.errorCode == "300003") {
            console.log(
              "跳转到账号打款审核提示页面(orgInfo获取打款账号等相关信息)"
            );
            this.mask_state = true;
            this.next_state = false;
            this.active = 3;
            this.ruleForm.orgAuthMoney = res.data.result.orgInfo.orgAuthMoney;
            this.ruleForm.bankCard1 = res.data.result.orgInfo.bankCard;
            this.ruleForm.payee = res.data.result.orgInfo.payee;
            this.ruleForm.bank = res.data.result.orgInfo.bank;
            this.ruleForm.city = res.data.result.orgInfo.city;
            this.orgAuthCommitTime = res.data.result.orgInfo.orgAuthCommitTime;
            this.orgBankCode = res.data.result.orgInfo.orgBankCode;
            this.orgCompanyName = res.data.result.orgInfo.orgCompanyName;
          } else if (res.data.errorCode == "300004") {
            console.log(
              "跳转到编辑主体认证信息页面(orgInfo获取认证信息及认证失败原因)"
            );
            this.mask_state = true;
            this.ruleForm.legal_name = res.data.result.orgInfo.orgCompanyName;
            this.ruleForm.legal_person =
              res.data.result.orgInfo.orgCompanyLegalPerson;
            this.ruleForm.positive = res.data.result.orgInfo.orgIdcarda;
            this.ruleForm.back = res.data.result.orgInfo.orgIdcardb;
            this.ruleForm.license_img = res.data.result.orgInfo.orgLicences;
            this.ruleForm.license_num = res.data.result.orgInfo.orgLicencesNum;
            // this.ruleForm.orgLicencesExpiryDate=res.data.result.orgInfo.orgLicencesExpiryDate

            this.ruleForm.orgAuthMoney = res.data.result.orgInfo.orgAuthMoney;
            this.ruleForm.bankCard1 = res.data.result.orgInfo.bankCard;
            this.ruleForm.payee = res.data.result.orgInfo.payee;
            this.ruleForm.bank = res.data.result.orgInfo.bank;
            this.ruleForm.city = res.data.result.orgInfo.city;
          } else if (res.data.errorCode == "300005") {
            console.log(
              "跳转到编辑账号认证信息页面(orgInfo获取认证信息及认证失败原因"
            );
            this.mask_state = true;
            this.active = 2;
            // this.next_state = false;
          } else if (res.data.errorCode == "300006") {
            console.log(
              "跳转到编辑门店认证信息页面(orgInfo获取认证信息及认证失败原因)"
            );
            this.mask_state = true;
            this.active = 3;
          } else if (res.data.errorCode == "300007") {
            console.log("跳转到账号打款审核提示页面，提示用户重新账号打款审核");
            this.mask_state = true;
            this.active = 3;
          } else if (res.data.errorCode == "300008") {
            console.log("认证成功，跳转到完善门店信息页面");
          } else if (res.data.errorCode == "0") {
            console.log("成功");
          } else if (res.data.errorCode == "1") {
            console.log("失败");
          }
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //获取当前用户信息
    getUserInfo2() {
      this.$axios({
        method: "get",
        url: "/store/storeUser/getCurrentUserInfo",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.id = res.data.result.userInfo.orgId;
          // sessionStorage
          this.orgId = res.data.result.userInfo.orgId;
          this.orgType = res.data.result.orgInfo.orgType;
          this.ruleForm.legal_name = res.data.result.orgInfo.orgCompanyName;
          this.ruleForm.license_num =
            res.data.result.orgInfo.orgCompanyLegalPerson;
          this.ruleForm.legal_person = res.data.result.orgInfo.orgLicencesNum;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    getCode() {
      //倒计时
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.code_state = false;
          this.btnTitle = "获取验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.code_state = true;
          time--;
        }
      }, 1000);
    },

    // 获取验证码
    getVerificationCode() {
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.user_tel)) {
        this.$message.error("手机号不正确");
      } else {
        this.getCode();
        this.$axios({
          method: "post",
          url: "/store/sms/getSmsVerifyCode?phone=" + this.user_tel,
          headers: { Authorization: sessionStorage.getItem("Authorization") }
        })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    },

    //获取搜索的地址
    getMarker(e) {
      this.longitude = e.point.lng;
      this.latitude = e.point.lat;
      let geocoder = new BMap.Geocoder(); //创建地址解析器的实例
      geocoder.getLocation(e.point, rs => {
        console.log("point", e.point, rs, rs.address);
        this.address = rs.address;
        this.keyword = rs.address;
      });
    },

    //获取分类
    getCategory() {
      this.$axios({
        method: "get",
        url: "/store/org/getOrgSubList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.categoryList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //查询所有开户银行
    getBankList() {
      this.$axios({
        method: "get",
        url: "/store/banks/getBanksList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.bankList = res.data.result;
          this.getProvinceList();
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    changeBank(e) {
      this.bankId = e;
      this.bankTypeCode = e;
      let obj = {};
      obj = this.bankList.find(item => {
        return item.bankId === e;
      });
      this.bankType = obj.bankName;
      console.log(this.bankType);
    },

    //根据开户银行和省市查询开户支行
    getSubBankList() {
      console.log("this.bankId", this.bankId, typeof this.bankId);
      this.$axios({
        method: "post",
        url:
          "/store/banks/getBanksListByCity?bankId=" +
          this.bankId +
          "&cityId=" +
          this.cityId,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log("getBanksListByCity", res);
          this.banksListByCity = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //查询所有省份
    getProvinceList() {
      this.$axios({
        method: "get",
        url: "/store/city/getProvinceList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          // console.log("provinceList", res);
          this.provinceList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    changeCity(e) {
      this.getCityList(e);
    },

    changeArea(e) {
      this.cityId = e;
      this.getSubBankList();
    },

    changeSubBank(e) {
      this.bankCode = e;
      let obj = {};
      obj = this.banksListByCity.find(item => {
        return item.subBranchId === e;
      });
      this.bank = obj.subBranchName;
      console.log(this.bank);
    },

    //查询省份下所有市辖区
    getCityList(code) {
      console.log("code", code);
      this.$axios({
        method: "get",
        url: "/store/city/getCityList/" + code,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log("getCityList", res);
          this.cityList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //获取菜单列表
    getList() {
      this.$axios({
        method: "get",
        url: "/store/menu/getMenuList",
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          this.menuList = res.data.result;
        })
        .catch(error => {
          console.log("error", error);
        });
    },

    //关闭弹窗
    cancelMask() {
      this.mask_state = false;
    },

    //机构类型
    radioState(e) {
      if (e == "0") {
        this.orgType = "0";
      } else if (e == "1") {
        this.orgType = " 1";
      } else if (e == "2") {
        this.orgType = "2";
      }
    },

    //获取营业执照日期
    getLicencesDate(e) {
      this.ruleForm.startTime = e;
    },

    getLicencesDate1(e) {
      this.ruleForm.endTime = e;
    },

    //获取身份证有效期
    getidcardDate(e) {
      this.ruleForm.startTime1 = e;
    },

    getidcardDate1(e) {
      this.ruleForm.endTime1 = e;
    },

    //营业执照-长期
    licences_change(e) {
      this.licences_checked = e;
    },

    //上传图片
    uploadPositive(res, file) {
      this.ruleForm.positive = file.raw;
      this.positive = URL.createObjectURL(file.raw);
      this.idcarda = res.result;
    },

    uploadBack(res, file) {
      this.ruleForm.back = file.raw;
      this.back = URL.createObjectURL(file.raw);
      this.idcardb = res.result;
    },

    handleAvatarSuccess(res, file) {
      this.ruleForm.license_img = file.raw;
      this.license_img = URL.createObjectURL(file.raw);
      this.licences = res.result;
    },

    uploadPermit(res, file) {
      this.ruleForm.openingPermit = file.raw;
      this.openingPermit = URL.createObjectURL(file.raw);
      this.openingPermit = res.result;
    },

    uploadlogo(res, file) {
      this.ruleForm.logo = file.raw;
      this.logo = URL.createObjectURL(file.raw);
      this.logo = res.result;
    },

    uploadJoinImg(res, file) {
      this.ruleForm.joinImg = file.raw;
      this.joinImg = URL.createObjectURL(file.raw);
      this.joinImg = res.result;
    },

    uploadHoldIdcard(res, file) {
      this.ruleForm.holdIdcard = file.raw;
      this.holdIdcard = URL.createObjectURL(file.raw);
      this.holdIdcard = res.result;
    },

    uploadNgoImg(res, file) {
      this.ruleForm.ngoImg = file.raw;
      this.ngoImg = URL.createObjectURL(file.raw);
      this.ngoImg = res.result;
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    changeType(e) {
      this.veryifyType = !this.veryifyType;
      this.companyType = e;
    },

    //上一步
    prev() {
      --this.active;
      if (this.active < 0) this.active = 0;
      console.log(this.active);
      if (this.active == 1) {
        this.getUserInfo2();
      }
    },

    //表单验证，下一步
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("submitForm", valid, this.ruleForm, this.active);

        if (valid) {
          if (this.active == 0) {
            this.authStatus = 1;
          } else if (this.active == 1) {
            this.authStatus = 2;
          } else if (this.active == 2) {
            this.authStatus = 3;
          }

          if (this.active++ > 3) this.active = 0;

          if (this.active == 1) {
            this.orgType = parseInt(this.ruleForm.orgType); //机构类型：0公司 1个人 2公益组织(必填)
            this.companyName = this.ruleForm.legal_name; //企业名称(必填)

            if (this.orgType == "0") {
              this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
              this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
            } else if (this.orgType == "1") {
              this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
              this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
              this.idcardNum = this.ruleForm.idcardNum;
            } else if (this.orgType == 2) {
              this.personInCharge = this.ruleForm.personInCharge; //企业法人(必填)
              this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
            }

            if (this.licences_checked) {
              this.licencesExpiryDate = JSON.stringify({
                startTime: this.ruleForm.startTime
              });
              this.idcardExpiryDate = JSON.stringify({
                startTime: this.ruleForm.startTime1
              });
            } else {
              this.licencesExpiryDate = JSON.stringify({
                startTime: this.ruleForm.startTime,
                endTime: this.ruleForm.endTime
              });
              this.idcardExpiryDate = JSON.stringify({
                startTime: this.ruleForm.startTime1,
                endTime: this.ruleForm.endTime1
              });
            }
          } else if (this.active == 2) {
            this.companyName = this.ruleForm.legal_name; //企业名称(必填)
            this.companyLegalPerson = this.ruleForm.legal_person; //企业法人(必填)
            this.licencesNum = this.ruleForm.license_num; //营业执照号(必填)
            this.bankCardType = this.ruleForm.bankCardType; //银行卡类别(1中国 2工行 3招行...)(必填)
            this.bankCard = this.ruleForm.bankCard; //银行卡账号(必填)
          } else if (this.active == 3) {
            (this.personInCharge = this.ruleForm.personInCharge),
              (this.personInCharge = this.ruleForm.personInCharge),
              (this.address = this.ruleForm.address);
            this.name = this.ruleForm.name;
            this.subjectId = this.ruleForm.category;
          }

          this.saveInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    //表单提交
    saveInfo() {
      var params = {};
      if (this.active == 1) {
        params = {
          orgType: this.orgType,
          name: this.name,
          companyName: this.companyName,
          licencesExpiryDate: this.licencesExpiryDate,
          idcardExpiryDate: this.idcardExpiryDate,
          companyLegalPerson: this.companyLegalPerson,
          idcarda: this.idcarda,
          idcardb: this.idcardb,
          licences: this.licences,
          licencesNum: this.licencesNum,
          subjectId: this.subjectId,
          idcardNum: this.idcardNum,
          holdIdcard: this.holdIdcard,
          personInCharge: this.personInCharge,
          ngoImg: this.ngoImg,
          authStatus: this.authStatus,
          id: this.orgId
        };
      } else if (this.active == 2) {
        params = {
          companyName: this.companyName,
          companyLegalPerson: this.companyLegalPerson,
          licencesNum: this.licencesNum,
          bankCard: this.bankCard,
          openingPermit: this.openingPermit,
          authStatus: this.authStatus,
          id: this.orgId,
          bankType: this.bankType,
          bank: this.bank,
          bankTypeCode: this.bankId,
          bankCode: this.bankCode
        };
      } else if (this.active == 3) {
        params = {
          authStatus: this.authStatus,
          id: this.orgId,
          joinImg: this.joinImg,
          subjectId: this.subjectId,
          companyType: parseInt(this.companyType),
          picPhone: this.picPhone,
          personInCharge: this.personInCharge,
          latitude: this.latitude,
          longitude: this.longitude,
          address: this.address,
          logo: this.logo,
          name: this.name
        };
      } else if (this.active == 4) {
        // params={
        //   authStatus: this.authStatus,
        //   id: this.orgId,
        // }
      }

      console.log("saveinfo", params, this.active);

      this.$axios({
        method: "put",
        url: "/store/org/updateOrgInfo",
        data: params,
        headers: { Authorization: sessionStorage.getItem("Authorization") }
      })
        .then(res => {
          console.log("save", res, this.ruleForm);
          this.getUserInfo();
          this.ruleForm.veryify_code = "";
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>





<style scoped>

.hint_info {
  color: #999;
}
.home {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}

.content_box {
  width: 80%;
  position: absolute;
  left: 10%;
  right: 0;
  top: 80px;
  bottom: 0;
  background: #f0f0f0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content_box2{
  width: 87%;
  left:3%;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.content_box1 {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background: #fff;
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
}
.popup_box {
  margin: 100px;
  width: 1200px;
  height: 800px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  overflow: scroll;
}
.content_right {
  width: 80%;
  margin-left: 40px;
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
.upload_box1 .avatar {
  width: 200px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add {
  font-size: 50px;
  color: #ccc;
  text-align: center;
  /* line-height: 80px; */
}

.upload_info {
  font-size: 15px;
  margin: 10px 0;
}
.input_item {
  height: 50px;
  display: flex;
  align-items: center;
}
.input_symbol {
  color: #e51c23;
  color: 18px;
}
.input_box {
  width: 50%;
}
.input_info {
  font-size: 14px;
  color: #999;
  margin-left: 20px;
}
.symbol_box {
  margin-right: 10px;
}
.input_symbol2 {
  color: #fff;
}
.amap-wrapper {
  width: 1060px;
  height: 300px;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}
.search-box {
  position: absolute;
  top: 0;
  left: 0px;
}
.btn_box {
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.btn_box el-button {
  margin-left: 50px;
}
.el-form-item__label {
  width: 110px !important;
}
.el-form-item__content {
  margin-left: 110px !important;
}
.el-vue-search-box-container {
  position: relative;
  width: 450px !important;
  height: 40px !important;
  background: #fff;
  box-shadow: none !important;
  border-radius: 0;
  z-index: 10;
}
.search-box-wrapper {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.title {
  font-size: 18px;
  position: relative;
  margin: 8px 0;
}
.title::after {
  content: "";
  width: 2px;
  height: 100%;
  background: orange;
  position: absolute;
  left: -10px;
  border-radius: 3px;
}
.input_box {
  display: flex;
}
.input_box .el-button {
  margin-left: 10px;
}
.wait_box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 50px;
}
.wait_img {
  width: 80px;
  height: 80px;
  margin-bottom: 30px;
}
.el-input.is-disabled >>> .el-input__inner {
  color: #000 !important;
  cursor: auto !important;
  background: #fff;
}

.el-vue-search-box-container >>> .search-box-wrapper input {
  border: 1px solid #dcdfe6 !important;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
  