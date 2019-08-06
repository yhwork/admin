<template>
  <div class="content_box1">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="图片" name="first">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture-card"
        >
          <el-button type="primary">上传图片</el-button>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="语音" name="second">
        <el-button type="primary">上传语音</el-button>
      </el-tab-pane>
      <el-tab-pane label="视频" name="third">
        <el-button type="primary">上传视频</el-button>
      </el-tab-pane>
      <el-tab-pane label="素材中心">
        <!-- <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></tinymce-editor>
        <div class="btn_box">
          <el-button @click="clear">清空内容</el-button>
          <el-button @click="disabled = true">禁用</el-button>
        </div>-->
        <!--  -->
        <el-row :gutter="20">
          <el-col :span="12" class="phone_box">
            <div class="device-ios">
              <div class="device-inner">
                <div>111</div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="editor-container">
              <UE :defaultMsg="defaultMsg" :config="config" :id="ue1" ref="ue" :init="myInit">
                <iframe id="xiumi" src="//xiumi.us/studio/v5#/paper" v-show="showXiumi"></iframe>
              </UE>
            </div>
            <el-button @click="getUEContentTxt()">获取无文本内容</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import TinymceEditor from "./tinymce-editor";
import UE from "@/components/page/UE.vue";
export default {
  name: "source",
  components: {
    TinymceEditor,
    UE
  },
  data() {
    return {
      defaultMsg: "<span><strong>hello world</strong></span>",
      ue1: "ue1", // 不同编辑器必须不同的id
      ue2: "ue2",

      activeName: "first",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [
        {
          // name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          // name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log("file", file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
    getUEContentTxt() {
      let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    },
    myInit() {
      this.$refs.ue.registerButton({
        name: "test",
        icon: "/static/xiumi-connect-icon.png",
        tip: "this is a test tip",
        handler: (editor, name) => {
          // 点击自定义按钮事你需要做的事
        }
      });
    },
  }
};
</script>   

<style scoped>
.tox .tox-dialog--width-lg {
  border: 1px solid red !important;
}
.btn_box {
  margin-top: 20px;
}
.edui-dialog edui-for-preview edui-default {
  left: 50px;
  width: 300px !important;
  height: 200px !important;
  z-index: 1009 !important;
}
.edui-default .edui-dialog {
  position: absolute;
}
.edui-dialog-content edui-default {
  width: 300px !important;
  height: 200px !important;
}
.phone_box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.device-ios {
  width: 300px;
  height: 580px;
  background: #111;
  border-radius: 55px;
  box-shadow: 0px 0px 0px 2px #aaa;
  padding: 60px 20px 80px 20px;
  position: relative;
  margin-right: 80px;
}

.device-ios:before {
  content: "";
  width: 60px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  top: 30px;
}

.device-ios:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 5px solid #333;
}

.device-inner {
  background-color: #fff;
  height: 100%;
}
</style>

