<template>
  <div>
    <script id="editor" type="text/plain"></script>
    
  </div>
</template>
<script>
export default {
  name: "UEditor",
  props: {
    id: {
      type: String
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    //初始化UE
    const _this = this;
    this.editor = UE.delEditor("editor");
    console.log('富文本传入的值',this.config)
    this.editor = UE.getEditor("editor", this.config);
    // this.setContent(this.config.initialContent)
    // 隐藏图片拉伸框
    // this.editor.ready(function() {
    //   var id = editor.ui.id;
    //   var style = document.createElement('style');
    //   style.innerHTML = '#{id}_imagescale,#{id}_imagescale_cover{display:none !important;}'.replace(/{id}/g, id);
    //   document.head.append(style);
    // });
  },
  // 页面执行
  beforeCreate() {
    // console.log('执行了啊')
    window.addEventListener('beforeunload', function(event) {
        // console.log('beforeunload关闭之前',event);
      });
    window.addEventListener('unload', function(event) {
        // console.log('unload关闭',event);
      });
  },
  // 页面销毁
  beforeDestroy() {
    //  console.log('销毁了吗')
  window.removeEventListener("unload", (e)=>{
    // console.log('unload移除',e)
  });
  },
  // 方法
  methods: {
    // 获取文本内容
    getUEContent: function() {
      return this.editor.getContent();
    },
    // 获取纯文本
    getContentTxt: function() {
      return this.editor.getContentTxt();
    },
    // 设置内容
    setContent(txt) {
      return this.editor.setContent(txt);
    }
  },
  // 销毁
  destoryed() {
    this.editor.destory();
  }
};
</script>
