


<!--
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
            </div>
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
</template>
-->
<!-- <script> 

//     import 'quill/dist/quill.core.css';
//     import 'quill/dist/quill.snow.css';
//     import 'quill/dist/quill.bubble.css';
//     import { quillEditor } from 'vue-quill-editor';
//     export default {
//         name: 'UE',
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


   


<template>
  <div>
    <script :id=id type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      },
      id: {
        type: String
      },
      content:{
         type: String
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor(this.id, this.config); // 初始化UE  
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
      console.log("上传这堆错误不用理会，上传接口需自行开发配置");
      
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      },
      getUEContentTxt() { // 获取纯文本内容方法
        return this.editor.getContentTxt()
      },
      setContent(){
        return this.editor.setContent()
      },
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>

<style>
/* .edui-editor {
  width: 900px!important;
  height: 600px!important;
  border: 1px solid red;
} */
/* .edui-default>>>.edui-editor-iframeholder >>> .edui-default {
   width: 900px!important;
    height: 430px!important;
    z-index: 999;
    overflow: hidden;
} */
</style>


