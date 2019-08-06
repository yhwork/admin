<!--
//vue 自带编辑器
// <template>
//     <div>
//         <div class="crumbs">
//             <el-breadcrumb separator="/">
//                 <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 素材管理</el-breadcrumb-item>
//             </el-breadcrumb>
//         </div>
//         <div class="content_box1">
//             <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
//             <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
//         </div>
//     </div>
// </template>

// <script>
//     import 'quill/dist/quill.core.css';
//     import 'quill/dist/quill.snow.css';
//     import 'quill/dist/quill.bubble.css';
//     import { quillEditor } from 'vue-quill-editor';
//     export default {
//         name: 'material_manage',
//         data: function(){
//             return {
//                 content: '',
//                 editorOption: {
//                     placeholder: 'Hello World'
//                 }
//             }
//         },
//         components: {
//             quillEditor
//         },
//         methods: {
//             onEditorChange({ editor, html, text }) {
//                 this.content = html;
//             },
//             submit(){
//                 console.log(this.content);
//                 this.$message.success('提交成功！');
//             }
//         }
//     }
// </script>
// <style scoped>
//     .editor-btn{
//         margin-top: 20px;
//     }
// </style>

-->

<!--
//引用百度编辑器

<template>
  <div class="content_box1">
   <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。支持页面内多次调用。</div> 
   <button @click="getUEContent()">获取内容</button>

    <div class="editor-container">
      <UE :defaultMsg="defaultMsg" :config="config" :id="ue1" ref="ue"></UE>
    </div>
    <el-button @click="getUEContentTxt()">获取无文本内容</el-button>
  </div>
</template>
<style scoped>
.el-button {
  margin-top: 20px;
}
</style>
<script>
import UE from "@/components/page/UE.vue";
export default {
  components: { UE },
  data() {
    return {
      defaultMsg: "<span><strong>hello world</strong></span>",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      ue1: "ue1", // 不同编辑器必须不同的id
      ue2: "ue2"
    };
  },
  methods: {
    getUEContent() {
      let content = this.$refs.ue.getUEContent(); // 调用子组件方法
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    },
    getUEContentTxt() {
      let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    }
  }
};
</script>

<style scoped>
.edui-dialog edui-for-preview edui-default {
  left: 50px;
  width: 300px !important;
  height: 200px !important;
  z-index: 1009 !important;
}
.edui-default .edui-dialog {
  /* z-index: 2000; */
  position: absolute;
  /* left: 50%; */
}
.edui-dialog-content edui-default {
  width: 300px !important;
  height: 200px !important;
}
</style>

-->

<template>
  <div class="content_box1">
    <!-- {{ msg }} -->
    <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></tinymce-editor>
    <div class="btn_box">
      <el-button @click="clear">清空内容</el-button>
      <el-button @click="disabled = true">禁用</el-button>
    </div>
  </div>
</template>
<script>
import TinymceEditor from "./tinymce-editor";
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      msg: "Hello World",
      disabled: false
    };
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    }
  }
};
</script>

<style>
.tox .tox-dialog--width-lg {
  border: 1px solid red !important;
}
.btn_box {
  margin-top: 20px;
}
</style>

